// Scipts
import { getPageInfo } from '@/scripts/page-info';
// Interfaces
import { PageInfo } from '@/interfaces/page-info';
// Components
import SocialPage from '@/components/layout/SocialPage';
// Data
import sitecoreSupportPromo from '@/data/promos/sitecore-support';
import contactUsCta from '@/data/promos/contact-us';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('help');

  return {
    props: {
      pageInfo,
    },
  };
}

type HelpPageProps = {
  pageInfo: PageInfo;
};

const HelpPage = ({ pageInfo }: HelpPageProps): JSX.Element => (
  <SocialPage pageInfo={pageInfo} promoBefore={[sitecoreSupportPromo]} ctaAfter={contactUsCta} />
);

export default HelpPage;
