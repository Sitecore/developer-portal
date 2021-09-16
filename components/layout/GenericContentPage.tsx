// Global
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { PageInfo, PagePartial } from '@/interfaces/page-info';
// Components
import Container from '@/components/helper/Container';
import InPageNav from '@/components/layout/InPageNav/InPageNav';
import MarkdownContent from '@/components/helper/MarkdownContent';
import SocialFeeds from '@/components/integrations/SocialFeeds';
import Layout from './Layout';

type GenericContentPageProps = {
  pageInfo: PageInfo;
  partials: PagePartial[];
  hasGrid?: boolean;
};

const hasGridClasses = classnames('bg-gray-lightest', 'py-16');

const GenericContentPage = ({ pageInfo, partials, hasGrid }: GenericContentPageProps) => (
  <Layout pageInfo={pageInfo}>
    <div className={classnames('mb-16', { [hasGridClasses]: hasGrid })}>
      <Container>
        <div className={classnames('grid', 'gap-6', 'mb-16', 'md:grid-cols-4')}>
          {pageInfo.hasInPageNav && <InPageNav partials={partials} />}
          <div
            className={classnames({
              'col-span-3': pageInfo.hasInPageNav,
              'col-span-4': !pageInfo.hasInPageNav,
            })}
          >
            <MarkdownContent partials={partials} hasGrid={hasGrid} />
          </div>
        </div>
      </Container>
    </div>
    <Container>
      <SocialFeeds pageInfo={pageInfo} />
    </Container>
  </Layout>
);

export default GenericContentPage;
