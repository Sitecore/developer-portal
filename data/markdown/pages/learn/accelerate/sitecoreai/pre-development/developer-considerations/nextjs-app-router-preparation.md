---
title: 'Next.js App Router Preparation'
description: 'How can you build now so you can make the transition easier?'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2024-10-02'
created: '2024-10-02'
audience: ['Architect','Technical Implementer']
---

## Context

Currently, the Sitecore JSS Next.js SDK does not support the new Next.js App Router. However, once support for the App Router is released with JSS and XM Cloud, clients may want to upgrade. In the meantime, how can you best build your application now in the Pages architecture, so that your migration to the App Router will be easier in the future?

It's important to note that Vercel, the creators of Next.js, still fully supports the Next.js Pages architecture. They have made no public announcement on the time frame for ending support.

## Execution

[React Server Component](https://nextjs.org/docs/app/building-your-application/rendering/server-components) support is a significant addition to Next.js App Router. In this article, we will refer to it simply as Server Components.

It is recommended to architect your components with the intention of using Server Components in App Router to build for the future. Server Components are the default component in App Router, rendering exclusively on the server and sending no JavaScript to the client. They allow you to leverage the server more efficiently and at a more granular level. Because Server Components are rendered entirely on the server they cannot have any client-side interactivity; what this means for your application is covered in more detail later.

See a complete list of benefits here: [Benefits of Server Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering).

In the Pages architecture, all components are considered Client Components. These components are pre-rendered on the server and then hydrated on the client-side. The term "Client Component" can be misleading as it implies that all of the work is offloaded to the client. However, only the hydration step takes place on the client-side. The hydration process is where the component's JavaScript is executed, which enables the component to be interactive.

## How to Build with Server Components in mind

How do you build your existing Client Components in the Pages architecture with Server Components in mind?

### Separating Server and Client Component Functionality

A critical step in preparing for the use of Server Components is to compose your components in a way that separates client-side interactivity. Common examples of client-side interactive calls include: **useState**, **useEffect**, & **onClick**. Concentrating your client-side interactivity on single-responsibility components can make the transition to Server Components smoother. This technique is referenced in the Next.js documentation, [moving client components down the tree](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#moving-client-components-down-the-tree).

The Next.js documentation also has a breakdown of [when to use Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components). The documentation is an excellent resource for determining where to put certain functionalities of your components now. For example, in the App Router, all data fetching should occur in Server Components. Architect your app now so that data is fetched in a component that will become a Server Component, and data is passed down the tree to your interactive Client Components. You should still be keeping your data fetching as close to the Client Component as possible.

It’s important to know that you can [interleave Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#interleaving-server-and-client-components). Client components can live inside Server Components, and you can also pass Server Components as a prop to a Client Component.

### Styling your Application

How you style and build the UI of your application can affect your transition to Server Components. UI Component libraries like Chakra and Material UI and CSS-in-JS libraries like Styled-Components and Emotion rely on client-side interactivity and the React Lifecycle to render UI elements. Using one of these libraries can make separating Server and Client components more difficult.

You should use Tailwind CSS or CSS Modules to style and build your UI. Review the [Next.js styling documentation](https://nextjs.org/docs/app/building-your-application/styling) for a complete list of supported styling approaches.

For an in-depth look at React Server Components and how CSS-in-JSS libraries work, read the following by Josh W. Comeau, [CSS in React Server Components](https://www.joshwcomeau.com/react/css-in-rsc).

## Related Documentation

<Row columns={2}>
  <Link title="Understanding React Server Components" link="https://vercel.com/blog/understanding-react-server-components" />
  <Link title="Moving Client Components Down the Tree" link="https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#moving-client-components-down-the-tree" />
  <Link title="When to use Server and Client Components" link="https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components" />
  <Link title="Recommended Styling Methods in Next.js" link="https://nextjs.org/docs/app/building-your-application/styling" />
  <Link title="Interleaving Server and Client Components" link="https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#interleaving-server-and-client-components" />
  <Link title="Benefits of Server Rendering" link="https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering" />
  <Link title="From Pages to App" link="https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration" />
</Row>

## Related Learning Materials

<Row columns={2}>
  <Link title="Learn the Next.js App Router" link="https://nextjs.org/learn" />
  <Link title="Why Next.js moved to the App Router" link="https://www.youtube.com/watch?v=5HaX0Q_Do1I" />
  <Link title="CSS in React Server Components" link="https://www.joshwcomeau.com/react/css-in-rsc" />
  <Link title="Client Components and use client in Next.js App Directory" link="https://www.thetombomb.com/posts/use-client-nextjs" />
</Row>
