// Interfaces
import type { PageInfo } from '@/src/interfaces/page-info';
// Components
import communityListData from '@/data/data-community-list';
import CTACard, { CTACardProps } from 'ui/components/cards/CTACard';
import PromoCard, { PromoCardProps } from 'ui/components/cards/PromoCard';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import CommunityList from 'ui/components/lists/CommunityList';
import SitecoreCommunityNews from 'ui/components/sitecoreCommunity/news/SitecoreCommunityNews';
import SitecoreCommunityQuestions from 'ui/components/sitecoreCommunity/questions/SitecoreCommunityQuestions';
import StackExchangeFeed from 'ui/components/stackexchange/StackExchangeFeed';
import TwitterFeed from 'ui/components/twitter/TwitterFeed';
import YouTubeFeed from 'ui/components/youtube/YouTubeFeed';
import Layout from 'ui/layouts/Layout';

type SocialPageProps = {
  pageInfo: PageInfo;
  promoBefore?: PromoCardProps[];
  ctaAfter?: CTACardProps;
};

const SocialPage = ({ pageInfo, promoBefore = [], ctaAfter }: SocialPageProps): JSX.Element => (
  <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage} preview={pageInfo.previewMode}>
    <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />
    <Container>
      <VerticalGroup>
        {promoBefore.map((promo, i) => (
          <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />
        ))}
        <SitecoreCommunityNews content={pageInfo.sitecoreCommunity.news} />
        <SitecoreCommunityQuestions content={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
        <CommunityList data={communityListData} />
        <TwitterFeed content={pageInfo.twitter} handle={pageInfo.twitterHandle} />
        <StackExchangeFeed content={pageInfo.stackexchange} />
        <YouTubeFeed content={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
        {ctaAfter && <CTACard {...ctaAfter} />}
      </VerticalGroup>
    </Container>
  </Layout>
);

export default SocialPage;
