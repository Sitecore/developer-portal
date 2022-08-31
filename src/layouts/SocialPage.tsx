// Interfaces
import type { PageInfo } from '@/src/interfaces/page-info';
// Components
import CommunityList from '@/src/components/lists/CommunityList';
import Container from '@/src/components/common/Container';
import CTACard, { CTACardProps } from '@/src/components/cards/CTACard';
import Layout from '@/src/layouts/Layout';
import PromoCard, { PromoCardProps } from '@/src/components/cards/PromoCard';
import StackExchangeFeed from '@/src/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/src/components/integrations/twitter/TwitterFeed';
import VerticalGroup from '@/src/components/common/VerticalGroup';
import YouTubeFeed from '@/src/components/integrations/youtube/YouTubeFeed';
import SitecoreCommunityNews from '@/src/components/integrations/sitecore-community/news/SitecoreCommunityNews';
import SitecoreCommunityQuestions from '@/src/components/integrations/sitecore-community/questions/SitecoreCommunityQuestions';

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
