import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogList from '@/src/components/changelog/ChangelogList';
import { useRouter } from 'next/router';
import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

const ChangelogHome = () => {
  const router = useRouter();

  return (
    <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
      <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
      <VerticalGroup>
        <Container>
          <div className="mt-8 grid gap-16 md:grid-cols-5">
            <div className="col-span-3">
              <ChangelogList />
            </div>
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
};

export default ChangelogHome;
