---
title: 'On-page SEO Optimization'
description: 'Optimizing your site SERP ranking by optimizing the page’s HTML.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-01-31'
created: '2025-01-31'
audience: ['Architect','Product Owner','User']

---
## Context
On-page SEO covers optimizing webpage content for search engines and visitors. When done correctly, pages rank higher on search engines and thus attract more visitors.

Tools and SEO checkers can report issues detected on the website, but cannot analyze whether the root cause is code or content. For this reason it’s necessary to review the implementation from the inside as well as from what is finally rendered to the client.

>There are many guides online which cover general SEO best-practice, so in this recipe we relate the topics within the context of Sitecore XM Cloud. Please cross-reference with SEO authorities for deep-dives and the latest on SEO best practice. 

## Execution
In the sections below, we cover XM Cloud SEO best practices, relating to common in-page SEO best practice and components concepts SEO best. Before deep diving in this, make sure you have reviewed the [Search engine optimization (SEO)](https://doc.sitecore.com/xmc/en/developers/xm-cloud/search-engine-optimization--seo-.html) documentation.

### SEO recommendation in website
Many websites suffer from common HTML and structural issues that can negatively impact search rankings, user experience, and crawlability. From poorly structured headings to missing meta tags, unoptimized images, and slow-loading pages, these technical missteps can make it harder for search engines to index and rank content effectively.

| Issue |Impact | Recommendation |
|-|-|-|
|Incorrect HTML structure|Invalid HTML lowers SEO scores as well as confusing search crawlers.| <ul>  <li>Review the HTML for violations, i.e. multiple H1 tags. </li>  <li>Most render hosts will not allow invalid markup to be rendered (e.g. missing closing tags), but it is still worth checking your output HTML is valid. </li></ul>|
|Page load time |Slow pages make it harder for crawlers to index your page and they also penalize this.|<ul><li>Use tooling such as Google Lighthouse to see which issues can be identified and how to resolve them.</li></ul>|
|Accessibility issues |Can cause lower SEO scores as well as confusing the search crawler or causing the wrong content to be shown in search results.|<ul><li>Add missing HTML attributes such as alt text on images.</li><li>Screen-readers may have trouble understanding the layout of the page if incorrect HTML structure. </li></ul>|
|Broken links|Links to pages that don’t exist will cause issues for search crawlers as well as penalizing SEO scores.|<ul><li>Run the Broken Links report from the CM Desktop → Reports area.</li></ul>|
|In-page 404 errors|Links within pages that point to non-existent resources, e.g. images will be penalized by SEO engines. If too many 404s occur they may give up indexing the site.|<ul><li>Use automated tooling to check for broken in-page links.</li></ul>|
|Inline CSS|Inline CSS properties unnecessarily increase page size|<ul><li>Move to an external CSS style sheet. </li><li>Removing inline CSS properties can improve page loading time and make site maintenance easier.</li></ul>|
|Sitemap|Incorrect Sitemaps can make it harder for crawlers and users to find pages on your site. |<ul><li>Detail can be found in the [Sitemap](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/information-architecture/sitemap) recipe. </li><li>Next.js offers [built-in sitemap generation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap). This was first introduced in version 13.3 and updated in v13.5.</li></ul>|
|Robots.txt |Robots.txt files that are incorrect or block or restrict crawlers /visitors can have multiple issues for SEO and site indexing.|<ul><li>Refer to Google’s [robots guidelines](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt). </li><li>Next.js also offers [built-in robots.txt generation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots). This was first introduced in version 13.3.</li><li>If using next-sitemap, review the <code>next-sitemap.config.js</code> file. The <code>robotsTxtOptions</code> can be used to generate a robots.txt file.</li></ul>|
|Duplicate content|Duplicate content is a major issue for search engines. If too much duplicate content is detected, a site’s ranking is at risk.|<ul><li>Review duplicate content of content within the website.</li><li>Ensure content writers avoid producing content by directly copying it from other websites or even from generative AI.</li><li>There are also tools which can identify if your own content has been duplicated by other websites. </li></ul>|
|Meta tags missing or empty|Meta tags are an important source in what is displayed in search results and other places used by search engines. They also effect SEO if misused or are empty.|<ul><li>Use meta descriptions correctly.</li><li>Don’t put long summaries in them that are beyond the expected character limit for crawlers. </li><li>Don’t fill them with keywords as this may lower page quality.</li></ul>|
|Redirects|Can cause major issues if misconfigured or misused. <br/><br/> When search engines see a 301 redirect, they pass the old page’s ranking to the new one.|<ul><li>The 301 redirects must only be used when the change to a new URL is permanent.</li><li>Refer to the Sitecore documentation on best practice for [site redirects](https://doc.sitecore.com/xmc/en/users/xm-cloud/redirect-search-traffic.html).</li></ul>|
|Canonical links / hreflang|Often a complex area with multi-language / multi-geography sites <br/><br/> Can cause serious issues with incorrect content being indexed or users being directed to incorrect or even non-existent pages.|<ul><li>Having canonical URLs is a very important part of SEO.</li><li>If missing canonical URLs, there is a risk of duplicate content issues because search engines treat URLs with “www” and “non-www” versions as different pages with the same content.</li><li>Ensure you run the website only with one version you choose.</li></ul>|
|HTTP / HTTPS issues|After Google’s initiative to encourage websites to use SSL, it is crucial that your site is running on HTTPS. While most render hosts will be on HTTPS, it is important to review external resources.|Avoid mixed http and https content, especially across: <ul><li>Internal images, videos or audio.</li><li>Web fonts.</li><li>Iframes.</li><li>Internal JS and CSS files.</li><li>Images, fonts.</li><li>Internal URLs inside the JS and CSS files.</li><li>Open Graph tags</li></ul>|

### SEO recommendations in CMS components
Optimizing SEO in XM Cloud starts by looking at key components that are used to build content - 

#### 1. Media Items
Use of oversized images or images in incorrect formats can cause pages to render more slowly. This is also impacted with the overuse of images on a page when it's not necessary. Reviewing your content, consider:
- Optimize file sizes before uploading them to the Media Library.
- Consider using next-gen image formats such as AVIF or WebP.
- If using Next.JS, use the [NextImage component](https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/configuring-the-jss-nextimage-component.html) to optimize image loading if appropriate.
- Avoid uncompressed file types such as .bmp. Or formats which are not widely supported such as .tiff.

#### 2. Rich-text components
The Rich-text component can lead to SEO issues if not properly managed. Human error is also an issue, but there are ways to help content editors in this regard. Reviewing your content, consider:
- Use [field validation rules](https://doc.sitecore.com/xmc/en/users/xm-cloud/validate-an-item.html) to enforce best practices (e.g., alt text for images, no broken links).
- Customize the toolbar in the rich text editor to limit the options and enforce consistent formatting.
- Train content editors on SEO principles and audit the content regularly.

A detailed deep dive is provided in the Insights section.

#### 3. Sitecore XM Cloud Forms
Similar issues to Rich-text fields can arise, both human and technical. Duplicate content, accessibility and UX (validation and CAPTCHAs) issues can impact SEO as well as conversion rates. A detailed deep dive is provided in the Insights section.

## Insights

### Rich Text Component SEO Issues
When working with Sitecore XM Cloud's Rich Text Component, there are a few common in-page SEO issues that may arise. To improve SEO, it’s best to ensure clean and semantic HTML.

|Issue|Detail|Recommendations|
|-|-|-|
|<strong>Broken Links and Missing Anchor Tags</strong>|Content editors may inadvertently add broken links or forget to include rel attributes for external links, such as rel="nofollow", where appropriate.|Implement link validation tools and create workflows to check and enforce link integrity and SEO standards.|
|<strong>Canonical and Duplicate Content Risks</strong>|Content editors might duplicate content across multiple pages or include the same text in multiple places, leading to canonical issues.|Educate users about duplicate content risks and consider implementing canonical tags for pages affected.|
|<strong>Content Fragmentation</strong>|Using rich text fields for large amounts of content can lead to content that is not modular or reusable, making it harder to implement site-wide SEO updates.|Break content into smaller, reusable fields rather than overloading rich text fields.|
|<strong>Excessive or Incorrect HTML Markup</strong>|Rich text fields may generate over-verbose or invalid HTML due to copy-pasting from Word or other rich editors, introducing inline styles, excessive <code>div</code> or <code>span</code> tags, and outdated attributes.|Implement a cleanup process for the content or use an HTML sanitizer to strip unnecessary tags and styles.|
|<strong>Improper Use of Headings</strong>|Content editors may use heading tags (h1, h2, etc.) incorrectly, breaking the logical hierarchy of the document.|Limit the heading options available in the rich text field and provide guidelines on their proper use.|
|<strong>Inline CSS and Lack of Consistent Styling</strong>|Inline styles added in the rich text editor can override global styles and reduce consistency across the website, potentially impacting the site's mobile responsiveness or accessibility.|Restrict the use of inline styles and rely on global CSS rules defined in your site's stylesheet. Configure the editor to offer pre-defined styles or classes.|
|<strong>Missing Image Attribute</strong>|When embedding images, rich text editors may omit important attributes like alt text, which is crucial for accessibility and SEO.|Enforce requirements for adding descriptive alt text to all images, either through training or validation scripts.|
|<strong>Page Performance and Load Times</strong>|Adding large images, embedded videos, or scripts directly into the rich text field without optimization can slow page load times.|Optimize all media before uploading and encourage the use of Sitecore's media library to serve optimized assets. Enable lazy loading for images and videos.|
|<strong>Structured Data and Semantic Markup</strong>|Rich text fields usually don’t support adding structured data (like ​markup), reducing the site's ability to enhance SEO results.|Integrate structured data elements through custom fields or components instead of relying entirely on rich text fields.|
|<strong>Unoptimised Content</strong>|Content within the rich text field may lack proper keyword usage, affecting the page's relevance to search queries.|Train content editors on SEO best practices and ensure they understand how to use keywords appropriately, and create structured content.|


### Sitecore Forms SEO Issues
When using Sitecore Forms, several SEO issues can arise that may affect your site's performance and visibility in search engine rankings. Below are some common SEO issues and recommendations for best-practice.

|Issue|Explanation|Recommendations|
|-|-|-|
|<strong>Poor Form Accessibility</strong>|Forms should be accessible to all users. Not having proper labels, ARIA (Accessible Rich Internet Applications) attributes, or keyboard navigation can impact user experience and SEO.|Ensure that form fields are properly labeled, use ARIA roles, and make sure the forms are navigable by keyboard.|
|<strong>Slow Form Load Times</strong>|Slow form load times can negatively impact user experience and, in turn, SEO rankings. Forms that have large JavaScript files, uncompressed images, or third-party integrations can cause delays.|Optimize form performance by minimizing JavaScript, using compressed images, and leveraging browser caching. See the General recommendations in the table above.|
|<strong>Lack of Mobile Optimization</strong>|Forms that aren’t optimized for mobile devices can lead to a high bounce rate, which negatively impacts SEO.|Ensure that Sitecore Forms are responsive and optimized for mobile devices.|
|<strong>Unoptimized Form URLs</strong>|If the form submission URL is not SEO-friendly (e.g., long, complex, or including unnecessary parameters), it can hinder search engine crawlers from indexing the page properly.|Use clean, descriptive, and user-friendly URLs that reflect the content of the page and form.|
|<strong>Duplicate Content from Form Submission Pages</strong>|If form submissions generate new pages (e.g., a "thank you" page), but the content on these pages is duplicated across many users, it could lead to duplicate content issues.|Ensure that thank-you pages or form confirmation pages are unique, or use canonical tags to avoid duplication.|
|<strong>Form Input Fields and Structured Data</strong>|Forms that don’t have properly structured data (e.g., missing meta tags or schema markup for contact forms) may not provide search engines with clear information about the content and purpose of the page.|Use structured data like schema markup to help search engines understand the form’s purpose and improve its visibility in search results.|
|<strong>Missing Alt Text for Form-related Images</strong>|If forms include images (e.g., in the form of buttons or icons) and these images are missing alt text, this can negatively impact SEO and accessibility.|Always use descriptive alt text for images in Sitecore Forms.|


## Related Recipes

<Row columns={2}>
  <Link title="Sitemap" link="/learn/accelerate/xm-cloud/implementation/information-architecture/sitemap" />
  <Link title="Optimizing content for AI" link="/learn/accelerate/xm-cloud/optimization/seo-geo-optimization" />
</Row>

## Related Documentation

<Row columns={2}>
    <Link title="Search engine optimization" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/search-engine-optimization--seo-.html" />

  <Link title="Redirect search traffic" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/redirect-search-traffic.html" />
    <Link title="Configuring the JSS NextImage component" link="https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/configuring-the-jss-nextimage-component.html" />  
</Row>







