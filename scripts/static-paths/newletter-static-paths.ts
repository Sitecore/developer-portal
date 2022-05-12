import fs from 'fs';
import path from 'path';

type NewsletterPathParams = {
  year: string;
  month: string;
};

type NewsletterPath = { params: NewsletterPathParams };

export const NEWSLETTER_DATA_DIRECTORY = path.join(process.cwd(), 'data/newsletters/');

export const getNewsletterStaticPaths = (): NewsletterPath[] => {
  const years = fs.readdirSync(NEWSLETTER_DATA_DIRECTORY);
  console.log(years);

  const paths: NewsletterPath[] = [];

  years.forEach((year) => {
    const yearPath = path.resolve(NEWSLETTER_DATA_DIRECTORY, year);
    const months = fs.readdirSync(yearPath);

    months.forEach((month) => {
      paths.push({ params: { year, month: month.substring(0, month.length - 5) } });
    });
  });

  return paths;
};
