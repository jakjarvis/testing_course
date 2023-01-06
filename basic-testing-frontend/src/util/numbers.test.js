import { it, expect, expectTypeOf, describe } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

it("should return a number when a numeric string value is passed", () => {
  const input = "1";
  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should return NaN when a non-numeric string value is passed", () => {
  const input1 = "invalid";
  const input2 = {};

  const result1 = transformToNumber(input1);
  const result2 = transformToNumber(input2);

  expect(result1).toBeNaN();
  expect(result2).toBeNaN();
});

describe("cleanNumbers()", () => {
  it("should return an array of values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];
    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
