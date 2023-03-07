// Global
// Interfaces
import type { PageInfo, PagePartialGroup, PartialData } from '@/src/interfaces/page-info';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';
// Components
import MarkdownContent from '@/src/components/common/MarkdownContent';
import SocialFeeds from '@/src/components/integrations/SocialFeeds';
import InPageNav from '@/src/components/sidebar-nav/InPageNav';
import PromoCard, { PromoCardProps } from 'ui/components/cards/PromoCard';
import Container from 'ui/components/common/Container';
import SectionHeading from 'ui/components/headings/SectionHeading';
import Hero from 'ui/components/heros/Hero';

type GenericContentPageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const hasGridClasses = 'bg-theme-bg-alt pt-2 pb-14';

const Content = (partials?: PartialData, partialGroups?: PagePartialGroup[], hasGrid?: boolean): JSX.Element => {
  if (partialGroups) {
    return (
      <VerticalGroup>
        {partialGroups.map((group, i) => (
          <div key={i}>
            <SectionHeading title={group.title} description={group.description || ''} />
            <MarkdownContent partials={group.partials} hasGrid={hasGrid} />
          </div>
        ))}
      </VerticalGroup>
    );
  }

  if (partials) {
    return <MarkdownContent partials={partials} hasGrid={hasGrid} />;
  }

  return <></>;
};

const GenericContentPage = ({ hasGrid, pageInfo, partialGroups, partials, promoAfter, promoBefore, customNav, customNavPager }: GenericContentPageProps) => {
  if (!partialGroups && !partials) {
    console.warn('GenericContentPage requires either partials or partialGroups');
    return <></>;
  }
  const titles = partials ? partials.titles : [];
  const Nav = customNav ? customNav : <InPageNav titles={titles} />;

  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />
      <VerticalGroup>
        {promoBefore && (
          <Container>
            {promoBefore.map((promo, i) => (
              <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />
            ))}
          </Container>
        )}
        <div className={hasGrid ? hasGridClasses : ''}>
          <Container>
            <div className="mt-8 grid-cols-4 gap-6 md:grid">
              {pageInfo.hasInPageNav && Nav}
              <div className={pageInfo.hasInPageNav ? 'col-span-3' : 'col-span-4'}>
                {Content(partials, partialGroups, hasGrid)}
                {customNavPager}
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <VerticalGroup>
            {promoAfter && promoAfter.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}
            <SocialFeeds pageInfo={pageInfo} />
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default GenericContentPage;
