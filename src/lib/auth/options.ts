import { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import OktaProvider from 'next-auth/providers/okta';
import { SitecoreCustomClaims, SitecoreProfile } from './sitecoreProfile';

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
      issuer: process.env.OKTA_ISSUER_BASE_URL!,
    }),
    Auth0Provider({
      name: 'Sitecore Cloud Portal',
      id: 'sitecore',
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL!,
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
        token.orgId = sitecoreProfile[SitecoreCustomClaims.ORG_ID];
        token.orgDisplayName = sitecoreProfile[SitecoreCustomClaims.ORG_DISPLAY_NAME];
        token.orgType = sitecoreProfile[SitecoreCustomClaims.ORG_TYPE];
        token.orgAccId = sitecoreProfile[SitecoreCustomClaims.ORG_ACC_ID];
        token.tenantName = sitecoreProfile[SitecoreCustomClaims.TENANT_NAME];
        token.tenantId = sitecoreProfile[SitecoreCustomClaims.TENANT_ID];
        token.roles = sitecoreProfile[SitecoreCustomClaims.ROLES];
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
