import { ChangelogEntriesPaginated } from '@/../../packages/sc-changelog/changelog';
import { getOverviewPerMonth } from '@/src/common/changelog';
import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';
import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';
import ChangelogList from '../../components/changelog/ChangelogList';

type ChangelogHomeProps = {
  fallback: any;
  sortedFallback: any;
};

export default function ChangelogHome({ fallback }: ChangelogHomeProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
        <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
        <VerticalGroup>
          <Container>
            <div className="mt-8 grid gap-16 md:grid-cols-5">
              <SWRConfig value={{ fallback }}>
                <ChangelogList />
              </SWRConfig>
              <div className="col-span-2 hidden md:block">
                <div className="flex flex-row">
                  <SmallLinkButton text={'RSS'} href={`${router.pathname}/rss.xml`} icon={'feed'} />
                  <SmallLinkButton text={'ATOM'} href={`${router.pathname}/atom.xml`} icon={'feed'} />
                </div>
                <SWRConfig value={{ provider: () => new Map(Object.entries(getOverviewPerMonth())) }}>
                  <ChangelogByMonth />
                </SWRConfig>
              </div>
            </div>
          </Container>
        </VerticalGroup>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const entries = await ChangelogEntriesPaginated('5', '', '', '');
  const sorted = await getOverviewPerMonth();

  return {
    props: {
      fallback: {
        '/api/changelog?limit=5': entries,
      },
      sortedFallback: {
        '/api/changelog/all': sorted,
      },
    },
    revalidate: 60,
  };
}
