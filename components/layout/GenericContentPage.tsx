// Global
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { PageInfo, PartialData, PagePartialGroup } from '@/interfaces/page-info';
// Components
import Container from '@/components/helper/Container';
import InPageNav from '@/components/layout/InPageNav/InPageNav';
import Layout from '@/components/layout/Layout';
import MarkdownContent from '@/components/helper/MarkdownContent';
import PromoCard, { PromoCardProps } from '@/components/cards/PromoCard';
import SectionHeading from '@/components/helper/SectionHeading';
import SocialFeeds from '@/components/integrations/SocialFeeds';

type GenericContentPageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps;
  promoBefore?: PromoCardProps;
};

const hasGridClasses = classnames('bg-gray-lightest', 'py-16');

const getTitlesFromPartialGroups = (partialGroups: PagePartialGroup[]): string[] =>
  partialGroups.map((pG) => pG.title);

const Content = (
  partials?: PartialData,
  partialGroups?: PagePartialGroup[],
  hasGrid?: boolean
): JSX.Element => {
  if (!!partialGroups) {
    return (
      <>
        {partialGroups.map((group, i) => (
          <div className={classnames({ 'mb-16': i !== partialGroups.length - 1 })} key={i}>
            <SectionHeading title={group.title} description={group.description || ''} />
            <MarkdownContent partials={group.partials} hasGrid={hasGrid} />
          </div>
        ))}
      </>
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

  return (
    <Layout pageInfo={pageInfo}>
      <Container>
        {promoBefore && <PromoCard {...promoBefore} className={classnames('mb-16')} />}
      </Container>
      <div className={classnames('mb-16', { [hasGridClasses]: hasGrid })}>
        <Container>
          <div className={classnames('grid', 'gap-6', 'md:grid-cols-4')}>
            {pageInfo.hasInPageNav && <InPageNav titles={titles} />}
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
        {promoAfter && <PromoCard {...promoAfter} className={classnames('mb-16')} />}
        <SocialFeeds pageInfo={pageInfo} />
      </Container>
    </Layout>
  );
};

export default GenericContentPage;
