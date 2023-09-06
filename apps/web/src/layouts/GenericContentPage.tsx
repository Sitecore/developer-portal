import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import PromoCard, { PromoCardProps } from 'ui/components/cards/PromoCard';
import Hero from '../components/Hero';
import SocialFeeds from '../components/common/SocialFeeds';
import MarkdownContent from '../components/markdown/MarkdownContent';
import InPageNav from '../components/navigation/InPageNav';
import { CenteredContent } from '../components/ui/CenteredContent';
import { VerticalGroup } from '../components/ui/VerticalGroup';
import { PageInfo, PagePartialGroup, PartialData } from '../lib/interfaces/page-info';
import Layout from './Layout';

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
    <Layout title={pageInfo.title} description={pageInfo.description}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <VerticalGroup>
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
      </VerticalGroup>
    </Layout>
  );
};

export default GenericContentPage;
