import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogList from '@/src/components/changelog/ChangelogList';
import { GetAllChangelogEntries } from 'sc-changelog/changelog';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

export async function getStaticProps(context: any) {
  const items: ChangelogEntry[] = await GetAllChangelogEntries();

  return {
    props: {
      items: items,
    },
    revalidate: 600, // 10 minutes
  };
}

type ChangelogProps = {
  items: ChangelogEntry[];
  currentProduct: ProductConfig;
  currentChangeType: ChangeTypeConfig;
};

const ChangelogHome = ({ items }: ChangelogProps) => {
  return (
    <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
      <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
      <VerticalGroup>
        <Container>
          <div className="mt-8 grid gap-16 md:grid-cols-5">
            <div className="col-span-3">
              <ChangelogList items={items} />
            </div>
            <div className="col-span-2">
              <ChangelogByMonth />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default ChangelogHome;
