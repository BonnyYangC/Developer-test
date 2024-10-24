import axios from "axios";
import { SearchApiResp } from "./types";
import { SearchApiError } from "./errors";

// Function to fetch location data using TomTom Search API
// ref: https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(
  key: string,
  address: string
): Promise<SearchApiResp[] | null> {
  const url = `https://api.tomtom.com/search/2/search/${address}.json'`;
  const params = {
    key,
    countrySet: "AUS,AU",
    limit: 100,
  };

  try {
    const autocomplete = await axios.get(url, {
      params: params,
    });
    return processResponse(autocomplete.data);
  } catch (error) {
    return Promise.reject(new SearchApiError(error.message, 400));
  }
}

// Function to translate response to formatted data structure
function processResponse(data): SearchApiResp[] | null {
  if (data && data.results && data.results.length > 0) {
    return data.results.map((result) => {
      return {
        placeId: result.id,
        address: result.address,
      };
    });
  } else {
    console.log("No results found for the query");
    return null;
  }
}
