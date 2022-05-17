// Global
import fs from 'fs';
import path from 'path';
import { GetStaticProps, NextPage } from 'next';
// Scripts
import { NEWSLETTER_DATA_DIRECTORY } from '@/scripts/static-paths/newletter-static-paths';
import { PageInfo } from '@/interfaces/page-info';
import { getPageInfo } from '@/scripts/page-info';
// Components
import CategoryTileList from '@/components/lists/CategoryTileList';
import Container from '@/components/helper/Container';
import Layout from '@/components/layout/Layout';
import { CategoryTileProps } from '@/components/cards/CategoryTile';

interface NewsletterPageProps {
  newsletters: CategoryTileProps[];
  pageInfo: PageInfo;
}

const MAX_RESULTS = 12;

export const getStaticProps: GetStaticProps = async () => {
  const getFirstXNewsletters = () => {
    const years = fs.readdirSync(NEWSLETTER_DATA_DIRECTORY);

    const newsletters = [];

    years.sort();

    // Using for loops to shortcut early
    for (let i = 0; i < years.length; i++) {
      const year = years[i];
      const yearPath = path.resolve(NEWSLETTER_DATA_DIRECTORY, `${year}`);
      const months = fs.readdirSync(yearPath).sort();
      for (let j = 0; j < months.length; j++) {
        const month = months[j];
        const { title, description } = JSON.parse(
          fs.readFileSync(path.resolve(yearPath, `${month}`), { encoding: 'utf-8' })
        );
        newsletters.push({
          title,
          description,
          href: `newsletter/${year}/${month.substring(0, 2)}`,
        });

        if (newsletters.length === MAX_RESULTS) {
          return newsletters;
        }
      }
    }

    return newsletters;
  };

  const pageInfo = await getPageInfo('newsletter');

  return {
    props: {
      newsletters: getFirstXNewsletters(),
      pageInfo,
    },
  };
};

const NewsletterPage: NextPage<NewsletterPageProps> = ({ newsletters, pageInfo }) => {
  return (
    <Layout pageInfo={pageInfo}>
      <Container>
        <ul className="mt-8">
          <CategoryTileList cards={newsletters} headingLevel="h2" />
        </ul>
      </Container>
    </Layout>
  );
};

export default NewsletterPage;
