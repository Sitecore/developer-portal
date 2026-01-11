import platformData from "@data/data-capabilities";
import communityListData from "@data/data-community-list";
import getHelpCta from "@data/promos/get-help";
import partnerawards from "@data/promos/partnerawards";
import productwebinar from "@data/promos/productwebinar";
import symposium2025 from "@data/promos/symposium2025";
import { Article, CTACard } from "@src/components/cards";
import PromoCardVertical from "@src/components/cards/PromoCardVerticals";
import ChangelogEntries from "@src/components/changelog/ChangelogEntries";
import {
  SitecoreCommunityBlog,
  SitecoreCommunityEvents,
  SitecoreCommunityNews,
  SitecoreCommunityQuestions,
  StackExchangeFeed,
  YouTubeFeed,
} from "@src/components/integrations";
import { TrackPageView } from "@src/components/integrations/engage/TrackPageView";
import { GenericList } from "@src/components/lists";
import AccelerateUpdates from "@src/components/lists/accelerate/AccelerateUpdates";
import { ProductLogo } from "@src/components/ui/logos";
import {
  CenteredContent,
  Hero,
  Row,
  VerticalGroup,
} from "@src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import { getLatestRecipes } from "@src/lib/accelerate/latest";
import type { AccelerateRecipe } from "@src/lib/accelerate/types/recipe";
import { Product } from "@src/lib/assets";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { getPageInfo } from "@src/lib/page-info";
import type { NextPage } from "next";

export async function getStaticProps() {
  const pageInfo = await getPageInfo("home");
  const recipes = await getLatestRecipes();

  return {
    props: {
      pageInfo,
      recipes,
    },
    revalidate: 600, // 10 minutes
  };
}

type HomePageProps = {
  pageInfo: PageInfo;
  recipes: Array<AccelerateRecipe>;
  preview: boolean;
};

const HomePage: NextPage<HomePageProps> = ({ pageInfo, recipes }) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout
        title={pageInfo.title}
        description={pageInfo.description}
        openGraphImage={pageInfo.openGraphImage}
      >
        <Hero title={pageInfo.title} description={pageInfo.description} />

        <VerticalGroup>
          <VerticalGroup>
            <CenteredContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-0">
                <ChangelogEntries
                  entries={pageInfo.changelogEntries}
                  title="Latest changelog updates"
                  linkText="Full changelog"
                />
                <AccelerateUpdates
                  recipes={recipes}
                  title="Sitecore Accelerate updates"
                  linkHref="/learn/accelerate"
                  linkText="See all recipes"
                  url="/learn/accelerate/"
                />
              </div>
            </CenteredContent>
          </VerticalGroup>
          <CenteredContent>
            <Row columns={4}>
              <Article
                title="Get Started"
                description="New to Sitecore? Start here essential setup documentation to build your first application."
                linktext="Get started"
                link="/sitecoreai"
              />
              <Article
                title="Documentation"
                description="Comprehensive product documentation including feature usage and SDK documentation."
                linktext="Browse Docs"
                link="https://doc.sitecore.com/"
              />
              <Article
                title="Developer Experience"
                description="Access and development resources to accelerate your workflow."
                linktext="Explore Tools"
                link="/sitecoreai/dev-experience"
              />
              <Article
                title="Changelog"
                description="The changelog provides visibility into key product updates, including new features, enhancements, resolutions and architectural improvements."
                linktext="View Changelog"
                link="/changelog"
              />
            </Row>
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup className="bg-gradient-to-br from-[#dedbff] via-[#f9f9f9] to-[#ffcfcf] dark:from-[#2c2c4a] dark:via-[#1a1a1a] dark:to-[#4a2c2c] text-center p-4">
          <CenteredContent className="items-center text-black dark:text-white">
            <ProductLogo product={Product.SitecoreAI} width={280} height={67} />
            <CenteredContent>
              <p className="text-lg text-center mx-auto">
                Explore a unified platform that brings together content, data,
                personalisation, and intelligent automation: designed for
                developers, marketers, and partners alike. Join a thriving
                community of over 4,000 daily active developers shaping the
                future of digital experience. Whether you&apos;re migrating from
                CMS or scaling across channels, SitecoreAI empowers you to
                deliver personalised, measurable outcomes.
              </p>
            </CenteredContent>
            <GenericList
              title=""
              subtitle=""
              data={platformData.data}
              column={3}
              cardVariant="blurred"
            />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup className="bg-white dark:bg-background py-6">
          <CenteredContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <PromoCardVertical {...productwebinar} />
              <PromoCardVertical {...partnerawards} />
              <PromoCardVertical {...symposium2025} />
            </div>
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup className="p-4 bg-gray-100 dark:bg-muted">
          <CenteredContent>
            <div className="flex flex-col gap-4 text-center mb-8">
              <h2 className="text-xl font-heading text-black dark:text-foreground mb-0">
                Sitecore Experience Platform
              </h2>
              <p className="text-base text-black dark:text-foreground max-w-3xl mx-auto">
                Deliver personalized experiences by combining customer data, AI,
                and marketing automation with our Sitecore Experience Platform™
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Article
                title="Sitecore Experience Platform"
                description="Create connections, drive conversions, and foster loyalty. With customer data, analytics, marketing automation, and more, with the stand alone Sitecore Experience Platform™."
                linktext="Experience Platform"
                link="/products/experience-platform"
              />
              <Article
                title="Sitecore Experience Manager"
                description="There's no experience without content. Sitecore Experience Manager® is a powerful and intuitive CMS for the simplified creation and management of experiences across channels and devices."
                linktext="Experience Manager"
                link="/products/experience-platform"
              />
              <Article
                title="Sitecore Managed Cloud"
                description="Sitecore Managed Cloud service actively hosts, monitors, manages, and maintains the installation of Sitecore Experience Platform™ and Sitecore Experience Manager™."
                linktext="Managed Cloud"
                link="/products/managed-cloud"
              />
            </div>
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup>
          <CenteredContent>
            <SitecoreCommunityBlog
              entries={pageInfo.sitecoreCommunity.blog}
              sortKeys={pageInfo.sitecoreCommunityBlogSort}
            />
            <SitecoreCommunityNews
              data={pageInfo.sitecoreCommunity.news}
              title="Community news"
            />
            <SitecoreCommunityEvents
              data={pageInfo.sitecoreCommunity.events}
              title="Community Events"
            />
            <YouTubeFeed
              data={pageInfo.youtube}
              title={pageInfo.youtubeTitle}
              playlistTitle={pageInfo.youtubePlaylistTitle}
            />
            <GenericList
              data={communityListData.data}
              title={communityListData.title}
              subtitle={communityListData.subtitle}
              column={3}
              cardVariant="borderedImage"
            />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup>
          <CenteredContent>
            <CTACard {...getHelpCta} />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup>
          <CenteredContent>
            <SitecoreCommunityQuestions
              data={pageInfo.sitecoreCommunity.questions}
              sortKeys={pageInfo.sitecoreCommunityQuestionsSort}
              forumKeys={pageInfo.sitecoreCommunityQuestionsCategory}
            />
            <StackExchangeFeed data={pageInfo.stackexchange} />
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default HomePage;
