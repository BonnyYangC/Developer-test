import { describe, it, expect } from "@jest/globals";
import call from "../cli.js";

describe("cli", () => {
  it("parses the input file and writes to the output stream", async () => {
    const args = ["./example-data/survey.csv"];

    const expectedOutput = `
      Participation

      Participants: 6
      Submitted: 5 (83.3%)

      I like the kind of work I do. 4.6
      In general, I have the resources (e.g., business tools, information, facilities, IT or functional support) I need to be effective. 5.0
      We are working at the right pace to meet our goals. 5.0
      I feel empowered to get the work done for which I am responsible. 3.6
      I am appropriately involved in decisions that affect my work. 3.6
    `.replace(/^ +/gm, ""); // strip whitespace from the start of each line

    const output = await call(args);

    expect(output).toEqual(expectedOutput);
  });

  it("should throw an error when dividing by zero", async () => {
    const args = ["./example-data/xxxxx.csv"];
    await expect(call(args)).rejects.toThrow("File not found!");
  });
});
