import { useQuery } from "@tanstack/react-query";
import { searchLocations } from "../client/tripadvisor";

export const useSearchLocations = (searchQuery: string) => {
  return useQuery({
    queryKey: ["locations", searchQuery],
    queryFn: () => searchLocations(searchQuery),
    enabled: !!searchQuery,
  });
};
