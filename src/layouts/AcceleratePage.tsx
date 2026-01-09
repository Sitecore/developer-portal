import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo } from '@lib/interfaces/page-info';

import { RenderContent } from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import { useRouter } from 'next/router';

import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';

import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Info } from 'lucide-react';
import { mdiArrowRightCircle } from '@mdi/js';
import Icon from '@mdi/react';
import useManifestRoutes from '@/src/hooks/useManifestRoutes';
import { PromoCardProps, PromoList } from '../components/cards';
import { SocialFeeds } from '../components/links';
import { AccelerateMetaData } from '../components/lists/accelerate/MetaData';
import { ArticlePaging } from '../components/navigation/ArticlePaging';
import BreadcrumbNav from '../components/navigation/BreadcrumbNav';
import { DropDownNavigation } from '../components/navigation/DropDownNavigation';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { CenteredContent } from '../components/ui/sections';

import UseWithAI from '../components/integrations/ai/useWithAI';
import GithubContributionNotice from '../components/markdown/contribute';
import Feedback from '../components/markdown/Feedback';
import { ManifestConfig } from '../lib/interfaces/manifest';
import { getItemUrl } from '../lib/manifestHelper';
import { Sidebar } from './Sidebar';

type ArticlePageProps = {
  pageInfo: PageInfo;
  hasGrid?: boolean;
  promoAfter?: Array<PromoCardProps>;
  promoBefore?: Array<PromoCardProps>;
  childPageInfo?: Array<ChildPageInfo>;
  sidebarConfig: ManifestConfig;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const AcceleratePage = ({ pageInfo, promoAfter, promoBefore, customNav, customNavPager, sidebarConfig }: ArticlePageProps) => {
  const router = useRouter();
  const path = router.asPath;
  const { children } = useManifestRoutes(sidebarConfig, path);

  if (!pageInfo) {
    return <>No pageInfo found</>;
  }

  // Check for headings in the content
  const sectionTitles: Array<ContentHeading> = [];

  if (pageInfo.headings) {
    sectionTitles.push(...pageInfo.headings);
  }

  const Nav = pageInfo.hasInPageNav != false ? customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} key={router.asPath} /> : null : null;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} section={sidebarConfig.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        {/* <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} demoId={pageInfo.guidedDemoId} /> */}

        <div className="flex flex-grow-0 justify-between w-full gap-0 flex-col md:flex-row">
          <Sidebar showBackground>
            <SidebarNavigation config={sidebarConfig} />
          </Sidebar>

          <main className="w-full max-w-6xl min-h-[calc(100vh-215px)] px-4 md:px-0">
            <CenteredContent className="min-h-[calc(100vh-400px)]">
              <div className="flex flex-col gap-4 mb-4">
                <DropDownNavigation config={sidebarConfig} key={router.asPath} />
                <BreadcrumbNav enabled={sidebarConfig.enableBreadcrumb} currentPage={pageInfo} config={sidebarConfig} hideCurrentPage />
                <h1 className="text-2xl md:text-4xl xl:text-6xl font-heading font-normal">
                  {pageInfo.title}
                </h1>
              </div>
              <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentfileName={pageInfo.fileName} config={sidebarConfig} currentPath={path} />

              <PromoList data={promoBefore} />
              <RenderContent content={pageInfo.parsedContent} />

              {/* Child Navigation */}
              {children && children?.length > 0 && (
                <div className="flex flex-col gap-4">
                  <p className="font-semibold">Articles in this section:</p>
                  <ul className="flex flex-col gap-2 list-none">
                    {children.map((child, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon path={mdiArrowRightCircle} size={1} />
                        <Link href={getItemUrl(sidebarConfig, child)} className="hover:underline">{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentfileName={pageInfo.fileName} config={sidebarConfig} currentPath={path} />

              {customNavPager}
              <PromoList data={promoAfter} />
              <SocialFeeds pageInfo={pageInfo} />
            </CenteredContent>
            <CenteredContent>
              <GithubContributionNotice pageInfo={pageInfo} config={sidebarConfig} />
            </CenteredContent>
          </main>

          <Sidebar className="xl:block hidden border-l border-border min-h-full pl-4 sticky top-0">
            <div className="flex flex-col gap-4">
              <div className="border-b border-border pb-4">
                {sectionTitles.length > 1 && <InPageNav titles={sectionTitles} key={path} title="Topics in this recipe" className="mt-2" />}
              </div>

              <UseWithAI pageInfo={pageInfo} />

              <AccelerateMetaData pageInfo={pageInfo} />
            </div>
            <Alert variant="default" className="mt-4">
              <Info className="h-4 w-4" />
              <AlertTitle>Questions or suggestions?</AlertTitle>
              <AlertDescription>
                <p className="text-sm text-muted-foreground">We&apos;d love to hear your feedback!</p>
                <Feedback variant={'outline'} projectId="RCPS" issueTypeId="3" product={sidebarConfig?.productFeedbackLabel} text="Submit Feedback" />
              </AlertDescription>
            </Alert>
          </Sidebar>
        </div>
      </Layout>
    </TrackPageView>
  );
};

export default AcceleratePage;
