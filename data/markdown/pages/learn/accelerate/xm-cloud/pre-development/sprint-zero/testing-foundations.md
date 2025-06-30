---
title: 'Develoepr testing foundations'
description: 'Developer testing foundations for an XM Cloud implementation'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-06-16'
created: '2025-06-16'
audience: ['Architect', 'Technical Implimenters']
---

## Context
Starting with test-first development, developers can deliver robust features,  particularly in component-based CMS development, where code and content are continually being altered.

While this recipe focuses on developer-led testing, it's important to align with QA and business stakeholders for performance, security, system, and UAT testing during later stages including while [planning your testing strategy](/learn/accelerate/xm-cloud/pre-development/project-planning/test-strategy-planning) and [go-live testing](/learn/accelerate/xm-cloud/final-steps/testing-framework).

## Execution

Before you touch a line of code, define your testing approach - especially cross team, so make sure feedback loops are in place. Different test types serve different purposes and choosing the right mix up front reduces rework later.

### Unit Testing

Unit testing involves writing small, isolated tests to verify that individual components or functions in your code work as expected. These tests are typically written by developers or automation engineers during the development process and serve as a fundamental way to catch bugs early, ensure code reliability, and make refactoring safer. Unit tests are fast, allowing for quick feedback, which is essential in agile development cycles.

Testing Library emphasizes testing components from a user’s perspective, focusing on testing the interaction with DOM elements rather than internal implementation details. This aligns with best practices, as it promotes testing behaviour rather than specific code structures, making the tests more resilient to refactoring and UI changes. It encourages a more accessible, user-focused approach, where tests mimic how real users would interact with the application, such as clicking buttons or submitting forms.

[Testing Library](https://testing-library.com/) emphasizes testing components from a user’s perspective, focusing on testing the interaction with DOM elements rather than internal implementation details. This aligns with best practices, as it promotes testing behaviour rather than specific code structures, making the tests more resilient to refactoring and UI changes. It encourages a more accessible, user-focused approach, where tests mimic how real users would interact with the application, such as clicking buttons or submitting forms.

Next.js provides comprehensive documentation on several popular testing frameworks, each suited to different testing needs:

<ul>
  <li>
    <a href="https://nextjs.org/docs/app/guides/testing/vitest">Vitest</a> is a lightweight and fast alternative focused on providing a better developer experience with modern syntax.
  </li>
  <li>
    <a href="https://nextjs.org/docs/app/guides/testing/jest">Jest</a>, one of the most widely used testing frameworks, is known for its simplicity, built-in assertions, and compatibility with React.
  </li>
  <li>
    <a href="https://nextjs.org/docs/app/guides/testing/end-to-end">Playwright</a> offers powerful end-to-end testing with cross-browser support, allowing you to automate UI testing in multiple environments.
  </li>
  <li>
    <a href="https://nextjs.org/docs/app/guides/testing/end-to-end">Cypress</a>, designed specifically for frontend testing, offers an intuitive setup for testing both the application and its user interface, with features like time travel debugging and a real-time browser experience.
  </li>
</ul>

### Integration Testing
Integration testing helps ensure that the different services work together as expected without errors, providing a smooth and functional experience for users. Key aspects of integration testing include:

| **Integration Testing Area**              | **Description** |
|-------------------------------------------|-----------------|
| **Testing interactions between components** | Projects often consist of multiple components with mixed technologies (e.g., payment gateways, auth providers). Integration testing verifies that these components exchange data and function correctly when connected. |
| **Testing workflows and data flow**        | Validates end-to-end data movement across systems, such as UI to database to UI, ensuring data consistency and workflow accuracy. |
| **Validating APIs and services**           | Ensures APIs or third-party services (e.g., payments, OAuth, email) integrate reliably and handle edge cases like timeouts or bad responses. Postman can be used to create test collections with assertions and chained scenarios. |
| **Frontend-Backend integration**           | Validates communication between frontend and backend layers: for example, ensuring form submissions are processed correctly. Selenium can automate browser-based flows to test across environments. |
| **Database integration**                   | Confirms CRUD operations work as intended and that data integrity is maintained. Example: in an e-commerce site, verify account creation, cart updates, and purchase flows including payment processing and confirmation email triggers. |

### Regression Testing

Regression testing is essential for maintaining stability and performance consistency. When developers fix bugs, add new functionality, or modify existing features, there is a risk of introducing new bugs. Regression testing helps detect these issues early, ensuring that the application remains reliable and functions properly.

It is particularly important in agile development environments where frequent changes are made to the codebase.

| **Phase**                  | **Description**                                                                                     |
|----------------------------|-----------------------------------------------------------------------------------------------------|
| **Test Case Selection**     | Identify test cases linked to areas of code with the most recent or significant changes. Choose based on the scope and type of regression test to be performed. |
| **Time Estimation**         | Estimate execution time based on the size of the regression suite, test complexity, and whether tests are manual or automated. |
| **Automate Test Cases**     | Decide whether to automate tests based on volume, repeatability, and ROI. Automation is ideal for retest-all, unit, or progressive testing. |
| **Test Case Prioritization**| Rank tests based on recent changes, business impact, and critical paths. Prioritize tests for modified or high-risk modules. |
| **Test Execution**          | Run selected test cases in priority order. Use appropriate regression type based on the scope and nature of changes (see below). |


## Insights
Testing should be an integral part of your development process: not an isolated step at the end. Determine your test coverage, dependencies, and edge cases before development. Write and execute unit and integration tests together with your code as you develop to identify problems early. Verify all tests pass locally before opening a pull request and test your changes don't cause regressions in shared environments. Lastly, incorporate your tests into the CI/CD pipeline such that every deployment and commit initiates immediate verification. 

As a developer, you own the quality of your work - build trust in your code by testing what actually matters: the logic and experiences most likely to break or impact users. Use mock data only when necessary and seek to confirm real-world scenarios wherever possible. Just as important, keep your test suite tidy and current. Outdated or obsolete tests slow everyone down and undermine confidence in the process. 

Before writing any code, make sure you have covered all the basics:

| **Checklist Item**                               | **Why it matters**                                                                                                      |
|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Document your test plan**                      | Outline what you’re testing, how, and why. Include expected inputs, outputs, edge cases, and scenarios.                 |
| **Identify integration dependencies**            | List APIs, services, or systems your component or module interacts with to plan appropriate mocks or stubs.             |
| **Validate expected behaviour for shared components** | Check for existing logic, variants, or rules in shared templates or components that your changes may affect.            |
| **Set up test utilities (mocks, stubs, test data)** | Prepare reusable tools and datasets to test real-world paths and reduce test setup overhead later.                     |
| **Define regression risk areas**                 | Flag parts of the system that could be impacted by your changes,even indirectly, and include in your test plan.         |


## Related Recipes

<Row columns={2}>
  <Link title="Planning test strategy" link="/learn/accelerate/xm-cloud/pre-development/project-planning/test-strategy-planning" />
  <Link title="Testing Framework" link="/learn/accelerate/xm-cloud/final-steps/testing-framework" />  
</Row>








