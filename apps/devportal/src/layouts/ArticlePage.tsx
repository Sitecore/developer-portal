import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import SocialFeeds from '@src/components/common/SocialFeeds';
import { MarkDownContent } from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import Hero from 'ui/components/common/Hero';
import { PromoCardProps } from 'ui/components/promos';
import PromoList from 'ui/components/promos/promoCard/PromoList';
import GithubContributionNotice from '../components/common/contribute';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ArticlePageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  childPageInfo?: ChildPageInfo[];
  sidebarConfig: SidebarNavigationConfig;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const ArticlePage = ({ pageInfo, partials, partialGroups, promoAfter, promoBefore, customNav, customNavPager, sidebarConfig }: ArticlePageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  const sectionTitles: ContentHeading[] = [];
  if (pageInfo.headings) sectionTitles.push(...pageInfo.headings);

  if (partials) sectionTitles.push(...partials.titles);
  const Nav = customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} /> : null;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <ThreeColumnLayout sidebar={pageInfo.hasSubPageNav && <SidebarNavigation config={sidebarConfig} />} inPageLinks={sectionTitles} inPageNav={sectionTitles.length > 0 && Nav}>
          <PromoList data={promoBefore} />

          <MarkDownContent content={pageInfo.parsedContent} partialGroups={partialGroups} partials={partials} />
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
