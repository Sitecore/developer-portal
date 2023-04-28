/* eslint-disable react/prop-types */
// Global
import fs from 'fs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import path from 'path';
// Scripts
import { NEWSLETTER_DATA_DIRECTORY, NewsletterPath, getNewsletterStaticPaths } from '@/src/common/static-paths';
// Components
import { getNewsletterTitle } from '@/src/common/newsletter';
import NewsletterNav from '@/src/components/newsletter/NewsletterNav';
import NewsletterStory, { NewsletterStoryData } from '@/src/components/newsletter/NewsletterStory';
import { PageInfo } from '@/src/interfaces/page-info';
import { translateDateAsYearMonth } from 'ui/common/translate-date';
import Container from 'ui/components/common/Container';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

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

      <Container>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <NewsletterNav paths={paths} currentMonth={month} currentYear={year} />
          <div className="col-span-3 grid gap-10 md:grid-cols-3">
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
