import { NextRequest, NextResponse } from 'next/server';

/*
    Middleware to enable preview mode when the user visits the preview hostname for the first time.
    This middleware is only executed when preview mode is not controlled manually.
*/

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/
     * - scripts/
     */
    '/((?!api|_next/static|_next/image|favicon.*|images|scripts).*)',
  ],
};

export default function middleware(req: NextRequest) {
  // Redirect to correct URL when spaces are used in the URL
  if (req.nextUrl.pathname.startsWith('/downloads')) {
    if (req.nextUrl.toString().includes('%20')) {
      return NextResponse.redirect(new URL(req.nextUrl.toString().replaceAll('%20', '_')));
    }
  }

  const manual = req.cookies.get('_scdp_preview');

  // Ignore when preview mode is enabled/disabled manually
  if (manual) {
    return;
  }
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const preview_hostname = process.env.NEXT_PUBLIC_PREVIEW_HOSTNAME as string;
  const preview_secret = process.env.PREVIEW_SECRET as string;
  const cookieName = '__next_preview_data';

  // If no env variables do nothing
  if (!preview_hostname || !preview_secret) return;

  // Check whether preview mode is already on
  const cookie = req.cookies.get(cookieName);

  // Get current hostname
  const hostname = req.headers.get('host');

  // First visit when we are on the preview domain and there is no cookie yet
  if (hostname == preview_hostname && !cookie) {
    const apiUrl = `/api/context/init-preview?secret=${preview_secret}&redirect=${req.nextUrl.pathname}`;
    return NextResponse.redirect(new URL(apiUrl, req.url));
  }
}
