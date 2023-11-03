import {
  transformKeys,
  reverseStrings,
  squareRoots,
  removeVowels,
} from "./utils";

describe("map utils", () => {
  describe("TransfromKeys", () => {
    test("transforms lowercase keys to uppercase", () => {
      expect(
        transformKeys({ name: "john", age: 30, city: "New York" })
      ).toEqual(["NAME", "AGE", "CITY"]);
    });
    test("returns an empty array for an empty object", () => {
      expect(transformKeys({})).toEqual([]);
    });
    test("does not modify the original object", () => {
      const input = { key1: "value1", key2: "value2" };
      const originalInput = { ...input };
      transformKeys(input);

      expect(input).toEqual(originalInput);
    });
  });

  describe("reverse string", () => {
    test("Reverse multiple strings", () => {
      const input = ["hello", "world", "jest"];
      const output = ["olleh", "dlrow", "tsej"];
      expect(reverseStrings(input)).toEqual(output);
    });

    test("Handle empty input array", () => {
      const input = [];
      const output = [];
      expect(reverseStrings(input)).toEqual(output);
    });
    test("Reverse strings with spaces", () => {
      const input = ["hello world", "goodbye space"];
      const output = ["dlrow olleh", "ecaps eybdoog"];
      expect(reverseStrings(input)).toEqual(output);
    });
    test("Original array remains unchange ", () => {
      const input = ["abc", "def"];
      const originalInput = [...input];
      reverseStrings(input);
      expect(input).toEqual(originalInput);
    });
    test("Reverse and check individual characters", () => {
      const input = ["abc", "123"];
      const output = reverseStrings(input);
      expect(output).toContainEqual("cba");
      expect(output).toContainEqual("321");
    });
  });

  describe("Square Root", () => {
    test("Calculate square root of positive numbers", () => {
      const input = [4, 9, 16];
      const output = [2, 3, 4];
      expect(squareRoots(input)).toEqual(output);
    });
    test("Calculate square root of positive floating point numbers ", () => {
      const input = [2.25, 0.25, 1.44];
      const output = [1.5, 0.5, 1.2];
      expect(squareRoots(input)).toEqual(output);
    });
    test("Handle empty input array", () => {
      expect(squareRoots([])).toEqual([]);
    });
    test("Ensure original array remains unchaged", () => {
      const input = [4, 9, 16];
      const originalInput = [...input];
      squareRoots(input);
      expect(input).toEqual(originalInput);
    });
    test("Ensure each result is close to the actual square root", () => {
      const input = [25, 64, 100];
      const output = squareRoots(input);
      expect(output[0]).toBeCloseTo(Math.sqrt(input[0]));
      expect(output[1]).toBeCloseTo(Math.sqrt(input[1]));
      expect(output[2]).toBeCloseTo(Math.sqrt(input[2]));
    });
  });

  describe("removeVowels", () => {
    test("Remove vowels from single word strings", () => {
      const input = ["hello", "world"];
      const output = ["hll", "wrld"];
      expect(removeVowels(input)).toEqual(output);
    });
    test("Handle strings with mixed case vowels", () => {
      const input = ["ApplE", "OrAngE"];
      const output = ["ppl", "rng"];
      expect(removeVowels(input)).toEqual(output);
    });
    test("Handle empty strings", () => {
      const input = ["", "test", ""];
      const output = ["", "tst", ""];
      expect(removeVowels(input)).toEqual(output);
    });
    test("Handle strings with no vowels", () => {
      const input = ["xyz", "qrst"];
      const output = ["xyz", "qrst"];
      expect(removeVowels(input)).toEqual(output);
    });
    test("Ensure original array remains unchanged", () => {
      const input = ["hello", "world"];
      const originalInput = [...input];
      removeVowels(input);
      expect(input).toEqual(originalInput);
    });
    test("Handle strings with all vowels", () => {
      const input = ["aeiou", "AEIOU"];
      const output = ["", ""];
      expect(removeVowels(input)).toEqual(output);
    });
  });
});
