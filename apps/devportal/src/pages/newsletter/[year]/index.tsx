/* eslint-disable react/prop-types */
import { PageInfo } from '@lib/interfaces/page-info';
import { getNewslettersByYear } from '@lib/newsletter';
import { getNewsletterStaticPaths, NewsletterPath } from '@lib/staticPaths';
import Layout from '@src/layouts/Layout';
import { NextPage } from 'next';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { CategoryTileList, CategoryTileProps } from 'ui/components/lists';

interface NewsletterPageProps {
  newsletters: CategoryTileProps[];
  pageInfo: PageInfo;
  year: string;
  paths: NewsletterPath[];
}

export async function getStaticPaths() {
  const trialPaths = await getNewsletterStaticPaths();
  return {
    paths: trialPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const year = context?.params?.year;
  const pageInfo = {
    title: `Newsletters from ${year}`,
    description: 'Select a newsletter to read',
    preview: context.preview ? context.preview : null,
  };

  return {
    props: {
      newsletters: getNewslettersByYear(year),
      pageInfo,
      year: year,
    },
  };
}

const NewsletterPage: NextPage<NewsletterPageProps> = ({ newsletters, pageInfo }) => {
  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />
      <VerticalGroup>
        <CenteredContent>
          <CategoryTileList cards={newsletters} />
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
};

export default NewsletterPage;
