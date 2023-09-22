import { Alert } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { LinkItem } from 'ui/components/cards';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, Row, VerticalGroup } from 'ui/components/helpers';
import Layout from '../../layouts/Layout';

export default function ChangelogCurrent() {
  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/v1/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
        <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
        <VerticalGroup>
          <CenteredContent>
            <Alert>
              <p>
                <Link href="/changelog" className="mr-1 font-bold hover:underline">
                  Click here
                </Link>
                to go the public preview of the upcoming Sitecore global changelog.
              </p>
            </Alert>
            <div className="mt-10">
              <h3 className="mb-4 heading-md">Current release notes</h3>
              <p>Please check this list to find the current release notes per product</p>

              <Row columns={2}>
                <LinkItem title="Sitecore Content Hub" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/release-notes.html" />
                <LinkItem title="Sitecore Content Hub ONE" link="https://doc.sitecore.com/ch-one/en/users/content-hub-one/whats-new-in-content-hub-one.html" />
                <LinkItem title="Sitecore OrderCloud" link="https://ordercloud.io/release-notes/" />
                <LinkItem title="Sitecore Send" link="https://doc.sitecore.com/send/en/users/sitecore-send/what-s-new-in-sitecore-send.html" />
                <LinkItem title="Sitecore XM/XP" link="https://dev.sitecore.net/en/Downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Release%20Notes" />
                <LinkItem title="Sitecore Experience Commerce" link="https://sitecoredev.azureedge.net/~/media/1EF967E826F84A4CB62732F61F81EBFA.ashx?date=20221201T201304" />
              </Row>
            </div>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </>
  );
}
