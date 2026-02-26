import { tripadvisorClient } from "./client";

export const searchLocations = async (searchQuery: string) => {
  const { data } = await tripadvisorClient.get("/location/search", {
    params: {
      searchQuery,
      category: "restaurants",
      language: "en",
    },
  });

  return data;
};

export const getLocationDetails = async (locationId: string) => {
  const { data } = await tripadvisorClient.get(
    `/location/${locationId}/details`,
    {
      params: {
        language: "en",
      },
    }
  );

  return data;
};
