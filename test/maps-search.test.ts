import { config } from "dotenv";
import { describe } from "@jest/globals";
import { getPlaceAutocomplete } from "../src/maps-api";
import { SearchApiError } from "../src/errors";

config();

// These are end-to-end tests and need an api key
describe("Tomtom Places API E2E Tests", () => {
  describe("getPlaceAutocomplete", () => {
    it("returns a promise", () => {
      const res = getPlaceAutocomplete(
        process.env.TOMTOM_API_KEY,
        "Kerry Road"
      );
      expect(res).toBeInstanceOf(Promise);
    });

    it("returns an array", async () => {
      const res = await getPlaceAutocomplete(
        process.env.TOMTOM_API_KEY,
        "Kerry Road"
      );
      expect(res).toBeInstanceOf(Array);
    });

    it("handles no results", async () => {
      const res = await getPlaceAutocomplete(
        process.env.TOMTOM_API_KEY,
        "asfasffasfasafsafs"
      );
      expect(res).toBeNull();
    });

    it("handles error", async () => {
      expect(
        getPlaceAutocomplete(process.env.TOMTOM_API_KEY, "")
      ).rejects.toThrow(SearchApiError);
    });
  });
});
