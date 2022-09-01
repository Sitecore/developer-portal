// Global
import { classnames } from '@/src/common/types/tailwindcss-classnames';
// Interfaces
import type { PageInfo, PagePartialGroup, PartialData } from '@/src/interfaces/page-info';
// Components
import PromoCard, { PromoCardProps } from '@/src/components/cards/PromoCard';
import Container from '@/src/components/common/Container';
import MarkdownContent from '@/src/components/common/MarkdownContent';
import SectionHeading from '@/src/components/common/SectionHeading';
import VerticalGroup from '@/src/components/common/VerticalGroup';
import SocialFeeds from '@/src/components/integrations/SocialFeeds';
import InPageNav from '@/src/components/sidebar-nav/InPageNav';
import Layout from '@/src/layouts/Layout';

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

const hasGridClasses = classnames('bg-theme-bg-alt', 'pt-2', 'pb-14');

const Content = (
  partials?: PartialData,
  partialGroups?: PagePartialGroup[],
  hasGrid?: boolean
): JSX.Element => {
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

const GenericContentPage = ({
  hasGrid,
  pageInfo,
  partialGroups,
  partials,
  promoAfter,
  promoBefore,
  customNav,
  customNavPager,
}: GenericContentPageProps) => {
  if (!partialGroups && !partials) {
    console.warn('GenericContentPage requires either partials or partialGroups');
    return <></>;
  }
  const titles = partials ? partials.titles : [];
  const Nav = customNav ? customNav : <InPageNav titles={titles} />;

  return (
    <Layout pageInfo={pageInfo}>
      <VerticalGroup>
        {promoBefore && (
          <Container>
            {promoBefore.map((promo, i) => (
              <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />
            ))}
          </Container>
        )}
        <div className={classnames({ [hasGridClasses]: hasGrid })}>
          <Container>
            <div className={classnames('grid', 'gap-6', 'md:grid-cols-4', 'mt-8')}>
              {pageInfo.hasInPageNav && Nav}
              <div
                className={classnames({
                  'col-span-3': pageInfo.hasInPageNav,
                  'col-span-4': !pageInfo.hasInPageNav,
                })}
              >
                {Content(partials, partialGroups, hasGrid)}
                {customNavPager}
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <VerticalGroup>
            {promoAfter &&
              promoAfter.map((promo, i) => (
                <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />
              ))}
            <SocialFeeds pageInfo={pageInfo} />
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default GenericContentPage;
