import { Auth0Server, initAuth0 } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const redirectUri = `${process.env.AUTH0_BASE_URL}/api/auth/callback`;

export const pageRouterAuth: Auth0Server = initAuth0({
  routes: {
    login: '/api/auth/login',
    callback: '/api/auth/callback',
    postLogoutRedirect: '/',
  },
});

const afterCallback = (req: NextApiRequest, res: NextApiResponse, session: any, state: any) => {
  delete session.refreshToken;
  delete session.accessTokenScope;
  delete session.accessToken;
  return session;
};

export default pageRouterAuth.handleAuth({
  login: pageRouterAuth.handleLogin(),
  callback: pageRouterAuth.handleCallback({ afterCallback: afterCallback }),
  logout: pageRouterAuth.handleLogout({ returnTo: `${process.env.AUTH0_BASE_URL}/` }),
});
