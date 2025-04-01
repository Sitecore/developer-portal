---
title: 'CMS Error Monitoring'
description: 'Guidance on monitoring and managing backend exceptions in XM Cloud'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect','Technical Implementer']
---

## Context
In the transition from traditional Sitecore XP to XM Cloud headless architecture, one of the most significant shifts is how CMS errors are managed. In traditional PaaS implementations, Sitecore XP handled most exceptions through a centralized system with log files easily accessible on the server file system. With a move to SaaS, a different approach needs to be considered.

## Execution
With XM Cloud's cloud-native architecture, error management follows a different approach:

- Logs are no longer accessed through file systems but through the XM Cloud Portal.
- Errors can occur across multiple distributed services - Content Management, Layout Service or Experience Edge.
- CMS errors (XM Cloud services) and web errors (Rendering Host) are managed separately

Without understanding these changes, organizations risk missing critical errors, creating debugging challenges, and experiencing prolonged resolution times. Many XP customers migrating to XM Cloud don't realize they need to adapt their error monitoring strategies for this new environment.

### Accessing XM Cloud Portal Logs

The XM Cloud Portal Logs can be accessed through the XM Cloud Deploy app:
- Log into XM Cloud Deploy app
- On the navigation pane, click Projects
- On the Projects page, click the project that contains the environment you want to investigate
- On the project page, click the environment you want
- On the environment page, click Logs

<figure><img src="/images/learn/accelerate/xm-cloud/xmcloud-portal-logs.png" alt="View XM Cloud Environment Logs"/><figcaption></figcaption></figure>

For developers and DevOps professionals who prefer command-line tools or need to automate log access, Sitecore Cloud CLI provides robust options. Common usages as follow:

- Listing Available Logs:
`dotnet sitecore cloud environment log list -id <environment-id> --latest`

- Viewing Log Contents in Terminal:
`dotnet sitecore cloud environment log view --environment-id <env-id> --filename <filename>`

- Downloading Log Files:
`dotnet sitecore cloud environment log download --environment-id <env-id> --filename <filename>`

- Accessing Deployment Logs:
`dotnet sitecore cloud deployment log --deployment-id <id> --output <path>`

Logs are categorized by three areas:
- *Log*: Contains Content Management (CM) instance-related exceptions
- *RenderingHost*: Contains logs related to Experience Editor/Pages and headless frontend deployment
- *Deployment*: Contains build and deployment process logs

Read more detail on the [Manage an environment](https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-an-environment.html#view-environment-logs) and [Deployment Log](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-deployment-log.html#view-the-deployment-log) documentation.

### Enhancing Logging for Better Visibility

When standard logs don't provide enough detail, use the enhanced logging options

Navigate to your environment in XM Cloud Portal, select "*Variables*" from the Tablist and find `LOG_LEVEL_VALUE` and change it from `INFO` to `DEBUG`.

<figure><img src="/images/learn/accelerate/xm-cloud/xmcloud-enable-debug.png" alt="Enable Debug Mode"/><figcaption></figcaption></figure>

For enhanced Logging, make sure to enable enhanced logging temporarily for troubleshooting specific issues.  Return to standard logging levels after resolution to avoid log bloat and document specific error patterns for future troubleshooting

### Hosting Platform Logs vs. XM Cloud Logs

When troubleshooting issues in your headless implementation, knowing which logging system to check first can save significant time. XM Cloud logs only tell part of the story - your hosting platform logs (Vercel, Azure, AWS, etc.) contain critical information about the frontend rendering and delivery.

| When to check XM Cloud Logs | When to check Hosting Platform Logs |
| - | - |
| <ul><li>Problems related to Conent Management such as content creation, editing, or publishing</li><li>Issues with the composition or delivery of layout data through the Layout Service</li><li>Problems with content queries though GraphQL from the CMS</li><li>Errors related to image or asset delivery from the XM Cloud Media Library</li><li>Issues with API keys or service authentication</li></ul> | <ul><li>React/Next.js rendering errors or JavaScript exceptions</li><li>Failed builds or deployments of the frontend application</li><li>PSlow page loads or timeouts occurring after receiving data from XM Cloud</li> <li>CDN or Edge caching problems</li><li>JavaScript exceptions occurring in the browser</li></ul> |

For detailed instructions on accessing logs for your specific hosting platform, refer to the official documentation:
- [Vercel Log Documentation](https://vercel.com/docs/runtime-logs)
- [Netlify Log Documentation](https://docs.netlify.com/monitor-sites/logs/)
- [Azure App Service Logs Documentation](https://learn.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs)
- [AWS Amplify Logs Documentation](https://docs.aws.amazon.com/amplify/latest/userguide/access-logs.html)

##  Insights

Cross-system issues often occur at the integration points between XM Cloud and your hosting platform. These scenarios require investigating both systems to correctly identify the root cause.

### Example 1: Content appears in XM Cloud but not on website

This common issue occurs when content has been successfully authored and published in XM Cloud, but visitors can't see the updates on the website. This disconnect typically happens at the handoff between content delivery and frontend rendering.

Troubleshooting steps:
1. First check XM Cloud logs for publishing errors - verify content has been successfully published to Experience Edge
2. If publishing is successful, check hosting platform build logs - some headless implementations trigger rebuilds on content changes
3. Look for API connection errors in the hosting platform logs - examine if the frontend can connect to Experience Edge
4. Verify Experience Edge connectivity from your hosted environment - network restrictions or misconfigured endpoints could prevent content retrieval

### Example 2: Website showing incorrect or outdated content

When visitors see stale or incorrect content despite updates in XM Cloud, caching is often the culprit. Multiple caching layers in a headless architecture can each retain outdated content.

Troubleshooting steps:
1. Check XM Cloud logs for publication success - confirm content changes were properly published
2. Check hosting platform logs for successful build after publication - ensure the frontend application processed the content updates
3. Examine caching configurations in both systems - XM Cloud CDN caching, Experience Edge caching, and hosting platform caching all play a role
4. Look for invalidation errors in Edge CDN logs - cache invalidation failures can prevent updated content from being served

## Related Recipes

<Row columns={2}>
  <Link title="Web Application Error Monitoring" link="/learn/accelerate/xm-cloud/implementation/developer-experience/web-application-error-handling" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="The deployment log" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-deployment-log.html" />
  <Link title="Manage an environment" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-an-environment.html" />
  <Link title="The cloud deployment command" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-cloud-deployment-command.html" />
  
</Row>
