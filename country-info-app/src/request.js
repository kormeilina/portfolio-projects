import { request } from "./http.js";

export async function getCountryName(countryName) {
  return await request(`/name/${countryName}`);
}

export async function getCountriesByRegion(region) {
  return await request(`/region/${region}`);
}
