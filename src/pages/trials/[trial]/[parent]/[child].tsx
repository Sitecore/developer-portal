import fs from 'fs';
import path from 'path';
// Scripts
import { getPartialsAsArray } from '@/src/common/page-info';
import { getTrialNavPaths } from '@/src/common/static-paths';
// Interfaces
import type {
  TrialNavContext,
  TrialNavData,
  PageInfo,
  PartialData,
} from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';
import TrialNav from '@/src/layouts/TrialNav';

export async function getStaticPaths() {
  const trialPaths = await getTrialNavPaths();
  return {
    paths: trialPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: TrialNavContext }) {
  const filePath = path.join(process.cwd(), `data/trials/${context.params.trial}.json`);
  const navData: TrialNavData = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
  const activeParent = navData.nav.find((parent) => parent.slug === context.params.parent);
  const activeChild = activeParent?.children.find((child) => child.slug === context.params.child);

  const pageInfo = {
    title: navData.title,
    description: navData.description,
    pageTitle: `${navData.title} - ${activeChild?.title}`,
    hasInPageNav: true,
    youtube: [],
    stackexchange: [],
    twitter: [],
    sitecoreCommunity: {},
  };

  const partials = await getPartialsAsArray([
    `trials/${context.params.trial}/${context.params.parent}/${context.params.child}`,
  ]);

  return {
    props: {
      pageInfo,
      partials,
      context: context.params,
      navData,
    },
    revalidate: 6000, // 10 minutes
  };
}

type TrialPageProps = {
  pageInfo: PageInfo;
  partials: PartialData;
  context: TrialNavContext;
  navData: TrialNavData;
};

const TrialPage = ({ pageInfo, partials, context, navData }: TrialPageProps): JSX.Element => {
  const CustomNav = <TrialNav context={context} navData={navData} />;

  return <GenericContentPage pageInfo={pageInfo} partials={partials} customNav={CustomNav} />;
};

export default TrialPage;
