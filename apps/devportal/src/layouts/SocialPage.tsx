// Interfaces
import type { PageInfo } from '@/src/interfaces/page-info';
// Components
import CTACard, { CTACardProps } from '@/src/components/cards/CTACard';
import PromoCard, { PromoCardProps } from '@/src/components/cards/PromoCard';
import SitecoreCommunityNews from '@/src/components/integrations/sitecore-community/news/SitecoreCommunityNews';
import SitecoreCommunityQuestions from '@/src/components/integrations/sitecore-community/questions/SitecoreCommunityQuestions';
import StackExchangeFeed from '@/src/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/src/components/integrations/twitter/TwitterFeed';
import YouTubeFeed from '@/src/components/integrations/youtube/YouTubeFeed';
import CommunityList from '@/src/components/lists/CommunityList';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';
import Hero from '../components/heros/Hero';

type SocialPageProps = {
  pageInfo: PageInfo;
  promoBefore?: PromoCardProps[];
  ctaAfter?: CTACardProps;
};

const SocialPage = ({ pageInfo, promoBefore = [], ctaAfter }: SocialPageProps): JSX.Element => (
  <Layout
    title={pageInfo.title}
    description={pageInfo.description}
    openGraphImage={pageInfo.openGraphImage}
  >
    <Hero
      title={pageInfo.title}
      description={pageInfo.description}
      image={pageInfo.heroImage}
      productLogo={pageInfo.productLogo}
    />
    <Container>
      <VerticalGroup>
        {promoBefore.map((promo, i) => (
          <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />
        ))}
        <SitecoreCommunityNews content={pageInfo.sitecoreCommunity.news} />
        <SitecoreCommunityQuestions
          content={pageInfo.sitecoreCommunity.questions}
          sortKeys={pageInfo.sitecoreCommunityQuestionsSort}
          forumKeys={pageInfo.sitecoreCommunityQuestionsCategory}
        />
        <CommunityList />
        <TwitterFeed content={pageInfo.twitter} handle={pageInfo.twitterHandle} />
        <StackExchangeFeed content={pageInfo.stackexchange} />
        <YouTubeFeed
          content={pageInfo.youtube}
          title={pageInfo.youtubeTitle}
          playlistTitle={pageInfo.youtubePlaylistTitle}
        />
        {ctaAfter && <CTACard {...ctaAfter} />}
      </VerticalGroup>
    </Container>
  </Layout>
);

export default SocialPage;
