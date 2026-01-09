import { NextFetchEvent, NextProxy, NextRequest, NextResponse } from 'next/server';

import { ProxyFactory } from './proxyFactory';

export function stackProxies(functions: Array<ProxyFactory> = [], index = 0): NextProxy {
  const current = functions[index];

  if (current) {
    return (request: NextRequest, next: NextFetchEvent) => {
      const proxy = stackProxies(functions, index + 1);
      return current(proxy)(request, next);
    };
  } else {
    return () => NextResponse.next();
  }
}
