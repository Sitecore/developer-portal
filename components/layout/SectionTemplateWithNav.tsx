// Global
import { classnames } from '@/tailwindcss-classnames';
import { useId } from 'react-id-generator';
// Interfaces
import type { PageInfo, PagePartial } from '@/interfaces/page-info';
// Components
import InPageNav from '@/components/layout/InPageNav/InPageNav';
import MarkdownContent from '@/components/helper/MarkdownContent';
import SocialFeeds from '@/components/integrations/SocialFeeds';
import Layout from './Layout';

type SectionTemplateProps = {
  pageInfo: PageInfo;
  partials: PagePartial[];
  hasInPageNav?: boolean;
};

const SectionTemplate = ({ pageInfo, partials }: SectionTemplateProps) => {
  const [idSeed] = useId(1, 'section-template');

  return (
    <Layout pageInfo={pageInfo}>
      <div className={classnames('grid', 'gap-6', 'md:grid-cols-4')}>
        <InPageNav partials={partials} idSeed={idSeed} />
        <div className={classnames('col-span-3')}>
          <MarkdownContent partials={partials} idSeed={idSeed} />
        </div>
      </div>
      <SocialFeeds pageInfo={pageInfo} />
    </Layout>
  );
};

export default SectionTemplate;
