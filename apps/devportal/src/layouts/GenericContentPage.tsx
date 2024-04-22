import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { PageInfo, PagePartialGroup, PartialData } from '@lib/interfaces/page-info';
import { CenteredContent, ContentSection, Hero, PromoCardProps, PromoList, VerticalGroup } from '@scdp/ui/components';
import SocialFeeds from '@src/components/common/SocialFeeds';
import MarkdownContent from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import InPageNavSmall from '../components/navigation/InPageNavSmall';

type GenericContentPageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const Content = (partials?: PartialData, partialGroups?: PagePartialGroup[]): JSX.Element => {
  if (partialGroups) {
    return (
      <VerticalGroup>
        {partialGroups.map((group, i) => (
          <div key={i}>
            <Heading as="h2">{group.title}</Heading>
            <Text>{group.description || ''}</Text>
            <MarkdownContent partials={group.partials} />
          </div>
        ))}
      </VerticalGroup>
    );
  }

  if (partials) {
    return <MarkdownContent partials={partials} />;
  }

  return <></>;
};

const GenericContentPage = ({ pageInfo, partialGroups, partials, promoAfter, promoBefore, customNav, customNavPager }: GenericContentPageProps) => {
  if (!partialGroups && !partials) {
    console.warn('GenericContentPage requires either partials or partialGroups');
    //return <></>;
  }
  const titles = partials ? partials.titles : [];
  const Nav = customNav ? customNav : <InPageNav titles={titles} />;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        {/* background={!pageInfo.hasInPageNav ? 'neutral-bg' : ''} id="verticalgroup" */}
        <ContentSection bg={pageInfo.hasInPageNav ? 'gray.90' : 'neutral-bg'}>
          <CenteredContent>
            <PromoList data={promoBefore} />
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {pageInfo.hasInPageNav && <GridItem>{Nav}</GridItem>}
              <GridItem colSpan={pageInfo.hasInPageNav ? 3 : 4}>
                <InPageNavSmall hideFrom="xl" titles={titles} />
                {Content(partials, partialGroups)}
                {customNavPager}
              </GridItem>
            </Grid>
            <PromoList data={promoAfter} />
            <SocialFeeds pageInfo={pageInfo} />
          </CenteredContent>
        </ContentSection>
      </Layout>
    </TrackPageView>
  );
};

export default GenericContentPage;
