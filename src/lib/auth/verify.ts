import { Session } from 'next-auth';

/**
 * Verifies whether the logged-in user is an Okta user
 * @param session - The NextAuth session object
 * @returns true if the user is authenticated via Okta or Cloud Portal, false otherwise
 */
export function isVerifiedUser(session: Session | null): boolean {
  if (!session) {
    return false;
  }

  return session.provider === 'okta' || session.provider === 'sitecore';
}

/**
 * Verifies whether the logged-in user is an Okta user and is authenticated
 * @param session - The NextAuth session object
 * @returns true if the user is authenticated and is an Okta user, false otherwise
 */
export function isAuthenticatedOktaUser(session: Session | null): boolean {
  if (!session || !session.user) {
    return false;
  }

  return session.provider === 'okta';
}

/**
 * Verifies whether the logged-in user is an Cloud Portal user and is authenticated
 * @param session - The NextAuth session object
 * @returns true if the user is authenticated and is an Cloud Portal user, false otherwise
 */
export function isAuthenticatedCloudPortalUser(session: Session | null): boolean {
  if (!session || !session.user) {
    return false;
  }

  return session.provider === 'sitecore';
}
