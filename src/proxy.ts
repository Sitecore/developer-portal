import { aspxExtension } from "./middlewares/aspxExtension";
import { mediaHandler } from "./middlewares/mediaHandler";
import { stackProxies } from "./middlewares/stackHandler";
import { underscore } from "./middlewares/underscore";

export const config = {
	matcher: [
		/*
		 * Optimized matcher: Only run middleware on routes that need it
		 * - Exclude API routes, static files, images, and common assets
		 * - Include specific routes that need middleware processing
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|.*\\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot)).*)",
	],
};

const proxies = [aspxExtension, underscore, mediaHandler];

export default stackProxies(proxies);
