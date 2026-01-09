import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { ProxyFactory } from './proxyFactory';

// Only run on requests starting with /downloads
export const aspxExtension: ProxyFactory = (proxy) => {
  return async (request: NextRequest, next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (pathname.endsWith('.aspx')) {
      const url = new URL(pathname.replaceAll('.aspx', ''), request.nextUrl);

      return NextResponse.redirect(url);
    }

    return proxy(request, next);
  };
};
