import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import { CenteredContent, Hero, VerticalGroup } from '@scdp/ui/components';
import { NextPage } from 'next';
import { TrackPageView } from '../components/engagetracker/TrackPageView';
import { MarkDownContent } from '../components/markdown/MarkdownContent';
import Repositories from '../components/repositories';
import Layout from '../layouts/Layout';
import { getGitHubRepositories } from '../lib/github';
import { GitHubRepo } from '../lib/interfaces/github';

interface OpenSourceProps {
  pageInfo: PageInfo;
  repositories: GitHubRepo[];
}

export async function getServerSideProps() {
  const pageInfo = await getPageInfo('_opensource');
  const repositories = await getGitHubRepositories(9);

  return {
    props: {
      pageInfo,
      repositories,
    },
  };
}

const OpenSource: NextPage<OpenSourceProps> = ({ pageInfo, repositories }) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <VerticalGroup>
          <CenteredContent>
            <MarkDownContent content={pageInfo.parsedContent} />
            <Repositories repositories={repositories} />
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default OpenSource;
