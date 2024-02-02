import { NEWSLETTER_DATA_DIRECTORY } from '@lib/staticPaths';
import fsPromises from 'fs/promises';
import path from 'path';
import { translateDateAsYearMonth } from 'ui/lib/utils/dateUtil';

const MAX_RESULTS = 12;

export const getNewsletterTitle = (dateAsYearMonth: string, title?: string) => (title ? `${title} - ${dateAsYearMonth}` : dateAsYearMonth);

export const getFirstXNewsletters = async () => {
  const years = await fsPromises.readdir(NEWSLETTER_DATA_DIRECTORY);

  const newsletters = [];

  years.sort().reverse();

  // Using for loops to shortcut early
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    const yearPath = path.resolve(NEWSLETTER_DATA_DIRECTORY, `${year}`);
    const months = await fsPromises.readdir(yearPath); //.sort().reverse();
    months.sort().reverse();
    for (let j = 0; j < months.length; j++) {
      const month = months[j];
      const { title, description } = JSON.parse(await fsPromises.readFile(path.resolve(yearPath, `${month}`), { encoding: 'utf-8' }));

      const monthWithoutFile = month.substring(0, 2);
      newsletters.push({
        title: getNewsletterTitle(translateDateAsYearMonth(`${year}-${monthWithoutFile}-03`), title),
        description,
        href: `newsletter/${year}/${monthWithoutFile}`,
      });

      if (newsletters.length === MAX_RESULTS) {
        return newsletters;
      }
    }
  }

  return newsletters;
};

export const getNewslettersByYear = async (year: string) => {
  const newsletters = [];
  // Using for loops to shortcut early
  const yearPath = path.resolve(NEWSLETTER_DATA_DIRECTORY, `${year}`);
  const months = await fsPromises.readdir(yearPath);
  months.sort().reverse();

  for (let j = 0; j < months.length; j++) {
    const month = months[j];
    const { title, description } = JSON.parse(await fsPromises.readFile(path.resolve(yearPath, `${month}`), { encoding: 'utf-8' }));

    const monthWithoutFile = month.substring(0, 2);
    newsletters.push({
      title: getNewsletterTitle(translateDateAsYearMonth(`${year}-${monthWithoutFile}-03`), title),
      description,
      href: `/newsletter/${year}/${monthWithoutFile}`,
    });

    if (newsletters.length === MAX_RESULTS) {
      return newsletters;
    }
  }

  return newsletters;
};

export const getNewsletter = async (month: string, year: string) => {
  return JSON.parse(
    await fsPromises.readFile(path.resolve(NEWSLETTER_DATA_DIRECTORY, `${year}`, `${month}.json`), {
      encoding: 'utf-8',
    })
  );
};