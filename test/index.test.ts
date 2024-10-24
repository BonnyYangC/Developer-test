import { config } from "dotenv";
import { describe } from "@jest/globals";
import { getAutoCompleteDetails } from "../src";

config();

// These are end-to-end tests and need an api key
describe("Tomtom Places E2E Tests", () => {
  describe("getAutoCompleteDetails", () => {
    beforeEach(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    it("returns a promise", () => {
      const res = getAutoCompleteDetails("Charlotte Street");
      expect(res).toBeInstanceOf(Promise);
    });

    it("returns an array", async () => {
      const res = await getAutoCompleteDetails("Charlotte Street");
      expect(res).toBeInstanceOf(Array);
    });

    it("can fetch from the autocomplete api", async () => {
      const res = await getAutoCompleteDetails("Charlotte Street");
      const firstRes = res[0];
      expect(firstRes).toHaveProperty("placeId");
      expect(firstRes).toHaveProperty("streetNumber");
      expect(firstRes).toHaveProperty("countryCode");
      expect(firstRes).toHaveProperty("country");
      expect(firstRes).toHaveProperty("freeformAddress");
      expect(firstRes).toHaveProperty("municipality");
    });

    it("handles no results", async () => {
      const res = await getAutoCompleteDetails("asfasffasfasafsafs");
      expect(res).toBeNull(); //toStrictEqual([]);
    });

    it("handles error", async () => {
      jest.spyOn(console, "error").mockImplementation();
      await getAutoCompleteDetails("");
      expect(console.error).toHaveBeenCalled();
    });
  });
});
