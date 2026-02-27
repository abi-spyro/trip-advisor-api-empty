import { useQuery } from "@tanstack/react-query";
import { getLocationDetails } from "../client/tripadvisor";

export const useLocationDetails = (locationId: string) => {
  return useQuery({
    queryKey: ["locationDetails", locationId],
    queryFn: () => getLocationDetails(locationId),
    enabled: !!locationId,
  });
};
