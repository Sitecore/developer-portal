import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { ProxyFactory } from './proxyFactory';

// Only run on requests starting with /downloads
export const underscore: ProxyFactory = (proxy) => {
  return async (request: NextRequest, next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith('/downloads') || pathname.startsWith('/Downloads')) {
      if (pathname.includes('%20')) {
        const url = new URL(pathname.replaceAll('%20', '_'), request.nextUrl);

        return NextResponse.redirect(url);
      }
    }

    return proxy(request, next);
  };
};
