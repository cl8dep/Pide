import axios, { AxiosResponse } from "axios";

import Business from "~/types/Business";
import { Environment } from "~/utils";

export function getBusinesses(): Promise<AxiosResponse<Business[]>> {
  const url = `${Environment.STRAPI_API}/businesses`;
  return axios.get<Business[]>(url);
}
