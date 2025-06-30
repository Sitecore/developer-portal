---
title: 'Testing Framework'
description: 'Ensure production readiness by validating performance, security, system behaviour, accessibility, and business acceptance before go-live.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated:  '2025-04-30'
created: '2025-04-30'
audience: ['All']
---

## Context
Irrespective if this is your first go-live, or a new feature release, go-live is the last checkpoint before users experience your site - and there’s no room for surprises. Validating system stability, security, and usability under real-world conditions protects your reputation and reduces post-launch support needs.

## Execution
Go-live requires a cross organization collaboration, bringing together key validation areas - performance, security, system behaviour, accessibility, and user acceptance - to make sure everything is production-ready.


### 1. Performance Testing

A performance test is any test that measures stability, performance, scalability and/or throughput of your web application. It is used to ensure the final build meets the expectations of an end user and helps a business achieve its objectives.
- Test the performance and scalability of the solution under load.
- Validate key functionalities like login, search, and API responses.
- Ensure critical pages (e.g., homepage, commerce) load as expected.

Make sure that you have a cross organization alignment of the traffic you are targeting - and estimate the expected traffic and peak load. For example, 1,000 concurrent users, with peak traffic occurring at specific times such as marketing campaigns or high-traffic periods like holidays.

Ideally through this process, you should end up with a list of mismatches between expected and actual performance of their web application. Having a deeper insight into the weaker points of your app helps during fine-tuning and brings more substance to the decision-making process.

Make sure that you have clearly defined KPI’s for your Performance test, for example:

- Page load time (goal: < 3 seconds)
- API response time (goal: < 200ms for key APIs)
- Time to first byte (TTFB < 1 second)
- Throughput (requests per second)
- Uptime and availability (99.9%)

**Tooling Suggestions**

