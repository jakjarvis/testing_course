import { it, expect, expectTypeOf } from "vitest";

import { transformToNumber } from "./numbers";

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
