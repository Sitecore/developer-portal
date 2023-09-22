/* eslint-disable react/prop-types */
// Global
import { PageInfo } from '@lib/interfaces/page-info';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import path from 'path';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { NEWSLETTER_DATA_DIRECTORY, NewsletterPath, getNewsletterStaticPaths } from '../../../lib/staticPaths';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import NewsletterNav from '@components/newsletter/NewsletterNav';
import NewsletterStory, { NewsletterStoryData } from '@components/newsletter/NewsletterStory';
import { getNewsletterTitle } from '@lib/newsletter';
import { translateDateAsYearMonth } from '@lib/utils/dateUtil';
import Hero from 'ui/components/common/Hero';
import Layout from '../../../layouts/Layout';
// Scripts

// Components

export interface NewsletterContentPageProps {
  content: NewsletterStoryData[];
  paths: NewsletterPath[];
  pageInfo: PageInfo;
  month: string;
  year: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getNewsletterStaticPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<NewsletterContentPageProps> = async (context) => {
  const { year, month } = context.params || {};

  if (!year || !month) {
    return {
      notFound: true,
    };
  }

  const props = JSON.parse(
    fs.readFileSync(path.resolve(NEWSLETTER_DATA_DIRECTORY, year as string, `${month}.json`), {
      encoding: 'utf-8',
    })
  );

  props.month = month;
  props.year = year;

  props.paths = getNewsletterStaticPaths().slice(0, 12);

  // Set the dates as the 3rd of each month to avoid having to deal with timezones rolling it backwards
  const dateAsYearMonth = translateDateAsYearMonth(`${year}-${month}-03`);

  props.pageInfo = {
    title: getNewsletterTitle(dateAsYearMonth, props.title),
    description: props.description,
    pageTitle: `Newsletter - ${dateAsYearMonth}`,
    hasInPageNav: false,
    youtube: [],
    stackexchange: [],
    twitter: [],
    sitecoreCommunity: {},
    preview: context.preview ? context.preview : null,
  };

  return {
    props,
  };
};

const NewsletterContentPage: NextPage<NewsletterContentPageProps> = ({ pageInfo, content, paths, year, month }) => {
  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <VerticalGroup>
        <CenteredContent>
          <Box>
            <Grid gap={6} templateColumns={'repeat(4,minmax(0,1fr))'} mt={8}>
              <GridItem>
                <NewsletterNav paths={paths} currentMonth={month} currentYear={year} />
              </GridItem>
              <GridItem colSpan={3} gap={10}>
                <Grid templateColumns={'repeat(3,minmax(0,1fr))'} gap={10}>
                  {content.map((story) => (
                    <NewsletterStory {...story} key={story.title} />
                  ))}
                </Grid>
              </GridItem>
            </Grid>
          </Box>
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
};

export default NewsletterContentPage;
