import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData, SubPageNavigation } from '@lib/interfaces/page-info';
import SocialFeeds from '@src/components/common/SocialFeeds';
import { MarkDownContent } from '@src/components/markdown/MarkdownContent';
import ChildNavigation from '@src/components/navigation/ChildNavigation';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import Hero from 'ui/components/common/Hero';
import { PromoCardProps } from 'ui/components/promos';
import PromoList from 'ui/components/promos/promoCard/PromoList';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ArticlePageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  childPageInfo?: ChildPageInfo[];
  subPageNavigation: SubPageNavigation;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const ArticlePage = ({ pageInfo, partials, partialGroups, promoAfter, promoBefore, customNav, customNavPager, subPageNavigation }: ArticlePageProps) => {
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  const sectionTitles: ContentHeading[] = [];
  if (pageInfo.headings) sectionTitles.push(...pageInfo.headings);

  if (partials) sectionTitles.push(...partials.titles);
  const Nav = customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} /> : null;

  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <ThreeColumnLayout sidebar={pageInfo.hasSubPageNav && <ChildNavigation subPageNavigation={subPageNavigation} />} inPageLinks={sectionTitles} inPageNav={sectionTitles.length > 0 && Nav}>
        <PromoList data={promoBefore} />

        <MarkDownContent content={pageInfo.parsedContent} partialGroups={partialGroups} partials={partials} />

        {customNavPager}

        <PromoList data={promoAfter} />
        <SocialFeeds pageInfo={pageInfo} />
      </ThreeColumnLayout>
    </Layout>
  );
};

export default ArticlePage;
