import { config } from "dotenv";
import { describe } from "@jest/globals";
import { getPlaceAutocomplete } from "../src/maps-api";
import { SearchApiError } from "../src/errors";

config();
const apiKey = process.env.TOMTOM_API_KEY || "";

// These are end-to-end tests and need an api key
describe("Tomtom Places API E2E Tests", () => {
  describe("getPlaceAutocomplete", () => {
    it("returns a promise", () => {
      const res = getPlaceAutocomplete(apiKey, "Kerry Road");
      expect(res).toBeInstanceOf(Promise);
    });

    it("returns an array", async () => {
      const res = await getPlaceAutocomplete(apiKey, "Kerry Road");
      expect(res).toBeInstanceOf(Array);
    });

    it("handles no results", async () => {
      const res = await getPlaceAutocomplete(apiKey, "asfasffasfasafsafs");
      expect(res).toBeNull();
    });

    it("handles error", async () => {
      expect(getPlaceAutocomplete(apiKey, "")).rejects.toThrow(SearchApiError);
    });
  });
});
