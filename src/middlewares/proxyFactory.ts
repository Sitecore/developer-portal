import type { NextProxy } from "next/server";

// eslint-disable-next-line no-unused-vars
export type ProxyFactory = (proxy: NextProxy) => NextProxy;
