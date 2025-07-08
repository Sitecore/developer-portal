import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Auth0Provider from 'next-auth/providers/auth0';
import OktaProvider from 'next-auth/providers/okta';

export enum TokenCustomClaimKeysEnum {
  ORG_DISPLAY_NAME = 'https://auth.sitecorecloud.io/claims/org_display_name',
  ORG_TYPE = 'https://auth.sitecorecloud.io/claims/org_type',
  ORG_ID = 'https://auth.sitecorecloud.io/claims/org_id',
  ORG_ACC_ID = 'https://auth.sitecorecloud.io/claims/org_account_id',
  TENANT_NAME = 'https://auth.sitecorecloud.io/claims/tenant_name',
  TENANT_ID = 'https://auth.sitecorecloud.io/claims/tenant_id',
  ROLES = 'https://auth.sitecorecloud.io/claims/roles',
}

export interface SitecoreProfile extends Record<string, any> {
  sub: string;
  nickname: string;
  email: string;
  picture: string;
  orgId?: string;
  orgDisplayName?: string;
  orgType?: string;
  orgAccId?: string;
  tenantName?: string;
  tenantId?: string;
  roles?: string[];
}

// Extend NextAuth types
declare module 'next-auth' {
  interface Session {
    provider?: string;
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      orgId?: string;
      orgDisplayName?: string;
      orgType?: string;
      orgAccId?: string;
      tenantName?: string;
      tenantId?: string;
      roles?: string[];
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    userId?: string;
    orgId?: string;
    orgDisplayName?: string;
    orgType?: string;
    orgAccId?: string;
    tenantName?: string;
    tenantId?: string;
    roles?: string[];
    provider?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    OktaProvider({
      name: 'Okta',
      id: 'okta',
      clientId: process.env.OKTA_CLIENT_ID!,
      clientSecret: process.env.OKTA_CLIENT_SECRET!,
      issuer: process.env.OKTA_ISSUER!,
    }),
    Auth0Provider({
      name: 'Sitecore Cloud Portal',
      id: 'sitecore',
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
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
          orgId: profile.orgId,
          orgDisplayName: profile.orgDisplayName,
          orgType: profile.orgType,
          orgAccId: profile.orgAccId,
          tenantName: profile.tenantName,
          tenantId: profile.tenantId,
          roles: profile.roles,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const sitecoreProfile = profile as SitecoreProfile;
        token.userId = sitecoreProfile.sub;
        token.name = sitecoreProfile.name;
        token.orgId = sitecoreProfile[TokenCustomClaimKeysEnum.ORG_ID];
        token.orgDisplayName = sitecoreProfile[TokenCustomClaimKeysEnum.ORG_DISPLAY_NAME];
        token.orgType = sitecoreProfile[TokenCustomClaimKeysEnum.ORG_TYPE];
        token.orgAccId = sitecoreProfile[TokenCustomClaimKeysEnum.ORG_ACC_ID];
        token.tenantName = sitecoreProfile[TokenCustomClaimKeysEnum.TENANT_NAME];
        token.tenantId = sitecoreProfile[TokenCustomClaimKeysEnum.TENANT_ID];
        token.roles = sitecoreProfile[TokenCustomClaimKeysEnum.ROLES];
        token.provider = account.provider;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.userId;
        session.user.orgId = token.orgId;
        session.user.orgDisplayName = token.orgDisplayName;
        session.user.orgType = token.orgType;
        session.user.orgAccId = token.orgAccId;
        session.user.tenantName = token.tenantName;
        session.user.tenantId = token.tenantId;
        session.user.roles = token.roles;
        session.provider = token.provider;
      }
      return session;
    },
  },
};
