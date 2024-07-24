---
title: 'Layout Routing | Sitecore Accelerate for Partners'
description: 'How to setup layout routing in XM CLoud to reduce Information Architecture complexity and improve performance'
area: ['accelerate']
hasSubPageNav: false
hasInPageNav: true
---

## Problem

When a page is published to Experience Edge, the publish connector generates a dependency graph to make sure that all page items that are affected by a content change are published correctly. This is because publishing a page creates a snapshot of the content and caches that on Experience Edge<sup>*</sup>.  

This dependency graph can grow very large depending on your information architecture and this can cause performance issues when publishing the site.

<sup>*</sup> _This applies to the V1 release of the Experience Edge connector. The V2 connector will publish references to the datasource items, and the layout response will be composed at the edge on request._

## Solution

We can solve this problem by changing how the layout for common page sections is composed. Instead of having a single layout for the page that includes the header and footer, we can create special routes for each common section and then use the web application to compose the page layout.

<alert type="info"><alert-icon></alert-icon>In this recipe, we will be focusing on headers and footers, but the same approach can be used for other common page sections.</alert>

### Setting up the layouts

First, we need to create routes for each of the common page sections. We can do this by using the existing partial design paradigm in SXA. If you have already created a partial design for the header or footer, we can reuse those, otherwise we can create a new partial design for each of the common page sections.

Once we have created the partial designs, we need to create 2 page designs. One that defines what will be rendered on the main page, and one that defines what will be rendered on the header and footer. We will call these `default` and `header-footer` respectively. 

Now we need to add a new field to the base page template for your site collection. We will call this field `LayoutRoute`, is should be a droplink field. Make sure that `Shared` is ticked and that the `Source` property is set to `query:$pageDesigns//*[@@templatename='Page Design']`.


### Consuming the Routes

Now that we have the layouts for the header and footer routers, we need to update the web application to consume these layouts and add the components to the page.

To do this, we can make use of the `page-props-factory` plugin pattern. We will create a new plgin that will be responsible for creating the page props for the header and footer and adding them to the main page props.

First we need to create a new serive that will be responsible for fetching the layouts for the partial designs that we created earlier. We will call this service `GraphQLLayoutRouteService`. Create a new folder in the `src/lib/page-props-factory` folder and call it `services`. Inside this folder, create a new file called `layout-route-service.ts`. Here is the code for this service:

```typescript
import { GraphQLClient } from '@sitecore-jss/sitecore-jss';
import {
    debug,
    GraphQLLayoutService,
    GraphQLLayoutServiceConfig,
    LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';

export class GraphQlLayoutRouteService extends GraphQLLayoutService {
    private myGraphQLClient: GraphQLClient;

    constructor(public serviceConfig: GraphQLLayoutServiceConfig) {
        super(serviceConfig);
        this.myGraphQLClient = this.getGraphQLClient();
    }

    public async fetchLayoutRoute(routeId: string, language: string): Promise<LayoutServiceData> {
        const query = this.getQuery(routeId, language);
        debug.layout('fetching layout route data for routeId: %s %s', routeId, language);

        const data = await this.myGraphQLClient.request<{
            item: { rendered: LayoutServiceData };
        }>(query);

        return data.item.rendered;
    }

    private getQuery(routeId: string, language: string) {
        return `query {
                item(path: "${routeId}", language: "${language}") {
                    rendered
                }
            }`;
    }
}
```
<br /><br />

This service will use an item query to fetch the rendered layout data for the partial design item specified by the routeId.

Now we need to add a new plugin to the `page-props-factory`. In the `src/lib/page-props-factory/plugins` folder, create a new file called `layout-routes.ts`. Here is the code for this plugin:

