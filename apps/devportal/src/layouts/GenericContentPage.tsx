import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { PageInfo, PagePartialGroup, PartialData } from '@lib/interfaces/page-info';
import SocialFeeds from '@src/components/common/SocialFeeds';
import MarkdownContent from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, ContentSection, VerticalGroup } from 'ui/components/helpers';
import { PromoCard, PromoCardProps } from 'ui/components/promos';

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
    <Layout title={pageInfo.title} description={pageInfo.description} preview={pageInfo.previewMode}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      {/* background={!pageInfo.hasInPageNav ? 'neutral-subtle-bg' : ''} id="verticalgroup" */}

      <ContentSection bg={pageInfo.hasInPageNav ? 'gray.90' : 'neutral-subtle-bg'}>
        <CenteredContent>
          {promoBefore && promoBefore.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}

          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {pageInfo.hasInPageNav && <GridItem>{Nav}</GridItem>}
            <GridItem colSpan={pageInfo.hasInPageNav ? 3 : 4}>
              {Content(partials, partialGroups)}
              {customNavPager}
            </GridItem>
          </Grid>

          {promoAfter && promoAfter.map((promo, i) => <PromoCard {...promo} key={i} isImageLeft={i % 2 === 0} />)}
          <SocialFeeds pageInfo={pageInfo} />
        </CenteredContent>
      </ContentSection>
    </Layout>
  );
};

export default GenericContentPage;
