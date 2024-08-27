import { get } from '@vercel/edge-config';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { MiddlewareFactory } from './middlewareFactory';

export const PUBLIC_DOWNLOAD_HOST = 'https://scdp.blob.core.windows.net/downloads';

// Only run on requests starting with /~/media
export const mediaHandler: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith('/~/media')) {
      try {
        const id = pathname.split('/')[3].split('.')[0];
        const url = await get<string>(id);

        if (url != undefined) {
          return NextResponse.redirect(PUBLIC_DOWNLOAD_HOST.concat(url), 302);
        }
      } catch {
        return NextResponse.error();
      }

      return next(request, _next);
    }
  };
};
