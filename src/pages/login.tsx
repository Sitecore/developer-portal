import { Box, Center } from '@chakra-ui/react';

import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Login } from '../components/authentication/Login';
import { SwitchAuthentication } from '../components/authentication/switchAuthentication';
import Layout from '../layouts/Layout';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { redirect = '/', file, page } = router.query;
  const redirectUrl = file != null && page != null ? `/downloads/redirect?file=${file}&redirect=${page}` : (redirect as string);

  const { data: session } = useSession();

  return (
    <Layout title={'Login'} description={'Use this page to login using your Sitecore ID (Okta) or Sitecore Cloud Portal account'} backgroundColor={'chakra-subtle-bg'}>
      <Box height={'calc(100vh - 165px)'}>
        <Center layerStyle="section.main" h="full" backgroundColor={'chakra-subtle-bg'}>
          {session?.user != null && <SwitchAuthentication />}
          {session?.user == null && <Login redirectUrl={redirectUrl} />}
        </Center>
      </Box>
    </Layout>
  );
};

export default LoginPage;
