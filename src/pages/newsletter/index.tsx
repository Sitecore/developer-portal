// Global
import fs from 'fs';
import path from 'path';
import { GetStaticProps, NextPage } from 'next';
// Scripts
import { NEWSLETTER_DATA_DIRECTORY } from '@/src/common/static-paths/newletter-static-paths';
import { PageInfo } from '@/src/interfaces/page-info';
import { getPageInfo } from '@/src/common/page-info';
// Lib
import { getNewsletterTitle } from '@/src/common/newsletter/get-newsletter-title';
import { translateDateAsYearMonth } from '@/src/common/translate-date';
// Components
import CategoryTileList from '@/src/components/lists/CategoryTileList';
import Container from '@/src/components/common/Container';
import Layout from '@/src/layouts/Layout';
import { CategoryTileProps } from '@/src/components/lists/CategoryTile';
import VerticalGroup from '@/src/components/common/VerticalGroup';
import PromoCard from '@/src/components/cards/PromoCard';
// Data
import newsletterPromo from '@/data/promos/newsletter';

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
          href: `newsletter/${year}/${monthWithoutFile}`,
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
        <VerticalGroup>
          <PromoCard {...newsletterPromo} />
          <div>
            <h2 className="heading-md">Previous newsletters</h2>
            <ul className="mt-8">
              <CategoryTileList cards={newsletters} headingLevel="h2" />
            </ul>
          </div>
        </VerticalGroup>
      </Container>
    </Layout>
  );
};

export default NewsletterPage;
