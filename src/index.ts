import { handleError } from "./errors";
import { getPlaceAutocomplete } from "./maps-api";
import { AddrDetails } from "./types";
import { SearchApiResp } from "./types";

// Function to process the API response and extract address info
export async function getAutoCompleteDetails(
  address: string
): Promise<AddrDetails[] | void | null> {
  const apiKey = process.env.TOMTOM_API_KEY;
  // get autocomplete results
  const res = getPlaceAutocomplete(apiKey, address)
    .then(async (autocompleteResults) => {
      return processAutoCompleteResults(autocompleteResults);
    })
    .catch((error) => handleError(error));
  return res;
}

// Function to format auto complete results
function processAutoCompleteResults(
  data: SearchApiResp[] | null
): AddrDetails[] | null {
  // loop over and get details and map results
  return data === null
    ? null
    : data.map((result) => {
        return {
          placeId: result.placeId,
          streetNumber: result.address.streetNumber,
          countryCode: result.address.countryCode,
          country: result.address.country,
          freeformAddress: result.address.freeformAddress,
          municipality: result.address.municipality,
        };
      });
}
