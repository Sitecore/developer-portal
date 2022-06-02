// Global
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { PageInfo, PartialData, PagePartialGroup } from '@/interfaces/page-info';
// Components
import Container from '@/components/helper/Container';
import InPageNav from '@/components/layout/SidebarNav/InPageNav';
import Layout from '@/components/layout/Layout';
import MarkdownContent from '@/components/helper/MarkdownContent';
import PromoCard, { PromoCardProps } from '@/components/cards/PromoCard';
import SectionHeading from '@/components/helper/SectionHeading';
import SocialFeeds from '@/components/integrations/SocialFeeds';
import VerticalGroup from '@/components/helper/VerticalGroup';

type GenericContentPageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  customNav?: React.ReactNode;
};

const hasGridClasses = classnames('bg-theme-bg-alt', 'pt-2', 'pb-14');

const getTitlesFromPartialGroups = (partialGroups: PagePartialGroup[]): string[] =>
  partialGroups.map((pG) => pG.title);

const Content = (
  partials?: PartialData,
  partialGroups?: PagePartialGroup[],
  hasGrid?: boolean
): JSX.Element => {
  if (!!partialGroups) {
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

  if (!!partials) {
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
}: GenericContentPageProps) => {
  if (!partialGroups && !partials) {
    console.warn('GenericContentPage requires either partials or partialGroups');
    return <></>;
  }
  const titles = !!partialGroups
    ? getTitlesFromPartialGroups(partialGroups)
    : !!partials
    ? partials.titles
    : [];

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
