---
title: 'Quality Assurance'
description: 'Recommendations, checklists and insights regarding Quality Assurance in Sitecore Content Hub.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-02-14'
audience: 'all'
---
## Context
Quality Assurance (QA) ensures that the platform meets user expectations, business objectives, and compliance standards before going live. Unlike [Implementation Testing](/learn/accelerate/content-hub/final-steps/testing-and-qa/implementation-testing), which is performed by the project team to verify that the system meets defined requirements, QA focuses on the end-user perspective—validating usability, workflows, and business processes.

Findings from this phase may lead to backlog items for future improvements or change requests if critical gaps are identified. Stakeholder engagement and training are essential before engaging users in testing, this is to ensure users are familiar with Sitecore Content Hub and are enabled to perform effective testing (i.e. during User Acceptance Testing (UAT)).

> In this recipe we will cover QA as it relates to Sitecore Content Hub. We cover general QA principles at a higher level and focus in on the detail on Sitecore Content Hub specifics as appropriate. Please make sure that your testing includes customizations and integrations specific to your implementation.

## Execution
Quality Assurance in Sitecore Content Hub follows a typical path involving multiple validation steps, including user acceptance testing (UAT), system usability checks, and compliance reviews. The test plan created during implementation testing can serve as a starting point, but the business team is responsible for defining UAT test cases and acceptance criteria.

To ensure meaningful results, end users participating in UAT should have at least basic training on Sitecore Content Hub. Ideally, UAT participants should have experience creating assets and running them through key lifecycle steps before testing.

### Quality Assurance Checklist

| Application |  Checklist |
| ----------- | ----------- |
| <strong>User Acceptance Testing (UAT)</strong> <br/> Validate usability and alignment with user needs. | <ul><li>Confirm stakeholders understand UAT objectives and processes.</li><li>Create scenarios based on real user workflows, covering content creation, review, and publishing.</li><li>Test all roles and permissions for accuracy.</li><li>Collect user feedback and resolve identified issues before launch.</li><li>Make sure issues are added to the UAT checklist and are tested for specifically on the next UAT run (particularly for recurring issues).</li><li>Define and meet acceptance criteria as a prerequisite for go-live.</li></ul> |
| <strong>System Usability Testing</strong> <br/> Ensure an intuitive and user-friendly system. | <ul><li>Test navigation and interface usability for representative user groups.</li><li>Identify and address potential UX issues.</li><li>Identify any slow running processes (e.g. page loads, validation scripts, external integrations or other background scripts).</li><li>Gather feedback to refine the user experience.</li></ul> |
| <strong>Security and Compliance Testing</strong> <br/> Confirm adherence to organizational policies and regulations. | <ul><li>Test role-based access controls (RBAC) for sensitive content and actions.</li><li>Validate compliance tagging and metadata requirements. </li><li>Ensure DRM policies are in place to meet business needs. </li><li>Compliance via Sitecore Content Hub DRM or via a custom implementation of members and entities.</li><li>Test archive, delete, and soft delete workflows for compliance readiness.</li></ul> |
| <strong>Documentation and Training Validation</strong> <br/> Ensure resources are in place to support users to work with Sitecore Content Hub effectively | <ul><li>Verify configuration and workflow documentation for completeness.</li><li>Confirm training materials cover key system functionalities and processes.</li><li>Establish a feedback mechanism for documentation improvements.</li><li>Establish internal channels for disseminating upcoming improvements and new features to Sitecore Content Hub users.</li></ul> |
| <strong>Post-Launch Monitoring Preparation</strong> <br/> Plan for continuous quality assurance post-launch. | <ul><li>Define ongoing monitoring protocols for platform health and [usage](https://doc.sitecore.com/ch/en/users/content-hub/view-statistics.html). </li><li>Develop audit schedules for metadata, tagging, and content structure. </li><li>Create a roadmap for iterative improvements based on feedback and metrics. </li></ul> |

## Insights

### Implementation Testing vs. Quality Assurance

It is important to distinguish between Implementation Testing and Quality Assurance (QA), as they serve different purposes in the validation process.
<ul>
  <li>Implementation Testing focuses on verifying that technical requirements are met, ensuring that the system functions as intended from a technical standpoint.</li>
  <li>QA ensures that the system is not only functional but also usable and effective for end users, addressing usability, performance, and overall experience.</li>
</ul>

### The Importance of Training
Training is essential before UAT begins. Testers need to be familiar with basic Content Hub functions to conduct meaningful tests and avoid delays caused by misunderstandings or lack of knowledge. Proper training helps ensure that UAT focuses on validating business requirements rather than uncovering basic usability issues.

### UAT Ownership
User Acceptance Testing (UAT) is primarily a business responsibility. The client or business team is responsible for defining their own test cases and acceptance criteria based on their specific needs. This ensures that the system aligns with business objectives and meets real-world operational requirements.

### Testing & Improvement Feedback Loop
Testing outcomes often lead to new backlog items for further improvements. Issues discovered during QA may result in additional development tasks, whether as part of planned future enhancements or formal change requests. Establishing a structured feedback loop between testing and development helps refine the system and ensure continuous improvement.

### Test Plan Reuse
A well-structured test plan from the Implementation Testing phase can and should be shared and adapted for UAT. While implementation testing typically focuses on verifying technical aspects, these test plans provide useful insights into edge cases, negative testing (e.g., graceful handling of bad input), and system behavior under different conditions. Adapting these plans for UAT can help create a more thorough and efficient testing process, ensuring that critical business scenarios are covered.

## Related Recipes

<Row columns={2}>
  <Link title="Implementation Testing" link="/learn/accelerate/content-hub/final-steps/testing-and-qa/implementation-testing" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Security Hardening" link="https://doc.sitecore.com/ch/en/users/content-hub/security-hardening.html" />
  <Link title="Auditing" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/auditing.html" />
  <Link title="General best practices" link="https://doc.sitecore.com/ch/en/users/content-hub/general-best-practices.html" />
  <Link title="Glossary" link="https://doc.sitecore.com/ch/en/users/content-hub/glossary.html" />
</Row>