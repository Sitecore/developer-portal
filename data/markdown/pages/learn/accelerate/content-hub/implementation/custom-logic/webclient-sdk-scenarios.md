---
title: 'Webclient SDK Scenarios'
description: 'A deeper dive on best practice on using the Webclient SDK.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
created: '2024-12-13'
audience: ['Product Owners','Technical Implementers', 'Architects','System Administrators']
---

## Context
As discussed in the [External Integrations](/learn/accelerate/content-hub/implementation/custom-logic/external-integrations) recipe, WebClient SDK is one of the options to build scripts inside Sitecore Content Hub. There are further use-cases where this will be utalized.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.


## Execution

### Impersonating Another User
By default, any scripted CRUD operations will be logged as the authenticated user (created by, modified by, etc.). In many scenarios this may not be ideal, or for entities that should be related to another User, may not work at all.

The Webclient SDK and the Scripting SDK, both offer a way to impersonate another user, an example in the below:
```typescript
IMClient impersonationClient = await MClient.ImpersonateAsync("Demo.User");
```
<br/><br/>
You will then use this new client to perform activities. Note that this user will likely have far fewer permissions than the Superuser account you are using by default. We recommend the use of try catch blocks and Exception handling as methods such as SaveAsync may fail due to lack of permissions - example:

```typescript

catch (ValidationException vex)
{
    Console.WriteLine($"FAILURE ({asset.Id}): {vex.Message} : {string.Join(", ", vex.Failures)}");
}
```
<br/><br/>

### Parallel Execution - prevent throttling and reduce time “penalties”
The following is only applicable to external integrations (WebSDK and Fluent SDK, not applicable to internal Scripting SDK) because they interact with a Content Hub instance though REST API. 

In case of large migrations or external integrations that are executing bulk CRUD operations, it can take a long time if your dataset is large. Therefore, usually integrations implement some parallelization to speed things up. Below is an example using the 'Polly' library to perform actions in parallel. The maximum number of threads and maximum requests per second can be configured. 

