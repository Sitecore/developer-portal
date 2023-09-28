import { Environment } from "@sitecore-search/react";

export const SEARCH_CONFIG = {
  env: process.env.NEXT_PUBLIC_SEARCH_APP_ENV as Environment,
  customerKey: process.env.NEXT_PUBLIC_SEARCH_APP_CUSTOMER_KEY,
  apiKey: process.env.NEXT_PUBLIC_SEARCH_APP_API_KEY,
  useToken: true,
};

export const IsSearchEnabled = () => SEARCH_CONFIG.env && SEARCH_CONFIG.customerKey && SEARCH_CONFIG.apiKey ? true : false;

export function getColorScheme(resultType: string) {
  if (resultType == 'Article') {
    return 'purple';
  }
  if (resultType == 'Forum') {
    return 'teal';
  }
  if (resultType == 'Repository') {
    return 'gray';
  }
  if (resultType == 'Video') {
    return 'red';
  }
  if (resultType == 'ChangeLog') {
    return 'blue';
  }
  return 'cyan';
}