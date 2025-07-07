import { Auth0Profile } from 'next-auth/providers/auth0';
import { OAuthConfig } from 'next-auth/providers/oauth';

export interface SitecoreProfile extends Auth0Profile {
  id: string;
  name?: string | null;
  image?: string | null;
  orgId?: string;
  orgDisplayName?: string;
  orgType?: string;
  orgAccId?: string;
  tenantName?: string;
  tenantId?: string;
  roles?: string[];
}

export enum TokenCustomClaimKeysEnum {
  ORG_DISPLAY_NAME = 'https://auth.sitecorecloud.io/claims/org_display_name',
  ORG_TYPE = 'https://auth.sitecorecloud.io/claims/org_type',
  ORG_ID = 'https://auth.sitecorecloud.io/claims/org_id',
  ORG_ACC_ID = 'https://auth.sitecorecloud.io/claims/org_account_id',
  TENANT_NAME = 'https://auth.sitecorecloud.io/claims/tenant_name',
  TENANT_ID = 'https://auth.sitecorecloud.io/claims/tenant_id',
  ROLES = 'https://auth.sitecorecloud.io/claims/roles',
}

export default function SitecoreProvider<P extends SitecoreProfile>(): OAuthConfig<P> {
  return {
    type: 'oauth',
    name: 'Sitecore Cloud Portal',
    id: 'sitecore',
    clientId: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    issuer: process.env.AUTH0_ISSUER,
    authorization: {
      params: {
        scope: 'openid profile email',
      },
    },
    profile(profile: SitecoreProfile) {
      return {
        id: profile.sub,
        name: profile.nickname,
        email: profile.email,
        image: profile.picture,
        orgId: profile[TokenCustomClaimKeysEnum.ORG_ID],
        orgDisplayName: profile[TokenCustomClaimKeysEnum.ORG_DISPLAY_NAME],
        orgType: profile[TokenCustomClaimKeysEnum.ORG_TYPE],
        orgAccId: profile[TokenCustomClaimKeysEnum.ORG_ACC_ID],
        tenantName: profile[TokenCustomClaimKeysEnum.TENANT_NAME],
        tenantId: profile[TokenCustomClaimKeysEnum.TENANT_ID],
        roles: profile[TokenCustomClaimKeysEnum.ROLES],
      };
    },
    style: { logo: '/auth0.svg', text: '#fff', bg: '#EB5424' },
  };
}
