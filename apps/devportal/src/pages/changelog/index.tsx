import { OrderByMonthAndYear } from '@/src/common/changelog';
import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogList from '@/src/components/changelog/ChangelogList';
import { GetLatestItems } from 'sc-changelog/changelog';
import ChangelogEntry from 'sc-changelog/types/changeLogEntry';
import { LinkValue } from 'ui/common/types/link-value';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

export async function getStaticProps() {
  const items: ChangelogEntry[] = await GetLatestItems();

  const entriesByMonth = OrderByMonthAndYear(items);

  return {
    props: { items, entriesByMonth },
  };
}

type ChangelogProps = {
  items: ChangelogEntry[];
  products: LinkValue[];
  changes: LinkValue[];
  entriesByMonth: { [month: string]: ChangelogEntry[] };
};

const ChangelogHome = ({ items, entriesByMonth }: ChangelogProps) => {
  return (
    <Layout title="Release Notes - Home" description="Empty">
      <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
      <VerticalGroup>
        <Container>
          <div className="mt-8 grid gap-16 md:grid-cols-6">
            <div className="col-span-4">
              <ChangelogList items={items} />
            </div>
            <div className="col-span-2">
              <ChangelogByMonth items={entriesByMonth} />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default ChangelogHome;
