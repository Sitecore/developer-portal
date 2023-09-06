// Interfaces

import communityListData from '../../data/data-community-list';
import Hero from '../components/Hero';
import SitecoreCommunityNews from '../components/sitecoreCommunity/news/SitecoreCommunityNews';
import SitecoreCommunityQuestions from '../components/sitecoreCommunity/questions/SitecoreCommunityQuestions';
import StackExchangeFeed from '../components/stackexchange/StackExchangeFeed';
import CTACard, { CTACardProps } from '../components/ui/CTACard';
import { CenteredContent } from '../components/ui/CenteredContent';
import CommunityList from '../components/ui/CommunityList';
import PromoCard, { PromoCardProps } from '../components/ui/PromoCard';
import { VerticalGroup } from '../components/ui/VerticalGroup';
import YouTubeFeed from '../components/youtube/YouTubeFeed';
import { PageInfo } from '../lib/interfaces/page-info';
import Layout from './Layout';

type SocialPageProps = {
  pageInfo: PageInfo;
  promoBefore?: PromoCardProps[];
  ctaAfter?: CTACardProps;
};

const SocialPage = ({ pageInfo, promoBefore = [], ctaAfter }: SocialPageProps): JSX.Element => (
  <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage} preview={pageInfo.previewMode}>
    <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

    <VerticalGroup>
      <CenteredContent>
        {promoBefore.map((promo, i) => (
          <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />
        ))}
        <SitecoreCommunityNews data={pageInfo.sitecoreCommunity.news} />
        <SitecoreCommunityQuestions data={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
        <CommunityList data={communityListData} />
        {/* <TwitterFeed content={pageInfo.twitter} handle={pageInfo.twitterHandle} /> */}
        <StackExchangeFeed data={pageInfo.stackexchange} />
        <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
        {ctaAfter && <CTACard {...ctaAfter} />}
      </CenteredContent>
    </VerticalGroup>
  </Layout>
);

export default SocialPage;
