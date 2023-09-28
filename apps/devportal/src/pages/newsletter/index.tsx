/* eslint-disable react/prop-types */
import newsletterPromo from '@/data/promos/newsletter';
import { Heading } from '@chakra-ui/react';
import { PageInfo } from '@lib/interfaces/page-info';
import { getNewsletterTitle } from '@lib/newsletter';
import { getPageInfo } from '@lib/page-info';
import { NEWSLETTER_DATA_DIRECTORY } from '@lib/staticPaths';
import Layout from '@src/layouts/Layout';
import fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, ContentSection } from 'ui/components/helpers';
import { CategoryTileList, CategoryTileProps } from 'ui/components/lists';
import { PromoCard } from 'ui/components/promos';
import { translateDateAsYearMonth } from 'ui/lib/utils/dateUtil';

interface NewsletterPageProps {
  newsletters: CategoryTileProps[];
  pageInfo: PageInfo;
}

const MAX_RESULTS = 12;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const getFirstXNewsletters = () => {
    const years = fs.readdirSync(NEWSLETTER_DATA_DIRECTORY);

    const newsletters = [];

    years.sort().reverse();

    // Using for loops to shortcut early
    for (let i = 0; i < years.length; i++) {
      const year = years[i];
      const yearPath = path.resolve(NEWSLETTER_DATA_DIRECTORY, `${year}`);
      const months = fs.readdirSync(yearPath).sort().reverse();
      for (let j = 0; j < months.length; j++) {
        const month = months[j];
        const { title, description } = JSON.parse(fs.readFileSync(path.resolve(yearPath, `${month}`), { encoding: 'utf-8' }));

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

  const pageInfo = await getPageInfo('_newsletter', context.preview ? context.preview : null);

  return {
    props: {
      newsletters: getFirstXNewsletters(),
      pageInfo,
    },
  };
};

const NewsletterPage: NextPage<NewsletterPageProps> = ({ newsletters, pageInfo }) => {
  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

      <ContentSection bg="neutral-subtle-bg">
        <CenteredContent>
          <PromoCard {...newsletterPromo} />

          <Heading size="lg">Previous newsletters</Heading>

          <CategoryTileList cards={newsletters} />
        </CenteredContent>
      </ContentSection>
    </Layout>
  );
};

export default NewsletterPage;
