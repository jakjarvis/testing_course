import { it, expect, describe } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should throw an error when empty string is passed", () => {
    const input = "";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/must not be empty/);
  });

  it("should not throw an error when non-empty string is passed", () => {
    const input = "valid";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).not.toThrow(/must not be empty/);
  });
});

describe("validateNumber()", () => {
  it("should throw an error when a non-number value is passed", () => {
    const input = "invalid";
    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow(/Invalid number input/);
  });

  it("should not throw an error when a number value is passed", () => {
    const input = 1;
    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).not.toThrow(/Invalid number input/);
  });
});
