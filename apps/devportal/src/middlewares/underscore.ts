import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { MiddlewareFactory } from './middlewareFactory';

// Only run on requests starting with /downloads
export const underscore: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith('/downloads') || pathname.startsWith('/Downloads')) {
      if (pathname.includes('%20')) {
        const url = new URL(pathname.replaceAll('%20', '_'), request.nextUrl);
        return NextResponse.redirect(url);
      }
    }
    return next(request, _next);
  };
};
