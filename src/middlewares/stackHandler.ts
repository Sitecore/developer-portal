import { NextMiddleware, NextResponse } from 'next/server';

import { MiddlewareFactory } from './middlewareFactory';

export function stackMiddlewares(functions: Array<MiddlewareFactory> = [], index = 0): NextMiddleware {
  const current = functions[index];

  if (current) {
    const next = stackMiddlewares(functions, index + 1);

    return current(next);
  }

  return () => NextResponse.next();
}
