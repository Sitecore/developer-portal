// Global
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { PageInfo, PagePartial } from '@/interfaces/page-info';
// Components
import InPageNav from '@/components/layout/InPageNav/InPageNav';
import MarkdownContent from '@/components/helper/MarkdownContent';
import SocialFeeds from '@/components/integrations/SocialFeeds';
import Layout from './Layout';

type GenericContentPageProps = {
  pageInfo: PageInfo;
  partials: PagePartial[];
};

const GenericContentPage = ({ pageInfo, partials }: GenericContentPageProps) => (
  <Layout pageInfo={pageInfo}>
    <div className={classnames('grid', 'gap-6', 'md:grid-cols-4')}>
      {pageInfo.hasInPageNav && <InPageNav partials={partials} />}
      <div
        className={classnames({
          'col-span-3': pageInfo.hasInPageNav,
          'col-span-4': !pageInfo.hasInPageNav,
        })}
      >
        <MarkdownContent partials={partials} />
      </div>
    </div>
    <SocialFeeds pageInfo={pageInfo} />
  </Layout>
);

export default GenericContentPage;
