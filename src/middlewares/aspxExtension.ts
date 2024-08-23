import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { MiddlewareFactory } from './middlewareFactory';

// Only run on requests starting with /downloads
export const aspxExtension: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (pathname.endsWith('.aspx')) {
      const url = new URL(pathname.replaceAll('.aspx', ''), request.nextUrl);
      return NextResponse.redirect(url);
    }
    return next(request, _next);
  };
};
