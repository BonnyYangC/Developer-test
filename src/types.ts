export interface SearchResponse {
  summary: {
    query: string;
    queryTime: number;
    numResults: number;
  };
  results: {
    type: string;
    id: string;
    score: number;
    dist: number;
    address: {
      streetNumber: string;
      streetName: string;
      municipality: string;
      country: string;
      countryCode: string;
      freeformAddress: string;
    };
    position: {
      lat: number;
      lon: number;
    };
  }[];
}

export interface AddrDetails {
  placeId: string;
  streetNumber: string;
  countryCode: string;
  country: string;
  freeformAddress: string;
  municipality: string;
}

export interface SearchRespData {
  placeId: string;
  address: {
    streetNumber: string;
    streetName: string;
    municipality: string;
    country: string;
    countryCode: string;
    freeformAddress: string;
  };
}
