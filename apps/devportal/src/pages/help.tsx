// Scipts
import { getPageInfo } from '@/src/common/page-info';
// Interfaces
import { PageInfo } from '@/src/interfaces/page-info';
// Components
import SocialPage from '@/src/layouts/SocialPage';
// Data
import contactUsCta from '@/data/promos/contact-us';
import sitecoreSupportPromo from '@/data/promos/sitecore-support';

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo('help', context.preview ? context.preview : null);

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

const HelpPage = ({ pageInfo }: HelpPageProps): JSX.Element => <SocialPage pageInfo={pageInfo} promoBefore={[sitecoreSupportPromo]} ctaAfter={contactUsCta} />;

export default HelpPage;
