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
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';
import SitecoreCommunityNews from '@/components/integrations/sitecore-community/news/SitecoreCommunityNews';
import SitecoreCommunityQuestions from '@/components/integrations/sitecore-community/questions/SitecoreCommunityQuestions';

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
