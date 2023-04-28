import { NextRequest, NextResponse } from 'next/server';

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
  const preview_hostname = process.env.PREVIEW_HOSTNAME as string;
  const preview_secret = process.env.PREVIEW_SECRET as string;
  const cookieName = '__next_preview_data';

  // If no env variables do nothing
  if (!preview_hostname || !preview_secret) return;

  // Check whether preview mode is already on
  const cookie = req.cookies.get(cookieName);

  // Get current hostname
  const hostname = req.headers.get('host');

  if (hostname != preview_hostname && cookie) {
    const apiUrl = `/api/preview?clear&redirect=${req.nextUrl.pathname}`;
    return NextResponse.redirect(new URL(apiUrl, req.url));
  }

  // First visit when we are on the preview domain and there is no cookie yet
  if (hostname == preview_hostname && !cookie) {
    const apiUrl = `/api/preview?secret=${preview_secret}&redirect=${req.nextUrl.pathname}`;
    return NextResponse.redirect(new URL(apiUrl, req.url));
  }
}
