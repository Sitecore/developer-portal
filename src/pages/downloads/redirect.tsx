import { Box, Center, Link, Text } from '@chakra-ui/react';

import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../layouts/Layout';
import { isAuthenticatedCloudPortalUser, isAuthenticatedOktaUser } from '../../lib/auth/verify';

const RedirectPage: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { file, redirect = '/' } = router.query;

  const [downloadUrl, setDownloadUrl] = useState<string>('');

  if (isAuthenticatedCloudPortalUser(session)) {
    return (
      <Layout title={'Downloading...'} backgroundColor={'chakra-subtle-bg'}>
        <Box height={'calc(100vh - 165px)'}>
          <Center layerStyle="section.main" h="full" backgroundColor={'chakra-subtle-bg'}>
            <p>Please use your Sitecore ID account to download this file.</p>
          </Center>
        </Box>
      </Layout>
    );
  }

  useEffect(() => {
    if (isAuthenticatedOktaUser(session) && file) {
      fetch(`/api/download/url?file=${encodeURIComponent(file.toString())}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.url) {
            setDownloadUrl(data.url);
            window.location.href = data.url;
            setTimeout(() => {
              router.replace(redirect.toString());
            }, 3000);
          } else {
            alert('Failed to generate download URL');
            router.replace(redirect.toString());
          }
        });
    }
  }, [file, redirect, router, session]);

  return (
    <Layout title={'Downloading...'} backgroundColor={'chakra-subtle-bg'}>
      <Box height={'calc(100vh - 165px)'}>
        <Center layerStyle="section.main" h="full" backgroundColor={'chakra-subtle-bg'}>
          <Text>
            Please wait while we prepare your download. <Link href={downloadUrl}>Click here</Link> to start the download manually.
          </Text>
        </Center>
      </Box>
    </Layout>
  );
};

export default RedirectPage;
