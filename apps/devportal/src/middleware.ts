import { NextRequest, NextResponse } from 'next/server';

// Only run on requests starting with /downloads
export const config = {
  matcher: '/downloads/:path*',
};

export default function middleware(req: NextRequest) {
  // Redirect to correct URL when spaces are used in the URL
    if (req.nextUrl.toString().includes('%20')) {
      return NextResponse.redirect(new URL(req.nextUrl.toString().replaceAll('%20', '_')));
    }
}