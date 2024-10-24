export interface AddrDetails {
  placeId: string;
  streetNumber: string;
  countryCode: string;
  country: string;
  freeformAddress: string;
  municipality: string;
}

export interface SearchApiResp {
  placeId: string;
  address: Object;
}
