// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
import { getTrialsPaths } from '@/scripts/static-paths';
// Interfaces
import type { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticPaths() {
  const trialPaths = await getTrialsPaths();
  return {
    paths: trialPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(`trials/${context?.params?.trial}`);
  const partials = pageInfo?.partials ? await getPartialsAsArray(pageInfo.partials) : [];

  return {
    props: {
      pageInfo,
      partials,
    },
    revalidate: 600, // 10 minutes
  };
}

const TrialPage = ({ pageInfo, partials }: { pageInfo: PageInfo; partials: PartialData; }): JSX.Element => (
  <GenericContentPage pageInfo={pageInfo} partials={partials} />
);

export default TrialPage;
