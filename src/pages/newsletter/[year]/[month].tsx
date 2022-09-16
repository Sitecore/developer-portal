/* eslint-disable react/prop-types */
// Global
import fs from 'fs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import path from 'path';
// Scripts
import {
  getNewsletterStaticPaths,
  NewsletterPath,
  NEWSLETTER_DATA_DIRECTORY,
} from '@/src/common/static-paths/newletter-static-paths';
// Components
import { getNewsletterTitle } from '@/src/common/newsletter/get-newsletter-title';
import { translateDateAsYearMonth } from '@/src/common/translate-date';
import Container from '@/src/components/common/Container';
import NewsletterNav from '@/src/components/newsletter/NewsletterNav';
import NewsletterStory, { NewsletterStoryData } from '@/src/components/newsletter/NewsletterStory';
import { PageInfo } from '@/src/interfaces/page-info';
import Layout from '@/src/layouts/Layout';

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
  };

  return {
    props,
  };
};

const NewsletterContentPage: NextPage<NewsletterContentPageProps> = ({
  pageInfo,
  content,
  paths,
  year,
  month,
}) => {
  return (
    <Layout pageInfo={pageInfo}>
      <Container>
        <div className="grid gap-6 mt-8 md:grid-cols-4">
          <NewsletterNav paths={paths} currentMonth={month} currentYear={year} />
          <div className="grid gap-10 md:grid-cols-3 col-span-3">
            {content.map((story) => (
              <NewsletterStory {...story} key={story.title} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default NewsletterContentPage;
