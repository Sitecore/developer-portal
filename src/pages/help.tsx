// Scipts
import { getPageInfo } from '@/src/scripts/page-info';
// Interfaces
import { PageInfo } from '@/src/interfaces/page-info';
// Components
import SocialPage from '@/src/layouts/SocialPage';
// Data
import sitecoreSupportPromo from '@/data/promos/sitecore-support';
import contactUsCta from '@/data/promos/contact-us';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('help');

  return {
    props: {
      pageInfo,
    },
    revalidate: 600, // 10 minutes
  };
}

type HelpPageProps = {
  pageInfo: PageInfo;
};

const HelpPage = ({ pageInfo }: HelpPageProps): JSX.Element => (
  <SocialPage pageInfo={pageInfo} promoBefore={[sitecoreSupportPromo]} ctaAfter={contactUsCta} />
);

export default HelpPage;
