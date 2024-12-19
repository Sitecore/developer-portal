import { Auth0Server, initAuth0 } from '@auth0/nextjs-auth0';
import { UserProfile } from '@auth0/nextjs-auth0/client';

export const pageRouterAuth: Auth0Server = initAuth0({
  //auth0Logout: !(process.env.AUTH0_ISSUER_BASE_URL as string).startsWith('http://localhost'),
  routes: {
    login: '/api/auth/login',
    callback: '/api/auth/callback',
    postLogoutRedirect: '/roadmap',
  },
});

export enum TokenCustomClaimKeysEnum {
  ORG_DISPLAY_NAME = 'https://auth.sitecorecloud.io/claims/org_display_name',
  ORG_TYPE = 'https://auth.sitecorecloud.io/claims/org_type',
  ORG_ID = 'https://auth.sitecorecloud.io/claims/org_id',
  ORG_ACC_ID = 'https://auth.sitecorecloud.io/claims/org_account_id',
  TENANT_NAME = 'https://auth.sitecorecloud.io/claims/tenant_name',
  TENANT_ID = 'https://auth.sitecorecloud.io/claims/tenant_id',
  ROLES = 'https://auth.sitecorecloud.io/claims/roles',
}

export interface SitecoreUser extends UserProfile {
  [TokenCustomClaimKeysEnum.ORG_DISPLAY_NAME]: string;
  [TokenCustomClaimKeysEnum.ORG_TYPE]: string;
  [TokenCustomClaimKeysEnum.ORG_ACC_ID]: string;
  [TokenCustomClaimKeysEnum.ORG_ID]: string;
  [TokenCustomClaimKeysEnum.TENANT_NAME]: string;
  [TokenCustomClaimKeysEnum.TENANT_ID]: string;
  [TokenCustomClaimKeysEnum.ROLES]: string[];
}