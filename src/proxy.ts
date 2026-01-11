import type { NextFetchEvent, NextRequest } from 'next/server';

import { aspxExtension } from './middlewares/aspxExtension';
import { mediaHandler } from './middlewares/mediaHandler';
import { stackProxies } from './middlewares/stackHandler';
import { underscore } from './middlewares/underscore';

export const config = {
  matcher: [
    /*
     * Optimized matcher: Only run proxy on routes that need it
     * - Exclude API routes, static files, images, HMR routes, and common assets
     * - Include specific routes that need proxy processing
     */
    '/((?!api|_next/static|_next/image|_next/webpack-hmr|_next/data|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot)).*)',
  ],
};

const proxies = [aspxExtension, underscore, mediaHandler];
const chainedProxy = stackProxies(proxies);

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest, event?: NextFetchEvent) {
  // The chained proxy expects NextFetchEvent as the second parameter
  // If event is not provided, create a minimal one that allows chaining
  // Using type assertion through unknown to satisfy TypeScript
  const fetchEvent: NextFetchEvent =
    event ||
    ({
      waitUntil: () => {},
    } as unknown as NextFetchEvent);

  return chainedProxy(request, fetchEvent);
}
