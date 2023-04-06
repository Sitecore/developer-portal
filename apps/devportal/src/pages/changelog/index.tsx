import { ChangelogEntriesPaginated } from '@/../../packages/sc-changelog/changelog';
import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import { useRouter } from 'next/router';
import { ChangelogEntry, ChangelogEntryList } from 'sc-changelog/types/changeLogEntry';
import { SWRConfig } from 'swr';
import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';
import ChangelogList from '../../components/changelog/ChangelogList';

type ChangelogHomeProps = {
  fallback: ChangelogEntryList<ChangelogEntry[]>;
};

export default function ChangelogHome({ fallback }: ChangelogHomeProps) {
  const router = useRouter();
  console.log(fallback);
  return (
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
              <ChangelogByMonth />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}

export async function getStaticProps() {
  const entries = await ChangelogEntriesPaginated('5', '', '', '');
  return {
    props: {
      fallback: {
        '/api/changelog?limit=5': entries,
      },
    },
  };
}
