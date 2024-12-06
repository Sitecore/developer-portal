import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';

import { RenderContent } from '@src/components/markdown/MarkdownContent';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { TrackPageView } from '../components/integrations/engage/TrackPageView';
import Repositories from '../components/integrations/github/Repositories';
import { CenteredContent, Hero, VerticalGroup } from '../components/ui/sections';
import Layout from '../layouts/Layout';
import { getGitHubRepositories } from '../lib/github';
import { GitHubRepo } from '../lib/interfaces/github';

interface OpenSourcePageProps {
  pageInfo: PageInfo;
  repositories: GitHubRepo[];
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_opensource');
  const repositories = await getGitHubRepositories(6);
  return {
    props: {
      pageInfo,
      repositories,
    },
  };
}

const OpenSource: NextPage<OpenSourcePageProps> = ({ pageInfo, repositories }) => {
  const router = useRouter();

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup>
          <CenteredContent>
            <RenderContent content={pageInfo.parsedContent} />
            <Repositories repositories={repositories} />
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default OpenSource;
