/* eslint-disable react/prop-types */
// Global
import fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
// Scripts
import {
  getNewsletterStaticPaths,
  NewsletterPath,
  NEWSLETTER_DATA_DIRECTORY,
} from '@/src/common/static-paths/newletter-static-paths';
import { PageInfo } from '@/src/interfaces/page-info';
// Lib
import { getNewsletterTitle } from '@/src/common/newsletter/get-newsletter-title';
import { translateDateAsYearMonth } from '@/src/common/translate-date';
// Components
import Container from '@/src/components/common/Container';
import Hero from '@/src/components/heros/Hero';
import CategoryTile, { CategoryTileProps } from '@/src/components/lists/CategoryTile';
import Layout from 'ui/layouts/Layout';

interface NewsletterPageProps {
  newsletters: CategoryTileProps[];
  pageInfo: PageInfo;
  year: string;
  paths: NewsletterPath[];
}

const MAX_RESULTS = 12;

export async function getStaticPaths() {
  const trialPaths = await getNewsletterStaticPaths();
  return {
    paths: trialPaths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const getNewsletters = (year: string) => {
    const newsletters = [];
    // Using for loops to shortcut early
    const yearPath = path.resolve(NEWSLETTER_DATA_DIRECTORY, `${year}`);
    const months = fs.readdirSync(yearPath).sort().reverse();

    for (let j = 0; j < months.length; j++) {
      const month = months[j];
      const { title, description } = JSON.parse(
        fs.readFileSync(path.resolve(yearPath, `${month}`), { encoding: 'utf-8' })
      );

      const monthWithoutFile = month.substring(0, 2);
      newsletters.push({
        title: getNewsletterTitle(
          translateDateAsYearMonth(`${year}-${monthWithoutFile}-03`),
          title
        ),
        description,
        href: `/newsletter/${year}/${monthWithoutFile}`,
      });

      if (newsletters.length === MAX_RESULTS) {
        return newsletters;
      }
    }

    return newsletters;
  };

  const year = context?.params?.year;
  const pageInfo = {
    title: `Newsletters from ${year}`,
    description: 'Select a newsletter to read',
  };

  return {
    props: {
      newsletters: getNewsletters(year),
      pageInfo,
      year: year,
    },
  };
};

const NewsletterPage: NextPage<NewsletterPageProps> = ({ newsletters, pageInfo }) => {
  return (
    <Layout
      title={pageInfo.title}
      description={pageInfo.description}
      openGraphImage={pageInfo.openGraphImage}
    >
      <Hero
        title={pageInfo.title}
        description={pageInfo.description}
        image={pageInfo.heroImage}
        productLogo={pageInfo.productLogo}
      />

      <Container>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="col-span-3 grid gap-10 md:grid-cols-3">
            <ul className="col-span-3 grid gap-6 md:grid-cols-1">
              {newsletters.map((card, i) => (
                <CategoryTile key={i} containerTag="li" headingLevel={'h2'} {...card} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default NewsletterPage;
