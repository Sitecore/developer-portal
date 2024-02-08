import communityListData from '@/data/data-community-list';
import { PageInfo } from '@lib/interfaces/page-info';
import { RenderContent } from '@src/components/markdown/MarkdownContent';
import Layout from '@src/layouts/Layout';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { StackExchangeFeed, TwitterFeed, YouTubeFeed } from 'ui/components/integrations';
import { SitecoreCommunityNews, SitecoreCommunityQuestions } from 'ui/components/integrations/sitecoreCommunity';
import { GenericList } from 'ui/components/lists';

import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { CTACard, CTACardProps, PromoCardProps } from 'ui/components/promos';
import PromoList from 'ui/components/promos/promoCard/PromoList';

type SocialPageProps = {
  pageInfo: PageInfo;
  promoBefore?: PromoCardProps[];
  ctaAfter?: CTACardProps;
};

const SocialPage = ({ pageInfo, promoBefore = [], ctaAfter }: SocialPageProps): JSX.Element => (
  <TrackPageView pageInfo={pageInfo}>
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <VerticalGroup>
        <CenteredContent>
          <PromoList data={promoBefore} />
          <RenderContent content={pageInfo.parsedContent} />
          <SitecoreCommunityNews data={pageInfo.sitecoreCommunity.news} />
          <SitecoreCommunityQuestions data={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
          <GenericList data={communityListData.data} title={communityListData.title} subtitle={communityListData.subtitle} column={3} cardVariant="borderedImage" />
          <TwitterFeed content={pageInfo.twitter} handle={pageInfo.twitterHandle} />
          <StackExchangeFeed data={pageInfo.stackexchange} />
          <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
          {ctaAfter && <CTACard {...ctaAfter} />}
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  </TrackPageView>
);

export default SocialPage;
