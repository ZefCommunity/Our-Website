import { countriesApi } from "@/api/countries.api";

export const getCountries = async () => {
  const response = await countriesApi.get("/");
  return response.data;
};
