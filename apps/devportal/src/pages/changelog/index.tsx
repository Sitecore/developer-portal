import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogList from '@/src/components/changelog/ChangelogList';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 600, // 10 minutes
  };
}

const ChangelogHome = () => {
  return (
    <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
      <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
      <VerticalGroup>
        <Container>
          <div className="mt-8 grid gap-16 md:grid-cols-5">
            <div className="col-span-3">
              <ChangelogList />
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
