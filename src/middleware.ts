import { aspxExtension } from './middlewares/aspxExtension';
import { mediaHandler } from './middlewares/mediaHandler';
import { stackMiddlewares } from './middlewares/stackHandler';
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

const middlewares = [aspxExtension, underscore, mediaHandler];

export default stackMiddlewares(middlewares);