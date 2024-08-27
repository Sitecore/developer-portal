import { NextMiddleware } from 'next/server';

// eslint-disable-next-line no-unused-vars
export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;
