// Global
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// Scripts
import {
  getNewsletterStaticPaths,
  NewsletterPath,
  NEWSLETTER_DATA_DIRECTORY,
} from '@/scripts/static-paths/newletter-static-paths';
// Components
import Container from '@/components/helper/Container';
import NewsletterStory, { NewsletterStoryData } from '@/components/newsletter/NewsletterStory';
import NewsletterNav from '@/components/newsletter/NewsletterNav';
import Layout from '@/components/layout/Layout';
import { PageInfo } from '@/interfaces/page-info';
import { translateDateAsYearMonth } from '@/lib/translate-date';

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

  props.pageInfo = {
    title: props.title,
    description: props.description,
    pageTitle: `Newsletter - ${translateDateAsYearMonth(`${year}-${month}-01`)}`,
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
}) => {
  return (
    <Layout pageInfo={pageInfo}>
      <Container>
        <div className="grid gap-6 mt-8 md:grid-cols-4">
          <NewsletterNav paths={paths} />
          <div className="grid gap-8 md:grid-cols-3 col-span-3">
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
