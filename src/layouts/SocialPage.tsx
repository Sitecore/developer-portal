import { PageInfo } from '@lib/interfaces/page-info';
import { CTACard, CTACardProps, PromoCardProps, PromoList } from '@src/components/cards';
import { RenderContent } from '@src/components/markdown/MarkdownContent';
import Layout from '@src/layouts/Layout';

import communityListData from '@/data/data-community-list';
import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';

import { SitecoreCommunityNews, SitecoreCommunityQuestions, StackExchangeFeed, YouTubeFeed } from '../components/integrations';
import { GenericList } from '../components/lists';
import { CenteredContent, Hero, VerticalGroup } from '../components/ui/sections';

type SocialPageProps = {
  pageInfo: PageInfo;
  promoBefore?: Array<PromoCardProps>;
  ctaAfter?: CTACardProps;
};

const SocialPage = ({ pageInfo, promoBefore = [], ctaAfter }: SocialPageProps) => (
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
          <StackExchangeFeed data={pageInfo.stackexchange} />
          <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
          {ctaAfter && <CTACard {...ctaAfter} />}
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  </TrackPageView>
);

export default SocialPage;
