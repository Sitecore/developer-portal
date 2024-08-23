import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { MiddlewareFactory } from './middlewareFactory';

// Only run on requests starting with /Downloads
export const lowercaseDownloads: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith('/Downloads')) {
      const url = new URL(pathname.replace('/Downloads', '/downloads'), request.nextUrl);
      return NextResponse.redirect(url);
    }
    return next(request, _next);
  };
};
