import {
	type NextFetchEvent,
	type NextRequest,
	NextResponse,
} from "next/server";

import type { ProxyFactory } from "./proxyFactory";

// Only run on requests starting with /Downloads
export const lowercaseDownloads: ProxyFactory = (proxy) => {
	return async (request: NextRequest, next: NextFetchEvent) => {
		const pathname = request.nextUrl.pathname;

		if (pathname.startsWith("/Downloads")) {
			const url = new URL(
				pathname.replace("/Downloads", "/downloads"),
				request.nextUrl,
			);

			return NextResponse.redirect(url);
		}

		return proxy(request, next);
	};
};