```typescript
Bulkhead = Policy.BulkheadAsync(Settings.NumberOfThreads, int.MaxValue);

await foreach (IEntity entity in QueryManager.GetResults(query, loadConfiguration))
{
    var t = Bulkhead.ExecuteAsync(async () => { await UpdateEntityContentType(entity); });
    _updateTasks.Add(t);
}

async Task UpdateEntityContentType(IEntity content)
{
    ...
    await MClient.Entities.SaveAsync(...
}
```
<br/><br/>
Content Hub will throttle your requests per second automatically (by the Web Client SDK), so experimentation may be necessary to find a good balance. Also, be aware that the resilience related actions can be activated with "LogResilience" in the [Diagnostics Client](https://doc.sitecore.com/ch/en/developers/api-reference/web-sdk--stylelabs.m.sdk.webclient.diagnostics.diagnosticsclient.html.)


[Throttling](https://doc.sitecore.com/ch/en/developers/cloud-dev/throttling.html) the WebSDK is already supporting the retry mechanisms that come in handy when throttling kicks in from the backend. In case of bulk parallel executions done through WebSDK, ContentHub will respond with a HTTP 429 (Too Many Requests) in case 15 calls per second (per API integration user) is exceeded. Also in WebSDK we have the possibility to configure the "Retry-After" header to determine how long to wait before retrying.


However, in case of lots of parallel requests, even if we set <code>Retry-After</code> header value equal to 0 (zero), we still have the redundant penalty of a "lost" request leading to retry mechanism to kick in. Meaning that 16th call is “lost” and adds up to the entire time of execution but also the other currently parallel executing threads will start to fail until the overall call rate is back again reduced to 15 calls per second. It would be more efficient to have a way to avoid any "lost" calls and even to prevent the throttling to kick in.

With that in mind,you can present the throttling from even happening by queueing the requests of the client. 


Prevention of throttling to kick in eliminates the "penalty of overhead" by retrying. It uses the <code>SetDelegatingHandlerFactory</code> method of the [WebSDK](https://doc.sitecore.com/ch/en/developers/api-reference/web-sdk--stylelabs.m.sdk.webclient.iwebmclient.html#methods).

<strong>Example usage:</strong>
```typescript
client.SetDelegatingHandlerFactory(
    new DelegatingHandlerFactory(
        new EventLimiter(15, TimeSpan.FromSeconds(1))));
```
<br/>
<strong>Dependency code:</strong>
```typescript
using System;
using System.Collections.Generic;
using System.Threading;

namespace Commands.Helpers
{
    public class EventLimiter
    {
        private readonly Queue<DateTime> _requestTimes;
        private static readonly object Lock = new object();
        private readonly int _maxRequests;
        private readonly TimeSpan _timeSpan;
        public EventLimiter(int maxRequests, TimeSpan timeSpan)
        {
            _maxRequests = maxRequests;
            _timeSpan = timeSpan;
            _requestTimes = new Queue<DateTime>(maxRequests);
        }
        private void SynchronizeQueue()
        {
            lock (Lock)
            {
                while ((_requestTimes.Count > 0) && (_requestTimes.Peek().Add(_timeSpan) < DateTime.UtcNow))
                    _requestTimes.Dequeue();
            }
        }
        public bool CanRequestNow()
        {
            SynchronizeQueue();
            return _requestTimes.Count < _maxRequests;
        }
        public void EnqueueRequest()
        {
            try
            {
                while (!CanRequestNow())
                {
                    Console.WriteLine("---------");
                    Console.WriteLine($"zzzZ zzzzZ     Slowing down thread {Thread.CurrentThread.ManagedThreadId}...     zzzzzzZ zzzzzzzZ");
                    var sleepTime = _requestTimes.Peek().Add(_timeSpan).Subtract(DateTime.UtcNow);
                    Thread.Sleep(sleepTime.TotalSeconds > 0 ? sleepTime : _timeSpan);
                }
                _requestTimes.Enqueue(DateTime.UtcNow);
            }
            catch (Exception)
            {
                Thread.Sleep(_timeSpan);
            }
        }
    }
}
```
```typescript
using Stylelabs.M.Sdk.WebClient.Http;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Commands.Helpers
{
    public class ThrottlingDelegatingHandler : DelegatingHandler
    {
        private readonly EventLimiter _requestsLimiter;

        public ThrottlingDelegatingHandler(EventLimiter throttler)
             : base(new HttpClientHandler() { UseCookies = false })
        {
            _requestsLimiter = throttler ?? throw new ArgumentNullException(nameof(throttler));
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            _requestsLimiter.EnqueueRequest();
                       
            return await base.SendAsync(request, cancellationToken);
        }
    }
}
```
```typescript
using System.Net.Http;
using Microsoft.Extensions.Logging;
using Stylelabs.M.Sdk.WebClient.Http;

namespace Commands.Helpers
{
    public class DelegatingHandlerFactory : IDelegatingHandlerFactory
    {
        private EventLimiter eventLimiter;
        private readonly ILogger _logger;

        public DelegatingHandlerFactory(EventLimiter eventLimiter, ILogger logger)
        {
            this.eventLimiter = eventLimiter;
            _logger = logger;
        }

        public DelegatingHandlerFactory(EventLimiter eventLimiter)
        {
            this.eventLimiter = eventLimiter;
            _logger = null;
        }

        public DelegatingHandler CreateDelegatingHandler()
        {
            if (_logger == null)
            {
                return new ThrottlingDelegatingHandler(eventLimiter);
            }
            else
            {
                return new ThrottlingAndLoggingDelegatingHandler(eventLimiter, _logger);
            }
        }
    }
}
```
<br/><br/>
### Raw Queries
Sometimes you may need to perform ‘raw’ API calls. Reasons may include: the API feature you require is not present in the SDK, or where you have a requirement to get and parse json responses. This allows you to leverage the REST API from the web client SDK.

Be careful with making calls in this way, as some APIs are intended for internal Content Hub use and may be decommissioned or repurposed at any time. Refer to the API reference for details.

<strong>Example:</strong>
```typescript
HttpResponseMessage response = await MClient.Raw.GetAsync("http://localhost:8080/api/entities/1000");
response.EnsureSuccessStatusCode();
HttpResponseMessage resource = await response.Content.ReadAsJsonAsync<EntityResource> ();
```

## Related Recipes

<Row columns={2}>
  <Link title="External Integrations" link="/learn/accelerate/content-hub/implementation/custom-logic/external-integrations" />
<Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="DiagnosticsClient" link="https://doc.sitecore.com/ch/en/developers/api-reference/web-sdk--stylelabs.m.sdk.webclient.diagnostics.diagnosticsclient.html" />
  <Link title="Throttling" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/throttling.html" />
</Row>