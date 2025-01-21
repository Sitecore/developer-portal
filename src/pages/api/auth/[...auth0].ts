import { pageRouterAuth } from '@/src/lib/auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const redirectUri = `${process.env.AUTH0_BASE_URL}/api/auth/callback?`;

const afterCallback = (req: NextApiRequest, res: NextApiResponse, session: any, state: any) => {
  delete session.refreshToken;
  delete session.accessTokenScope;
  delete session.accessToken;
  return session;
};

export default pageRouterAuth.handleAuth({
  login: pageRouterAuth.handleLogin({
    authorizationParams: { redirect_uri: redirectUri, scope: 'openid profile email' },
  }),
  callback: pageRouterAuth.handleCallback({ afterCallback: afterCallback }),
  logout: pageRouterAuth.handleLogout({ returnTo: `${process.env.AUTH0_BASE_URL}/` }),
});