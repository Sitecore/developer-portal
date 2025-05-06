---
title: 'Hypercare Strategy'
description: 'Ensuring a smooth transition post-launch with structured support, issue management, user training, and operational readiness.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-04-30'
created: '2025-04-30'
audience: ['All']
---

## Context
Hypercare is an optional, but highly recommended period that occurs after go-live for Content Hub.  Including a Hypercare phase as part of a Content Hub implementation helps to ensure system and integration stability and provides a means for the implementing team to quickly resolve issues, monitor performance, validate data integrity, and support user onboarding. 

This phase aims to mitigates risks and assist with issues/questions that may arise directly after go-live, ensuring a smooth transition and maximizing the platform’s effectiveness.

## Execution
A Hypercare phase is typically planned to last 2-3 weeks and begins immediately after go-live.  The phase can be planned for a longer period, depending on the client and their business needs.  The goal of this phase is to ensure system stability, user adoption, and stable operations.  

Setting a success Hypercase phase include a few items to be in place:

**1. Establish a dedicated Hypercare team** to make sure there’s a focused group responsible for quickly handling issues, answering questions, stabilizing the system, and supporting users during the critical post-launch period. For example, this should include:
<ul>
<li>**Technical lead** – Manages and delegates all technical aspects of the project.</li>
<li>**Technical team** - Team who will be performing the Hypercare tasks, normally this will be comprised of members of the implementation team and include the Content Hub Admin(s).</li>
<li>**Project Manager** – Acts as the main point of contact between the end user and the technical team, ensuring effective communication, while also tracking issues and coordinate responses.</li>
</ul>

A **Product Owner/Business Lead** should be present to support quick decision making to help the team prioritize issues, while a **Content Specialist** should be available to help support with content queries.

**2. Implement real-time monitoring strategy**, typical tasks available via Content Hub including:
- System monitoring via [Stats](https://doc.sitecore.com/ch/en/users/content-hub/view-statistics.html) page.
- Review [Jobs](https://doc.sitecore.com/ch/en/users/content-hub/jobs.html) to identify and address any failures.
- Check [Script telemetry](https://doc.sitecore.com/ch/en/developers/cloud-dev/script-telemetry.html) for errors or inefficiencies.
- Analyze [User Logs](https://doc.sitecore.com/ch/en/users/content-hub/user-logs.html) to detect failed login attempts or access issues.
- Perform a [speed test](https://doc.sitecore.com/ch/en/users/content-hub/perform-a-speed-test.html)

Further detail on these topics can be found in the *Insights* section below.

**3. Establish a process for issue tracking**, and setup a clear, organized way to capture, prioritize, assign, and resolve problems. Without a structured process, issues can pile up, get missed, or be handled inconsistently — which frustrates users and can damage trust in the new setup right after launch. For example:
- Use an issue tracking/ticketing system such as JIRA.
- Be clear on information needed when creating the ticket such as the User and Steps to reproduce.  Screenshot or Recordings if available.
- Establish the information and flow needed for any tickets that need to be opened with [Sitecore Support](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB0654910).
- Define a flow for creating a ticket to closing a ticket.

**4. Implement a structured feedback loop** for the purpose of continuous improvement/user adoption.

Collect feedback from users on usability, challenges, and missing functionalities. This can be done via holding user group sessions with a selection of power users, allowing users to send email requests to a central team (e.g. Content Hub Administrators) for feedback collection, or allow users to log feedback via a ticketing system like JIRA.

**5. Provide support for User Adoption & Training** - even the best system fails if people don’t know how to use it confidently and correctly.

Provide a Content Hub implementation manual to the Content Hub Administrators. This can be based off of materials from the implementation project such as the domain modal, security matrix/user personas.  It is a good idea to include details on integrations, custom workflows, scripts, etc.

To help with adoption, considering holding user training sessions and creating a basic user guide available for access within Content Hub. 

Address all concerns raised by Content Hub Admins to ensure smooth operations. For example, if you are struggling on user adoption, a how-to section for the different user roles might help. Demos with the internal team can help navigate the switch to using it, including visible reviews of their feedback and implementing key requests to enhance their experience.

## Insights

### Real-Time Monitoring Strategy
The **Current** activity tab of the Stats page shows the processing activity in your Sitecore Content Hub solution. Review the [Current activity](https://doc.sitecore.com/ch/en/users/content-hub/current-activity.html) documentation for further detail.

<img src="/images/learn/accelerate/content-hub/hypercare/image-20250207-210925.png" alt=""/>

### Perform a speed test

You can perform a speed test to retrieve performance data about your Sitecore Content Hub solution. The test may take several minutes to finish. Speed tests are performed from your *Profile* and the speed test dashboard displays the results of three tests **Ping**, **Download** and **Upload**. Review the [Perform a speed test](https://doc.sitecore.com/ch/en/users/content-hub/perform-a-speed-test.html) documentation for further insight.

### Review Jobs to identify and address any failures

The OOTB Background process page is filtered by login user.  We can create a new page with the same components but unfiltered by login user

We can search for ‘Background processes’ under **Pages**

<img src="/images/learn/accelerate/content-hub/hypercare/image-20250207-211033.png" alt=""/> 
<br/><br/>

### Script Telemetry

Utilize Script Telemetry to assess script performance and understand which scripts are not performant. Review the [Script telemetry](https://doc.sitecore.com/ch/en/developers/cloud-dev/script-telemetry.html) documentation for further detail.


<img src="/images/learn/accelerate/content-hub/hypercare/image-20250207-211121.png" alt=""/> 
 <br/><br/>

### User logs
Review User activity on the *Users* >* User logs* page.  You can filter by ‘*Event type*’ for `‘user.login.failed’`

<img src="/images/learn/accelerate/content-hub/hypercare/image-20250207-211138.png" alt=""/> 
 <br/><br/>

### Tools for Debugging

Use user impersonation to replicate the issue that are being raised to be able to see what your end users are seeing. This option is tied to your user security so make sure you have the right [Privileges](https://doc.sitecore.com/ch/en/users/content-hub/privileges.html).

<img src="/images/learn/accelerate/content-hub/hypercare/image-20250207-211205.png" alt=""/> 
 <br/><br/>

[Security Diagnostic](https://doc.sitecore.com/ch/en/users/content-hub/security-diagnostics.html) can be used to check user’s permissions. 
<img src="/images/learn/accelerate/content-hub/hypercare/image-20250207-211221.png" alt=""/> 
  <br/><br/>

## Related Recies

<Row columns={2}>
  <Link title="Go-Live Checklist" link="/learn/accelerate/content-hub/final-steps/go-live-checklist" />
  <Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Current activity" link="https://doc.sitecore.com/ch/en/users/content-hub/current-activity.html" /> 
  <Link title="View statistics" link="https://doc.sitecore.com/ch/en/users/content-hub/view-statistics.html"/>
  <Link title="Privileges" link="https://doc.sitecore.com/ch/en/users/content-hub/privileges.html"/>
  <Link title="Security diagnostics" link="https://doc.sitecore.com/ch/en/users/content-hub/security-diagnostics.html"/>
</Row>

