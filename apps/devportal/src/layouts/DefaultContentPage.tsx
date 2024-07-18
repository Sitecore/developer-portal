import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo } from '@lib/interfaces/page-info';

import ChangelogEntries from '@src/components/changelog/ChangelogEntries';
import SocialFeeds from '@src/components/common/SocialFeeds';
import { RenderContent } from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import { useRouter } from 'next/router';
import { Hero } from '../components/common';
import { ContentSection } from '../components/helpers';
import { PromoCardProps, PromoList } from '../components/promos';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type DefaultContentPageProps = {
  pageInfo: PageInfo;
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  childPageInfo?: ChildPageInfo[];
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const DefaultContentPage = ({ pageInfo, promoAfter, promoBefore, customNav, customNavPager }: DefaultContentPageProps) => {
  const router = useRouter();
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  const sectionTitles: ContentHeading[] = [];
  if (pageInfo.headings) sectionTitles.push(...pageInfo.headings);

  const Nav = customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} /> : null;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} demoId={pageInfo.guidedDemoId} />

        <ContentSection bg={pageInfo.hasInPageNav ? 'gray.90' : 'neutral-bg'}>
          {/* <CenteredContent paddingTop={10}> */}
          <PromoList data={promoBefore} />
          {/* Page structure */}

          <ThreeColumnLayout sidebar={pageInfo.hasSubPageNav && Nav} inPageNav={sectionTitles.length > 0 && <InPageNav titles={sectionTitles} key={router.asPath} />} inPageLinks={sectionTitles}>
            <RenderContent content={pageInfo.parsedContent} />

            <ChangelogEntries entries={pageInfo.changelogEntries} title={`Latest product updates`} linkText="Full changelog" columns={2} />
            <PromoList data={promoAfter} />
            <SocialFeeds pageInfo={pageInfo} />
          </ThreeColumnLayout>
          {customNavPager}
          {/* End Page structure */}
          {/* </CenteredContent> */}
        </ContentSection>
      </Layout>
    </TrackPageView>
  );
};

export default DefaultContentPage;
