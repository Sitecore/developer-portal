import { aspxExtension } from './middlewares/aspxExtension';
import { mediaHandler } from './middlewares/mediaHandler';
import { stackProxies } from './middlewares/stackHandler';
import { underscore } from './middlewares/underscore';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

const proxies = [aspxExtension, underscore, mediaHandler];

export default stackProxies(proxies);