- Run Load Testing using tools like [Blazemeter](https://www.blazemeter.com/) to simulate 10x expected traffic.
- Simulate large-scale tests from multiple locations to test global distribution.
- [Apache JMeter](https://jmeter.apache.org/): Widely used for load testing web applications and APIs.
- Test your Sitecore XM Cloud API endpoints for concurrent requests.
- Simulate high loads to test how the backend scales with increased traffic.
- [New Relic](https://newrelic.com/), [AppDynamics](https://www.splunk.com/en_us/appdynamics-joins-splunk.html?301=appdynamics): APM tools to identify performance bottlenecks.
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview): Assess frontend performance, render time, TTFB.

### 2. Security Testing

Security testing for a website is the process of identifying and mitigating vulnerabilities in a website's infrastructure, code, and configuration to ensure that it remains secure from unauthorized access, data breaches, and malicious attacks. 

This involves detecting weaknesses in the website’s code, architecture, or configuration that could allow unauthorized access or malicious behaviour. 

- Ensure that access controls are correctly implemented - only authorized users should be able to access protected areas or sensitive functionality. 
- Security testing also plays a critical role in protecting data integrity and confidentiality, helping to prevent tampering, data theft, or exposure of personally identifiable information. 
- Beyond safeguarding the system, it ensures compliance with legal and regulatory standards such as GDPR, HIPAA, or PCI-DSS. 
- It should also helps maintain website availability by identifying risks such as DDoS (Distributed Denial-of-Service) vulnerabilities that could disrupt the user experience or business operations.

Different types of security testing focus on various points of vulnerability, from source code to infrastructure to user access:

| **Security test**                    | **Description**                                                                                   |
|------------------------------------------|---------------------------------------------------------------------------------------------------|
| **Vulnerability Scanning**               | Use automated tools to scan for known vulnerabilities, such as outdated software or misconfigurations. |
| **Penetration Testing**                  | Simulate real-world attacks to identify exploitable weaknesses.                                  |
| **Risk Assessment**                      | Evaluate the potential risks associated with various vulnerabilities and prioritize fixes based on impact. |
| **Ethical Hacking**                      | Engage professional "white-hat" hackers to uncover security issues.                              |
| **Static Application Security Testing (SAST)** | Analyze the website's source code for vulnerabilities during development.                    |
| **Dynamic Application Security Testing (DAST)** | Test the running website for vulnerabilities in its operational environment.                 |
| **Security Audit**                       | Review the website's compliance with security policies and standards.                            |


### 3. System Testing

The primary purpose of system testing is to evaluate the system's compliance with the specified requirements. As XM Cloud is headless, the front end retrieves the content via APIs - this architecture separates content from presentation, so the website will consist of:

- Headless front-end (e.g., Next.js app)
- Sitecore back-end content management
- APIs that serve content
- Cloud-hosted infrastructure

For example, when testing a corporate website for a global brand built in XM Cloud, we will want to verify that the entire system, from the CMS to the front-end to the cloud APIs, works as expected when integrated.

#### Non-Functional testing

| **Category**     | **Validation Points**                                                                 |
|------------------|----------------------------------------------------------------------------------------|
| **Performance**  | - Measure site load time across regions (since XM Cloud is global). <br/> - Test caching layers (e.g., Edge delivery or CDN). <br/> - Simulate high-traffic to see how well cloud infra scales. |
| **Security**     | - Ensure content preview links are protected. <br/> - Test role-based access: editors shouldn't access admin APIs. <br/> - Check for misconfigured endpoints exposing backend logic. |
| **Compatibility**| - Test across browsers (Chrome, Safari, Edge). <br/> - Ensure responsive design works across devices (mobile, tablet). |


#### Functional testing

| **Feature**           | **What to Test**                  | **Expected Result**                      |
|------------------|-------------------------------|--------------------------------------|
| **Homepage loads**   | Call homepage URL             | Site loads with correct content      |
| **Navigation**       | Click on nav links            | Pages load properly                  |
| **Localization**     | Switch language               | Content updates via CMS             |
| **Dynamic content**  | Edit hero banner in Pages     | Update reflects on live site         |

#### API & Content Delivery Testing
We will want to do the following tests to validate:
- Test GraphQL/REST APIs that fetch content
- Simulate broken/slow APIs to test frontend fallback behaviour.
- Validate API response formats match frontend expectations.

This can be achieved through [setting up the GraphQL playground](https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-the-graphql-playgrounds-to-test-published-content.html#set-up-the-delivery-api-playground), an example query can be run to test published content:

```graphql
query { 
  layout(language: "en", routePath: "/", site: "site1") { 
    item { rendered } 
  }
  site {
    allSiteInfo {
      results { 
        name 
        routes(first: 10, language: "en") { 
          results { routePath route { id } } 
        }
      }
    }
  }
}
```

### 4. Regression Testing

Regression testing needs to be in place from day one - making sure you have consistency and stability. When bugs gets fixes, new functionality added, or existing features modified, there is a risk of introducing new bugs. It is particularly important in agile development environments where frequent changes are made to the codebase.

Before executing regression testing, follow these steps to ensure proper coverage and efficiency:

| Step                     | Description                                                                                     |
|--------------------------|-------------------------------------------------------------------------------------------------|
| Test Case Selection      | Determine which test cases to run based on the component with the most code modifications.      |
| Time Estimation          | Estimate the time required for test execution.                                                  |
| Automate Test Cases      | Decide between manual and automated regression tests based on the number of test cases.         |
| Test Case Prioritization | Prioritize test cases based on recent code changes.                                             |
| Test Execution           | Run all test cases in the order of priority to find flaws and ensure the application functions correctly. |


To get the most value out of regression testing, keep your regression test suite up to date by adding new tests for existing features as they evolve. Use structured regression testing frameworks to reduce maintenance overhead. Where possible, automate regression tests to enforce consistency but also make sure to include exploratory testing to uncover unexpected edge case issues.

Several tools can be used for creating and executing regression tests:
- [Selenium](https://www.selenium.dev/): An open-source web automation testing tool.
- [LambdaTest](https://www.lambdatest.com/): An AI-powered test orchestration and execution platform.
- [Serenity](https://www.baeldung.com/serenity-bdd): An open-source framework for automated regression and acceptance testing.
- [Watir](http://watir.com/): A tool that uses Ruby for testing web applications.

### 5. Authoring End-to-End Testing

While this isn’t a user experience, authoring is part of the system, the test below is required to ensure a smooth experience for content authors.
- Can a content editor log in?
- Can they create a new content page?
- Does the new page go live via publishing?
- Does Pages App reflect real-time changes?

With this we’re testing full chain: **authoring** to **publishing** to **API delivery** to **frontend rendering**

### 6. Deployment and Environment Validation
Since Sitecore XM Cloud involves CI/CD and cloud-hosted environments, system testing also includes:

- Verifying environment-specific configs (e.g., staging vs production)
- Ensuring content sync works across environments
- Validating proper API keys, CDN configs, and Sitecore roles

#### Example test case: Verify Homepage Personalization

| Scope         | Test case                                                                                   |
|---------------|-----------------------------------------------------------------------------------------------|
| **Preconditions** | Returning visitor, segment = "Tech Enthusiast"                                               |
| **Steps**         | 1. Visit homepage<br/>2. XM Cloud identifies segment<br/>3. Load personalized banner            |
| **Expected**      | Homepage displays tech-related promo from personalization rules                               |


Make sure also that all the monitoring requirements have been validated - ensure logging, error tracking, and alerting tools are functioning pre-launch. Confirm recovery processes and rollback options are tested and documented.

### 7. Accessibility Testing

Accessibility testing for a website is the process of evaluating how easily people, including those with disabilities, can navigate, interact with, and understand the content on a website across  visual, auditory, motor, and cognitive impairments.

Considerations of accessibility testing should include:

| **Accessibility Area**                   | **What to Validate**                                                                                                                                                      |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Keyboard accessibility**               | Ensure all site functionality (navigation, forms, interactive elements etc) can be accessed and operated using a keyboard alone, without a mouse. Critical for users with motor disabilities. |
| **Screen reader compatibility**          | Verify that screen readers correctly interpret and announce content. Check for properly labelled headings, form fields, images (with alt text), and links.               |
| **Colour contrast and visual design**    | Confirm that text has sufficient contrast against background colours. WCAG recommends a minimum contrast ratio of 4.5:1 for normal-sized text to support users with low vision or colour blindness. |
| **Text alternatives for non-text content** | Ensure all non-text content (e.g., images, videos, icons) includes descriptive alt text or captions, allowing screen readers to describe the content accurately.       |
| **Scalability and responsive design**    | Test how well content and layout respond to screen zoom and text resizing. Pages should remain usable and readable across different devices and assistive display settings. |
| **Error identification and prevention**  | Validate that form errors and validation messages are clear, specific, and accessible. Include instructions or suggestions to help users correct issues, especially important for users with cognitive impairments. |

Automated Testing Tools such as Axe, Wave, Lighthouse, and Accessibility Insights automatically scan websites for common accessibility issues. Manual testing can be approached with Assistive Technologies, Testing with screen readers (e.g., NVDA, JAWS, VoiceOver etc.). If possible having end user testing with individuals with disabilities test the website offers invaluable, real-world feedback that automated tools might miss.

**Accessibility Testing Standards**
- [WCAG (Web Content Accessibility Guidelines)](https://www.w3.org/TR/WCAG21/): The most widely accepted global standard, with three levels of complicane: A, AA, and AAA - AA being the minimum recommended level for most sites.
- [ARIA (Accessible Rich Internet Applications)](https://www.w3.org/TR/using-aria/): Specifies ways to make dynamic content and advanced user interface controls accessible.                                              


## Insights
Go-live validation is where testing meets accountability - and UAT is the final checkpoint. Everyone plays a part in verifying that the implementation works as intended, holds up under pressure, and delivers the experience users expect.

Make sure to build a checklist to confirm that every critical area has been validated. This isn't just about ticking boxes - this is to make sure that nothing gets missed. At a minimum this should include:
- Performance benchmarks validated under load
- No critical security vulnerabilities remaining
- System tests passed across full user journeys
- Key integrations verified and stable
- Regression test suite executed and cleared
- Accessibility validated (AA level or higher)
- UAT signed off by business stakeholders
- Rollback and recovery plans tested
- Monitoring and alerting live and ready in production

As an example of this:

| **Test Area**             | **What to Validate** |
|---------------------------|----------------------|
| **Functional Checks**     | <ul>  <li>Expected user journey paths work, including edge cases</li>  <li>Users can register, log in, and reset passwords</li>  <li>Shopping carts and checkout flows work end-to-end</li>  <li>Confirmation emails or messages are triggered correctly</li></ul> |
| **Content Authoring**     | <ul>  <li>Content authors can create, edit, preview, and publish content</li>  <li>Workflow steps and permissions function as expected</li>  <li>Media uploads, embeds, and rendering behave correctly</li></ul> |
| **End-User Usability**    | <ul>  <li>Navigation is intuitive and user flows (e.g., product search, form submission) are working as expected</li>  <li>Calls-to-action are clear and functional</li>  <li>Key journeys can be completed without confusion</li></ul> |
| **Content Accuracy**      | <ul>  <li>Text is accurate, consistent, and free of typos</li>  <li>Images, videos, and links display and work correctly</li>  <li>Localized content appears where appropriate</li></ul> |
| **Cross-Browser / Device**| <ul>  <li>Website functions correctly in Chrome, Firefox, Safari, and Edge</li>  <li>Responsive design works on desktops, tablets, and mobile devices</li></ul> |
| **Accessibility**         | <ul>  <li>Screen readers can navigate the site effectively</li>  <li>Focus states, keyboard navigation, and ARIA roles are implemented</li>  <li>Color contrast and visual cues meet WCAG 2.1 AA standards</li></ul> |


## Related Recipes

<Row columns={2}>
  <Link title="Planning test strategy" link="/learn/accelerate/xm-cloud/pre-development/project-planning/test-strategy-planning" />
  <Link title="Testing foundations" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/testing-foundations" />  
</Row>

## Related Documentation

<Row columns={2}>
    <Link title="Data privacy" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-privacy.html" />  
    <Link title="Experience Edge" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions-of-experience-edge.html" />
</Row>


