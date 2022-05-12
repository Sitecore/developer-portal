// Global
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// Scripts
import {
  getNewsletterStaticPaths,
  NEWSLETTER_DATA_DIRECTORY,
} from '@/scripts/static-paths/newletter-static-paths';

export interface NewsletterSlugPageProps {}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getNewsletterStaticPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<NewsletterSlugPageProps> = async (context) => {
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

  return {
    props,
  };
};

const NewsletterSlugPage: NextPage<NewsletterSlugPageProps> = ({}) => {
  return <></>;
};

export default NewsletterSlugPage;
