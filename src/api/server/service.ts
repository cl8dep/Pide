import axios, { AxiosResponse } from "axios";

import { Business, Product } from "~/types";
import { Environment } from "~/utils";
import PaginatedResponse from "./PaginatedResponse";

export function getBusinesses(): Promise<
  AxiosResponse<PaginatedResponse<Business>>
> {
  const url = `${Environment.API}/api/v1/business`;
  return axios.get<PaginatedResponse<Business>>(url);
}

export function getBusiness(
  slug: string,
  options?: { loadProducts?: boolean }
): Promise<AxiosResponse<Business>> {
  let url = `${Environment.API}/api/v1/business/${slug}`;

  if (options) {
    const { loadProducts } = options;
    if (loadProducts) url = url.concat("?relations=products");
  }

  return axios.get<Business>(url);
}

export function getProductsByBusiness(slug: string, page = 1, limit = 10) {
  let url = `${Environment.API}/api/v1/business-product/${slug}?page=${page}&limit=${limit}`;

  return axios.get<PaginatedResponse<Product>>(url);
}
