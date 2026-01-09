'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';
import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { ChildPageInfo, PageInfo } from '@lib/interfaces/page-info';
import { RenderContent } from '@src/components/markdown/MarkdownContent';
import Layout from '@src/layouts/Layout';
import { PromoCardProps, PromoList } from '../components/cards';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { CenteredContent, Hero, VerticalGroup } from '../components/ui/sections';
import { GetProductLogo } from '../lib/assets';
import { ManifestConfig } from '../lib/interfaces/manifest';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ChildOverviewPageProps = {
  pageInfo: PageInfo;
  hasGrid?: boolean;
  promoAfter?: Array<PromoCardProps>;
  promoBefore?: Array<PromoCardProps>;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
  childPageInfo: Array<ChildPageInfo>;
  sidebarConfig: ManifestConfig;
};

const ChildOverviewPage = ({ pageInfo, promoAfter, promoBefore, childPageInfo, sidebarConfig }: ChildOverviewPageProps) => {
  const { theme } = useTheme();
  
  if (!pageInfo) {
    return <>No pageInfo found</>;
  }
  // Check for headings in the content
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <ThreeColumnLayout sidebar={pageInfo.hasSubPageNav && <SidebarNavigation config={sidebarConfig} />}>
          {pageInfo.content && pageInfo.content.length > 0 && (
            <VerticalGroup>
              <CenteredContent>
                <PromoList data={promoBefore} />

                {pageInfo.parsedContent && (
                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-4">
                      <RenderContent content={pageInfo.parsedContent} />
                    </div>
                  </div>
                )}

                <PromoList data={promoAfter} />
              </CenteredContent>
            </VerticalGroup>
          )}
          <VerticalGroup>
            <CenteredContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {childPageInfo.map((childPage, i) => {
                  const logoSrc = childPage.productLogo
                    ? (theme === 'dark' 
                        ? GetProductLogo(childPage.productLogo, 'Dark')
                        : GetProductLogo(childPage.productLogo, 'Light'))
                    : undefined;
                  
                  return (
                    <article key={i}>
                      <Card className="border shadow-md hover:shadow-lg transition-shadow">
                        <CardContent>
                          <div className="flex flex-col gap-4 items-start">
                            {childPage.productLogo && logoSrc && (
                              <div className="h-6 w-full relative mb-4">
                                <Image
                                  src={logoSrc}
                                  alt={childPage.title}
                                  fill
                                  style={{ objectFit: 'fill' }}
                                  sizes="(min-width: 5em) 5vw, (min-width: 44em) 20vw, 33vw"
                                  className="!w-auto"
                                />
                              </div>
                            )}
                            <h4 className="text-lg font-heading">
                              <Link href={childPage.link} className="hover:underline">
                                {childPage.title}
                              </Link>
                            </h4>
                            <p>{childPage.description}</p>
                            <div className="flex-grow" />

                            <Button variant="outline" asChild>
                              <Link href={childPage.link}>
                                Read more
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </article>
                  );
                })}
              </div>
            </CenteredContent>
          </VerticalGroup>
          {/* <VerticalGroup>
          <CenteredContent>
            <PromoList data={promoAfter} />
            <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
            <SitecoreCommunityQuestions data={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
            <StackExchangeFeed data={pageInfo.stackexchange} />
            <SitecoreCommunityBlog entries={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} />
          </CenteredContent>
        </VerticalGroup> */}
        </ThreeColumnLayout>
      </Layout>
    </TrackPageView>
  );
};

export default ChildOverviewPage;
