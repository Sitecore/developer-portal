import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogDraft from '@/src/components/changelog/ChangelogDrafts';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangelogEntriesPaginated } from 'sc-changelog/changelog';
import { SWRConfig } from 'swr';
import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import Container from 'ui/components/common/Container';
import { Message, Type } from 'ui/components/common/Message';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';
import ChangelogList from '../../components/changelog/ChangelogList';

type ChangelogHomeProps = {
  fallback: any;
  preview: boolean;
};

export default function ChangelogHome({ fallback, preview }: ChangelogHomeProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
        <Hero title="Changelog" description="Learn more about new versions, changes and improvements">
          <div className="absolute flex h-8 flex-row dark:hidden">
            <span className="mr-1 text-xs">Powered by</span>
            <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
              <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/91c3d57209b042ff9aacfee56125ef0e" className="transition hover:scale-105" alt="Powered by Content Hub ONE" width={150} height={18} priority={true} />
            </Link>
          </div>
          <div className="absolute hidden h-8 flex-row dark:flex">
            <span className="mr-1 text-xs">Powered by</span>
            <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
              <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5e8689d29cc4ef49a74b96e2149af13" className="transition hover:scale-105" alt="Powered by Content Hub ONE" width={150} height={18} priority={true} />
            </Link>
          </div>
        </Hero>
        <VerticalGroup>
          <Container>
            <ChangelogDraft enabled={preview} />
            <Message type={Type.Info}>
              <p>
                You are viewing the public preview of the upcoming Sitecore global changelog.
                <Link href="/changelog/current" title="View the list of current release notes per product" className="mx-1 font-bold hover:underline">
                  Click here
                </Link>
                for the current release notes per product
              </p>
            </Message>
            <div className="mt-8 grid h-full gap-16 md:grid-cols-5">
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
    </>
  );
}

export async function getStaticProps(context: any) {
  const isPreview = context.preview ? context.preview : null;
  const entries = await ChangelogEntriesPaginated(isPreview, '5', '', '', '');

  return {
    props: {
      fallback: {
        '/api/changelog?limit=5': entries,
      },
      preview: isPreview,
    },
    revalidate: 60,
  };
}
