export * from './cookieUtil';
export * from './dateUtil';
export * from './logger';
export * from './requests';
export * from './sortUtil';
export * from './stringUtil';
export * from './urlUtil';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
