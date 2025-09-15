---
title: 'Go-Live Checklist'
description: 'Checklist and considerations before taking XM Cloud and your head application to production.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated:  '2025-04-30'
created: '2024-08-23'
audience: ['All']
---

## Context

Whether you’re launching a brand-new XM Cloud site or migrating from XP, there’s one goal: make sure the experience is stable, fast, and ready for real users. That takes more than a code push - it takes a coordinated handoff across development, content, marketing, and operations.

## Execution
Don’t wait until go-live to think about quality - quality assurance should be part of the build. Starting early saves time, reduces bugs, and provides the team guidance. Here’s what that looks like from day one:

- Unit test components as they’re created, don’t stack bugs.
- Validate content types against the agreed requirements. 
- Functionally test forms, navigation, and how components behave.
- Run accessibility, SEO, and Core Web Vitals checks early, and compare to the legacy setup.
- Begin setting up performance monitoring now. You’ll need the data to compare it to legacy.

### User Acceptance Testing
Before go-live, your solution must pass User Acceptance Testing (UAT). This ensures the implementation meets the functional expectations and aligns with what was signed off. As part of this process:
- All site features (e.g., search, integrations) function properly including end-to-end user journey’s between different application (form submission on website all the way to the CRM).
- Content is correctly structured and displayed including no broken links or missing content. Content is correctly structured and displayed including no broken links or missing content.
- Content authors have validated their workflows and publishing rights.
- Security policies (e.g., password policies, 2FA) are respected based on need, including authoring roles
- Site performance is tested (especially first load and navigation), including 
- Analytics tags, events, and goals are firing correctly.
- Double-check that the site output reflects your brand guidelines and experience works across all major browsers and device types. If it looks broken on mobile or behaves inconsistently in Safari, it’s not ready
- All stakeholders (marketing, product, legal, etc.) have reviewed, any critical feedback has been addressed and formal sign-off recorded before progressing to production changeover.

Run load and stress tests in advance to validate page speed to make sure Core Web Vitals, time to first byte (TTFB), and overall load time are in expected parameters. Your site should be hardened before it faces real users and as part of UAT make sure bot detection, firewall setup and pen testing (if needed) are setup.

### Content
Ensure your content is fully created or migrated to XMCloud - all scoped content should be in place, content types follow the new schema and hierarchies and relationships (e.g., navigation, tagging, dependencies) are preserved. Internal links and media references should all be working and point to correct locations.

- If this is a multi-language site, is there any fullback to setup? Is your web application setup correctly? Review the [Localization](/learn/accelerate/xm-cloud/implementation/information-architecture/localization) recipe for more details. Regional variations should be tested to display expected content.
- Even if you don’t have multi-site at this point, is content & sites structure setup as per recommendations? Review the [Multisite Architecture](/learn/accelerate/xm-cloud/pre-development/project-architecture/multisite) and [Site management](/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management) recipes for more detail.
- Ensure that all of your content is published to Experience Edge. Review the [Publishing to Edge](/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge) recipe for more guidance. You should review your Incremental Static Regeneration (ISR) settings in your front-end application as part of the publishing process. This will determine the delay between publishing and when the new content is available to users.  
- Shared Components and Data Sources can affect every page that includes them. Publishing a change to a shared item will trigger republishing across all pages that reference it, depending on your publishing setup.
- Make sure that your content is approved (final step of your [workflow](/learn/accelerate/xm-cloud/implementation/information-architecture/workflow)), double check that your published content shows up on your head application as expected.

### Sitecore Search
If you are using Sitecore Search, or other search platforms, make sure that this has also been indexed properly. Crawlers on Sitecore Search by default are indexing with the full url, As you have a pending a DNS change, it is not possible to index your pages on the correct url pre-go live. An action plan needs to be put in place in order to have this working. Eg.: reindex after go-live (not instantly) or indexing using relative url’s.

