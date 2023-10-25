---
title: 'Components'
description: 'Learn more on how you can contribute to the Developer Portal'
hasInPageNav: true
hasSubPageNav: true
---

On top of the standard Markdown functionality we have added several components authors can use to visualize content

## Article

### Description

Card that shows a title, descriptive text and a button that links to the full article

### Example

<Article 
  title="XM Cloud Introduction" 
  description="XM Cloud is around the corner. But what is XM Cloud? 
    What does it include? And how can you prepare for it?" 
  link="/learn/getting-started/xm-cloud-introduction"
  maxWidth="sm" />

### Code

```jsx
<Article title="XM Cloud Introduction" description="XM Cloud is around the corner. But what is XM Cloud? What does it include? And how can you prepare for it?" link="/learn/getting-started/xm-cloud-introduction" maxWidth="sm" />
```

---

## Link

### Description

Highlight a link

### Example

<Link title="User Documentation" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/index-en.html"  maxWidth="sm" />

### Code

```jsx
<Link title="User Documentation" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/index-en.html" maxWidth="sm" />
```

---

## Repository

### Description

Card that shows a GitHub repository and the programming language(s) it uses

### Example

<Repository framework="Nextjs" 
  name="Sitecore Developer Portal" 
  description="Open source repo for the Sitecore Developer Portal (https://developers.sitecore.com)" 
  repositoryUrl="https://github.com/sitecore/developer-portal"
  maxWidth="md"
/>

### Code

```react
<Repository framework="Nextjs"
  name="Sitecore Developer Portal"
  description="Open source repo for the Sitecore Developer Portal"
  repositoryUrl="https://github.com/sitecore/developer-portal"
  maxWidth="md"
/>
```

---

## Row

### Description

Helper component that can be used to show cards next to each other

### Example

<Row columns={4}>
<Link title="User Documentation" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/index-en.html" />
<Link title="Developer Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/index-en.html" />
<Link title="XM Cloud Build Configuration" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-xm-cloud-build-configuration.html" />
<Link title="XM Cloud Deploy App" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html" />
<Link title="Developer Tools" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/developer-tools.html" />
<Link title="XM Cloud development" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-development.html" />
</Row>

### Code

```jsx
<Row columns={4}>
  <Link title="User Documentation" link="https://doc.sitecore.com" />
  <Link title="Developer Documentation" link="https://doc.sitecore.com" />
  <Link title="XM Cloud Build Configuration" link="https://doc.sitecore.com" />
  <Link title="XM Cloud Deploy App" link="https://doc.sitecore.com" />
  <Link title="Developer Tools" link="https://doc.sitecore.com" />
  <Link title="XM Cloud development" link="https://doc.sitecore.com" />
</Row>
```

---

## Promo

### Description

Component that can be used to promote another section within the Developer Portal or external content

### Example

<Promo
  title="Use a better title than this"
  description="This is are where you can add a description or introduction text"
  imageSource="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c612f3d1efbe4e0cb946ab96d0b4aea1?v=0cca3868"
  linkText="Link to anywhere"
  linkHref="https://developers.sitecore.com" isImageLeft={true}
/>

### Code

```jsx
<Promo
  title="Use a better title than this"
  description="This is are where you can add a description or introduction text"
  imageSource="../link/to/image.jpg"
  linkText="Link to anywhere"
  linkHref="https://developers.sitecore.com"
  isImageLeft={false}
/>
```

---

## VideoPromo

Promote a topic using a YouTube video, title and description

### Description

### Example

<VideoPromo youTubeId="cP2BBlgKZS8" title="Content Hub ONE" description="Content Hub ONE is designed for brands that need an agile headless CMS to support quickly evolving experiences targeting multiple channels. With Content Hub ONE marketers can deliver consistency across touchpoints while maintaining the content in one central location." />

### Code

```jsx
<VideoPromo
  youTubeId="cP2BBlgKZS8"
  title="Content Hub ONE"
  description="Content Hub ONE is designed for brands that need an agile headless CMS to support quickly evolving experiences targeting multiple channels. With Content Hub ONE marketers can deliver consistency across touchpoints while maintaining the content in one central location."
/>
```