```typescript
import { ComponentRendering, HtmlElementRendering, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { GetStaticPropsContext, GetServerSidePropsContext } from 'next';
import config from 'temp/config';
import { Plugin } from '..';
import { GraphQlLayoutRouteService } from '../services/layout-route-service';
import clientFactory from 'lib/graphql-client-factory';

class LayoutRoutesPlugin implements Plugin {
    private layoutRequestClient: GraphQlLayoutRouteService;

    constructor() {
        const siteName = config.sitecoreSiteName;
        this.layoutRequestClient = new GraphQlLayoutRouteService({
            siteName,
            clientFactory,
            retries: (process.env.GRAPH_QL_SERVICE_RETRIES &&
                parseInt(process.env.GRAPH_QL_SERVICE_RETRIES, 10)) as number,
        });
    }

    order = 2;

    async exec(
        props: SitecorePageProps,
        context: GetServerSidePropsContext | GetStaticPropsContext
    ) {
        if (context.preview) {
            return props;
        }

        // get the layout route data from the page prop and then loop through the partial designs
        // to get the layout data for each partial design and add it to the page props
        const layoutRouteData = props?.layoutData?.sitecore?.route?.fields
            ? props?.layoutData?.sitecore?.route?.fields['LayouitRoute']
            : [];
        const partialDesigns =
            ((layoutRouteData as Item)?.fields['PartialDesigns'] as Array<Item>) || [];
        await Promise.all(
            partialDesigns.map(async (partialDesign) => {
                const layoutData = await this.layoutRequestClient.fetchLayoutRoute(
                    partialDesign.id?.toString() || '',
                    props.locale
                );

                // this section could be cleaner and work out the placeholders more 
                // dynamically.
                props?.layoutData?.sitecore?.route?.placeholders['headless-header'].push(
                    ...(layoutData.sitecore.route?.placeholders['headless-header'] as Array<
                        ComponentRendering | HtmlElementRendering
                    >)
                );
                props?.layoutData?.sitecore?.route?.placeholders['headless-footer'].push(
                    ...(layoutData.sitecore.route?.placeholders['headless-footer'] as Array<
                        ComponentRendering | HtmlElementRendering
                    >)
                );
            })
        );
        return props;
    }
}

export const layoutRoutesPlugin = new LayoutRoutesPlugin();
```
<br /><br />

In this plugin we are using the Page Design selected in the `LayoutRoute` field to fetch the layout data for the page. We are then looping through the partial designs and fetching the layout data for each of them, and adding it to the page props for each specific placeholder. For the purposes of this recipe we have hard coded the `headless-header` and `headless-footer` placeholders. For a production implementation you may want to make this more dynamic and cope with other placeholders if needed.

Notice that we set the `order` property to `2`. This makes sure that this plugin is executed after the `normal-mode` and `preview-mode` plugins. This is important because we need to make sure that the page props are set before the layout data is added to the page props.


## Discussion

### Rate limits

With this change, we are now hitting the Experience Edge API 3 times for each page. This will make it slower to generate the page, but should not affect rate limits negatively. The header and footer layout responses will be the same call for every page, this means that the call will be cached after the first request and then when each page is generated it would be returning the cached data for that route. Cached queries don't count toward the rate limit on Experience Edge, so this shouldn't have an impact.

### Performance

Now that we are hitting the Experience Edge API 3 times per page, there is a potential performance impact. But because the header and footer layouts are the same per page, we can cache the responses in the web application for a short time, this would improve build and generation performance when a lot of pages are generated at the same time.

### Multiple Headers and Footers for a Site

The approach above works well when every page has the same header and footer acrodd the entire site, but what if you have a site with multiple headers and footers? 

In those cases, you will need to way to identify which header and/or footer is used on a specific page. This could be done by page template type, or by adding a field to the page item that identifies the header and footer layout routes. There may also be a way to use page designs and partial designs to identify which layout route to use for headers and footers.

## Next Steps

This recipe highlights a new approach to page composition in XM Cloud. It should be considered a starting point for your project, you should validate the approach and adjust it to fit the needs of your project.