Make sure events on [Sitecore Search are tracked](https://doc.sitecore.com/sdk/en/developers/latest/cloud-sdk/sitecore-search-events.html). This is important to ensure that you have analytics on Search but also to support personalization on search results.

### Security
Perform a security review to ensure the correct access controls are in place and verify your data privacy compliance with XM Cloud by using the [privacy checklist](https://doc.sitecore.com/xmc/en/developers/xm-cloud/privacy-checklist.html).

Make sure your head application is setup with the appropriate security guidelines, as a reference check:
- [Vercel Production checklist](https://vercel.com/docs/production-checklist#security)
- [Netlify security checklist](https://docs.netlify.com/platform/security-checklist/)

Review the [Head Application Security](https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/security/head-application-security) recipe for more information.  

### Search Engine Optimization (SEO)
Ensure your application is SEO-optimized. Validate that your [sitemap](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html) and robots.txt are publicly accessible by search engines. Additionally, consider other essential SEO details like alt tags on images, metadata, and open graph data. Run a lighthouse test to detect any potential optimizations that are missed out for performance, Accessibility, Best practices and SEO.

Review the [On-page SEO Optimization](https://developers.sitecore.com/learn/accelerate/xm-cloud/optimization/seo-web-optimization) recipe for any optimization potential.

### Redirects
Ensure all previous or new redirects are handled. Collect all legacy URLs (from the old site, SEO tools, or analytics) and map them to the correct new URLs in XM Cloud, after removing any that no longer have a destination (404s, retired pages etc). Avoid redirect chains (one redirect should get you to the final URL).

After launch, monitor and watch for spikes in 404s using analytics and adjust the redirects based on post-launch user behavior.

Refer to the [Redirects](/learn/accelerate/xm-cloud/implementation/information-architecture/redirect) recipe for more information. 

### Error Handling
When an error occurs, ensure visitors are redirected to the proper page. See the documentation on [generating a custom static error page](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-custom-static-error-page.html) and the following recipes for more information:

- [CMS Error Monitoring](/learn/accelerate/xm-cloud/implementation/developer-experience/cms-error-monitoring) recipe
- [Web Application Error Monitoring](/learn/accelerate/xm-cloud/implementation/developer-experience/web-application-error-handling) recipe

### Analytics
Ensure that XM Cloud Pages Analyze is ready to collect your production analytics - review the [Create and assign site identifiers for Analytics](https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-personalization-and-analytics-for-sites.html) documentation for details. Without analytics, you won’t know if users are landing on the right pages, getting stuck, or bouncing immediately. First-day data helps you validate assumptions fast. This will also provide you a baseline to compare to your legacy setup, and give you early warnings of content issues.

### Head Application

Based on your [Hosting Applications](/learn/accelerate/xm-cloud/pre-development/hosting-applications), review the necessary launch plans - Vercel and Netlify provide a production launch checklist. No matter what your hosting provider is, it would be beneficial to review them both. 

- [Vercel Production Checklist for Launch](https://vercel.com/docs/production-checklist)
- [Netlify Production Launch Checklist](https://docs.netlify.com/platform/launch-checklist/)

For any these applications, make sure to:
- Have Environment Variables setup, and all services are using production environment variables, including the [Context ID environment variable](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-context-id-environment-variable.html).
- Review and follow the recommended steps to prepare your domain to serve your new application.  Refer to [Vercel Domain Documentation](https://vercel.com/docs/getting-started-with-vercel/domains) & [Netlify Domain Documentation](https://docs.netlify.com/domains/get-started-with-domains/).
- If your hosting platform supports notifications or alerts, consider setting those up for important limits like bandwidth, function invocations, and image optimization. 
- Ensure you have you setup caching correctly on your next.js application. Use SSG for main pages. Make sure you dial in ISR settings as appropriate.
 - [Rendering: Static Site Generation (SSG)](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
 - [Data Fetching: Incremental Static Regeneration (ISR)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)
- DevOps pipelines are setup correctly and head is available through the time.

## Insights
A go-live isn’t just a moment—it’s a coordinated transition that needs planning and disciplined execution. The cutover plan will act as your guide, outlining what needs to happen, when, and by whom, to ensure a controlled and successful launch. Make sure you make a plan based on your setup and requirements.

### Pre-Cutover Preparation

In the lead-up to go-live, you should define and communicate a clear content freeze window, indicating when content editing must stop and when it can resume. This prevents last-minute changes from slipping in and ensures consistency between staging and production.

Final User Acceptance Testing (UAT) must be completed, with sign-off from stakeholders confirming the implementation meets expectations. In parallel, any testing such as smoke testing should verify that the site performs as expected with final code, content, and configurations in place.

Before cutover, make sure a rollback path exists if needed - take backups of legacy systems, content, or configurations. Validate that infrastructure components—such as head application hosting, Sitecore Edge, CDN, and identity providers—are healthy and aligned with production readiness. Once verified, lock down all code, configuration, and infrastructure changes to avoid risk during deployment.

To prepare for DNS changes, reduce the DNS TTL (time to live) 24 to 48 hours in advance, allowing for faster propagation during the switch. Also notify your Sitecore contact, including [support](https://support.sitecore.com/csm), of your cutover date to elevate visibility and ensure faster support response if issues arise.

### Cutover Execution

The cutover should follow a clearly documented sequence of steps, with owners assigned and timing confirmed in advance. This ensures nothing is missed under pressure. During the go-live window, coordinate the DNS cutover with the domain owner and closely monitor propagation to confirm the site becomes accessible globally as expected.

You should have a defined rollback plan, including the specific criteria that would trigger it, along with the technical steps required to revert. All necessary environments and backups must be ready in case rollback is required.

Make sure the right people are available during cutover, including developers, testers, content authors, infrastructure owners, and project managers. Create a communication plan that allows for real-time communication across the team. 

Ensure monitoring tools are active and tracking site health, errors, and performance throughout the process. If your solution uses feature flags or toggles, confirm which features are going live and when those flags will be switched.

### Post-Cutover Validation

Immediately after go-live, run smoke tests in production to confirm that key pages load, navigation works, and integrations are functioning correctly. Validate that content renders correctly, assets are loading, and structured fields have carried over as expected.

Ensure that SEO and analytics are correctly configured and functioning. This includes checking redirect rules, verifying that SEO meta tags are present, and confirming that analytics tags (e.g., GA4, Sitecore Analytics) are firing correctly. 

Record key performance metrics such as page load time, time to first byte (TTFB), and caching behavior, so you have a performance baseline for future comparison.

### Communication and Support

During go-live, follow a clear communication plan that outlines how updates will be shared and when. This might include timed updates during the cutover window and summary updates to relevant stakeholders. 

Establish a clear issue triage path so that bugs and blockers can be logged, escalated, and resolved quickly. 

### Post-Go-Live Handoff

Define a hypercare window where the delivery team remains available to support the live site and address any issues that emerge. During this time, ensure that logs, monitoring tools, and analytics remain active to catch errors early and monitor site performance under real-world conditions.

Once the site stabilizes, formally transition ownership to internal teams for a more managed service approach. This includes sharing documentation, known issues, and what the plan forward is. A retrospective to capture lessons learned should be scheduled—what worked, what didn’t, and what you’d do differently next time; helping to feed into what’s next!


## Related Recipes

<Row columns={2}>
  <Link title="Publishing to Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
  <Link title="Sitemap" link="/learn/accelerate/xm-cloud/implementation/information-architecture/sitemap" />
  <Link title="Multilingual content and localization" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/information-architecture/localization" />
  <Link title="Multisite Architecture" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/project-architecture/multisite"/>
  <Link title="Site management" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/pre-development/project-architecture/site-management"/>
  <Link title="Workflows" link="https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/information-architecture/workflow"/>

</Row>

## Related Documentation

<Row columns={2}>
<Link title="Privacy checklist" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/privacy-checklist.html" />
<Link title="Sitemap" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html" />
<Link title="Configure the robots.txt file" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-the-robots-txt-file.html" />
<Link title="Generate a custom static error page" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/generate-a-custom-static-error-page.html" />
<Link title="Create and assign site identifiers for Analytics" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/create-and-assign-site-identifiers.html" />
<Link title="Context ID environment variable" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-context-id-environment-variable.html" />
</Row>

## Additional Links

<Row columns={2}>
<Link title="Vercel Production Checklist for Launch" link="https://vercel.com/docs/production-checklist" />
<Link title="Netlify Production Launch Checklist" link="https://docs.netlify.com/platform/launch-checklist/" />
<Link title="Vercel Domain Documentation" link="https://vercel.com/docs/getting-started-with-vercel/domains" />
<Link title="Netlify Domain Documentation" link="https://docs.netlify.com/domains-https/custom-domains/" />
<Link title="Next.js Production Checklist" link="https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist" />
<Link title="Front End Checklist" link="https://frontendchecklist.io/" />
<Link title="How to Optimize Next.js + Sitecore JSS" link="https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss" />
</Row>