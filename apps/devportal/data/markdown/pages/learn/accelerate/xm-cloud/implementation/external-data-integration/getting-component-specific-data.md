---
title: 'Getting Component Specific Data'
description: 'This recipe discusses the options when component specific data is required'
area: ['accelerate']
---

## Problem

You need to get content that is specific to a component (this can either be CM or external data).

## Solution

There are 3 main options to get component specific data:

1. Integrated GraphQL
2. Component level data fetching
3. Connected GraphQL

### Integrated GraphQL

Integrated GraphQL directly affects the layout data shape returned for a specific component by the Experience Edge layout response.

A GraphQL query can be defined on the rendering item that shapes the data returned and can be used from the `props.fields` object in the same way as a standard response. This gives the developer more control over the shape of the data being returned.

To add IGQL to your component, you can add the query to the `Component GraphQL Query` field on the rendering item.

When using integrated GraphQL queries, for the default and jss layout service configurations, values for `$datasource`, `$contextItem`, and `$language` are automatically injected.

> Integrated GraphQL is executed when the content is published to Experience Edge. On building the layout data, if a component contains IGQL, a REST API call is made to the Edge preview end point on the CM. These API calls are not asynchronous.
>
> If you make a complex query for your component that requires multiple REST API calls, this will impact the publishing performance.

### Connected GraphQL

Connected GraphQL is similar to Component Level Data Fetching in that a GraphQL call is made to the Experience Edge API to get the content, but instead of running this a build time, it is done on the client. This method is identical to using a GraphQL API in any JavaScript application and is not JSS-specific.

### Component Level Data Fetching

To get component level data, you can use a similar approach to page level data fetching. The JSS ComponentPropsService looks for `getStaticProps` or `getServerSideProps` functions when rendering a component.

If a component defines and exports these functions, the `ComponentPropsService` class runs the function. After applying all side effects, it stores the component data in a `componentProps` object in the format `{ [rendering.uid]: data }`.

> **IMPORTANT**
>
> Because the `getStaticProps` and `getServerSideProps` are functions provided by JSS, these functions will be included in the client bundle. Do not include any secrets or sensitive information in any of these component-level functions.
>
> Also included in the client bundle are any imports that the function depends on, even if the client-side code does not use the imports.
>
> This does not affect page-level `getStaticProps` and `getServerSideProps` functions.

```typescript
import { Text, RichText, Field, GetServerSideComponentProps, GetStaticComponentProps, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

type ComponentProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
};

type ContentBlockProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={fields.heading} />
    <RichText className="contentDescription" field={fields.content} />
  </div>
);

const fetchPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json());

export const getStaticProps: GetStaticComponentProps = async (rendering, layoutData, context) => {
  const post = await fetchPost();
  return post;
};

export const getServerSideProps: GetServerSideComponentProps = async (rendering, layoutData) => {
  const post = await fetchPost();
  return post;
};

export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
```

<br/>

> In the example above, the component contains both implementations of `getStaticProps` and `getServerSideProps`. In a real component, you must only define one of them and it should match the type of page level data fetching for the route this component would be used on.

## Discussion

### Integrated GraphQL vs Connected GraphQL vs Component Level Data Fetching

When should you use each one?

We recommend you use integrated GraphQL when:

- Your component requires more data than the datasource template fields that are part of the GraphQL schema.
- The datasource template contains extra fields that you do not want to render.

> If the component only uses content template field data, there is no need to write extra GraphQl, the default layout data is sufficient to render the fields.
> We recommend you use connected GraphQL when:

- You want to load data asynchronously after the page layout is rendered, or in response to app state changes other than route change.

- The component has to run mutations (updates) or subscriptions (real-time data).

- You want full control over the lifecycle of your queries and states, such as integration with Redux or the [apollo-link-state](https://github.com/apollographql/apollo-link-state) package.

We recommend you use Component Level Data Fetching when:

- You need to get data from an external data source, but you want the content generated on build or server-side vs client-side.

- You want to improve SEO by having the content available on page load vs a client-side async load.

- You have a complex query to execute.

- You want to improve publishing times and are ok with a slight increase in generation time.

- You are using [wildcard pages](/learn/accelerate/xm-cloud/implementation/information-architecture/wildcard-pages) and you need to get the dynamic data at generation time.

## Related Recipes

<Row columns={2}>
  <Link title="Wildcard Pages" link="/learn/accelerate/xm-cloud/implementation/information-architecture/wildcard-pages" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Component-level data fetching in JSS Next.js apps | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/component-level-data-fetching-in-jss-next-js-apps.html" />
  <Link title="Integrated GraphQL in JSS apps | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/integrated-graphql-in-jss-apps.html" />
  <Link title="Connected GraphQL in JSS apps | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/connected-graphql-in-jss-apps.html" />
</Row>
