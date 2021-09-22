// Interfaces
import type { PageInfo } from '@/interfaces/page-info';
// Components
import CommunityList from '@/components/lists/CommunityList';
import Container from '@/components/helper/Container';
import CTACard, { CTACardProps } from '../cards/CTACard';
import Layout from '@/components/layout/Layout';
import PromoCard, { PromoCardProps } from '@/components/cards/PromoCard';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';
import VerticalGroup from '@/components/helper/VerticalGroup';

type SocialPageProps = {
  pageInfo: PageInfo;
  promoBefore?: PromoCardProps[];
  ctaAfter?: CTACardProps;
};

const SocialPage = ({ pageInfo, promoBefore = [], ctaAfter }: SocialPageProps): JSX.Element => (
  <Layout pageInfo={pageInfo}>
    <Container>
      <VerticalGroup>
        {promoBefore.map((promo, i) => (
          <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />
        ))}
        <CommunityList />
        <TwitterFeed content={pageInfo.twitter} />
        <StackExchangeFeed content={pageInfo.stackexchange} />
        {ctaAfter && <CTACard {...ctaAfter} />}
      </VerticalGroup>
    </Container>
  </Layout>
);

export default SocialPage;
