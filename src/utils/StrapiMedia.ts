import { Environment } from ".";

export function getFullUrl(partialUrl: string) {
  return Environment.STRAPI_API + partialUrl;
}
