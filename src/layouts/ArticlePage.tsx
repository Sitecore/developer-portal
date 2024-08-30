import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo, SidebarNavigationConfig } from '@lib/interfaces/page-info';

import { RenderContent } from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import { useRouter } from 'next/router';

import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';

import { PromoCardProps, PromoList } from '../components/cards';
import { SocialFeeds } from '../components/links';
import GithubContributionNotice from '../components/markdown/contribute';
import { ArticlePaging } from '../components/navigation/ArticlePaging';
import BreadcrumbNav from '../components/navigation/BreadcrumbNav';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { Hero } from '../components/ui/sections';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ArticlePageProps = {
  pageInfo: PageInfo;
  hasGrid?: boolean;
  promoAfter?: Array<PromoCardProps>;
  promoBefore?: Array<PromoCardProps>;
  childPageInfo?: Array<ChildPageInfo>;
  sidebarConfig: SidebarNavigationConfig;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const ArticlePage = ({ pageInfo, promoAfter, promoBefore, customNav, customNavPager, sidebarConfig }: ArticlePageProps) => {
  const router = useRouter();

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
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} demoId={pageInfo.guidedDemoId} />

        <ThreeColumnLayout sidebar={pageInfo.hasSubPageNav && <SidebarNavigation config={sidebarConfig} />} inPageLinks={sectionTitles} inPageNav={sectionTitles.length > 0 && Nav}>
          <BreadcrumbNav enabled={sidebarConfig.enableBreadcrumb} currentPage={pageInfo} config={sidebarConfig} />
          <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentPage={pageInfo} config={sidebarConfig} />
          <PromoList data={promoBefore} />
          <RenderContent content={pageInfo.parsedContent} />
          <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentPage={pageInfo} config={sidebarConfig} />

          <GithubContributionNotice pageInfo={pageInfo} />
          {customNavPager}

          <PromoList data={promoAfter} />
          <SocialFeeds pageInfo={pageInfo} />
        </ThreeColumnLayout>
      </Layout>
    </TrackPageView>
  );
};

export default ArticlePage;
