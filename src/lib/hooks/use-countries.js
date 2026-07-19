import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/get-countries";

export function useCountries() {
  const { data, isPending, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  let memoData = {};

  data?.data.forEach((country) => {
    memoData[country.country] = country;
  });

  return {
    data: data?.data,
    memoData,
    isPending,
    error,
  };
}
