/* eslint-disable react/prop-types */
import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { PageInfo } from '@lib/interfaces/page-info';
import { getNewslettersByYear } from '@lib/newsletter';
import { getNewsletterStaticPaths, NewsletterPath } from '@lib/staticPaths';
import { CategoryTileList, CategoryTileProps, CenteredContent, Hero, VerticalGroup } from '@scdp/ui/components';
import Layout from '@src/layouts/Layout';

interface NewsletterPageProps {
  newsletters: CategoryTileProps[];
  pageInfo: PageInfo;
  year: string;
  paths: NewsletterPath[];
}

export async function getStaticPaths() {
  const trialPaths = getNewsletterStaticPaths();
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
      newsletters: await getNewslettersByYear(year),
      pageInfo,
      year: year,
    },
  };
}

export default function NewsletterPage({ newsletters, pageInfo }: NewsletterPageProps) {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />
        <VerticalGroup>
          <CenteredContent>
            <CategoryTileList cards={newsletters} />
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
}
