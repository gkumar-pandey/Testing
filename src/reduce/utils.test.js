import {
  findMaxNumber,
  countPositiveNumbers,
  flattenNestedArrays,
  groupByProperty,
} from "./utils";

describe("Reduce", () => {
  describe("FindMaxNumber", () => {
    test("Find maximum in a positive number array", () => {
      const input = [3, 7, 2, 9, 5];
      const output = 9;
      expect(findMaxNumber(input)).toBe(output);
    });
    test("Find maximum number in negative number array", () => {
      const input = [-3, -7, -2, -9, -5];
      const output = -2;
      expect(findMaxNumber(input)).toBe(output);
    });
    test("Find maximum in an array with identical elements", () => {
      const input = [7, 7, 7];
      const output = 7;
      expect(findMaxNumber(input)).toBe(output);
    });
    test("Ensure original array remains unchanged", () => {
      const input = [3, 7, 2, 9, 5];
      const originalInput = [...input];
      findMaxNumber(input);
      expect(input).toEqual(originalInput);
    });
    test("Find maximum in an array with decimal numbers", () => {
      const input = [3.5, 7.2, 2.1, 9.7, 5.3];
      const output = 9.7;
      expect(findMaxNumber(input)).toBe(output);
    });
    test("Find Maximum in an empty array", () => {
      const input = [];
      expect(findMaxNumber(input)).toBeUndefined();
    });
  });
  describe("countPositiveNumbers", () => {
    it("count positive numbers in an array with mixed numbers", () => {
      const input = [3, -7, 1, 9, -5];
      const output = 3;
      expect(countPositiveNumbers(input)).toBe(output);
    });
    it("count postive numbers in an array with all positive numbers", () => {
      const input = [3, 8, 2, 9, 5];
      const output = 5;
      expect(countPositiveNumbers(input)).toBe(output);
    });
    it("count positive numbers in an array with all negative numbers", () => {
      const input = [-3, -7, -2, -9, -5];
      const output = 0;
      expect(countPositiveNumbers(input)).toBe(output);
    });
    it("count postive numbers in an array with decimal numbers", () => {
      const input = [3.5, 7.2, -2.1, 9.7, -5.3];
      const output = 3;
      expect(countPositiveNumbers(input)).toBe(output);
    });
  });
  describe("flattenNestedArrays", () => {
    it("Flatten nested arrays with mixed elements", () => {
      const input = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      const output = [1, 2, 3, 4, 5, 6];
      expect(flattenNestedArrays(input)).toEqual(output);
    });
    it("Flatten nested arrays with arrays of different lengths", () => {
      const input = [[1, 2], [3, 4, 5], [6]];
      const output = [1, 2, 3, 4, 5, 6];
      expect(flattenNestedArrays(input)).toEqual(output);
    });
    it("Flatten nested arrays with empty arrays", () => {
      const input = [[], [], []];
      const output = [];
      expect(flattenNestedArrays(input)).toEqual(output);
    });
    it("Flatten nested arrays with arrays containing non-numeric elements", () => {
      const input = [
        [1, 2],
        ["a", "b"],
        [3, 4],
      ];
      const output = [1, 2, "a", "b", 3, 4];
      expect(flattenNestedArrays(input)).toEqual(output);
    });
    it("Flatten an empty array of nested arrays", () => {
      const input = [];
      const output = [];
      expect(flattenNestedArrays(input)).toEqual(output);
    });
    it("Ensure original nested arrays remain unchanged", () => {
      const input = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      const originalArr = [...input];
      flattenNestedArrays(input);
      expect(input).toEqual(originalArr);
    });
    it("Check if the function throws an error with invalid input", () => {
      const input = "invalid";
      expect(() => {
        flattenNestedArrays(input);
      }).toThrow();
    });
  });
});
