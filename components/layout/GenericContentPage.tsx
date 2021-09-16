// Global
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { PageInfo, PagePartial, PagePartialGroup } from '@/interfaces/page-info';
// Components
import Container from '@/components/helper/Container';
import InPageNav from '@/components/layout/InPageNav/InPageNav';
import MarkdownContent from '@/components/helper/MarkdownContent';
import SocialFeeds from '@/components/integrations/SocialFeeds';
import Layout from './Layout';
import SectionHeading from '../helper/SectionHeading';
import PromoCard, { PromoCardProps } from '../cards/PromoCard';

type GenericContentPageProps = {
  pageInfo: PageInfo;
  partials?: PagePartial[];
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps;
  promoBefore?: PromoCardProps;
};

const hasGridClasses = classnames('bg-gray-lightest', 'py-16');

const Content = (
  partials?: PagePartial[],
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
    <MarkdownContent partials={partials} hasGrid={hasGrid} />;
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
  const items = !!partialGroups ? partialGroups : partials;
  if (!items) {
    console.warn('GenericContentPage requires either partials or partialGroups');
    return <></>;
  }
  const titles = items.map((item) => item.title);

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
