import { ParsedUrlQuery } from 'querystring';

export interface UrlParams extends ParsedUrlQuery {
  slug: string;
  solution: string;
  product: string;
}
