import { Environment } from ".";

export function getFullUrl(partialUrl: string) {
  return `${Environment.API}/media/${partialUrl}`;
}
