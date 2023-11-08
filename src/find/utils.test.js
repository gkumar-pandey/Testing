import { findFirstPositiveNumber, findCommonElement } from "./utils";

describe("find", () => {
  describe("findFirstPositiveNumber", () => {
    it("should find first positive number ", () => {
      const input = [3, 7, -2, 9, -5];
      const output = 3;
      expect(findFirstPositiveNumber(input)).toBe(output);
    });
    it("should find first positive nubmer in an array with only negative numbers", () => {
      const input = [-3, -7, -2, -9, -5];
      expect(findFirstPositiveNumber(input)).toBeUndefined();
    });
    it("should find first positive number in an array with decimal numbers", () => {
      const input = [3.5, 7.2, 2.1, 9.7, 5.3];
      const output = 3.5;
      expect(findFirstPositiveNumber(input)).toBe(output);
    });
    it("should check if the function throws an error with invalid input ", () => {
      const input = "invalid";
      expect(() => {
        findFirstPositiveNumber(input);
      }).toThrow();
    });
  });
  describe("findCommonElement", () => {
    it("should find a common element", () => {
      const arr1 = [2, 4, 6, 8, 10];
      const arr2 = [5, 7, 8, 10, 12];
      const output = 8;
      expect(findCommonElement(arr1, arr2)).toBe(output);
    });
    it("should find a common element in arrays with no common elements", () => {
      const arr1 = [2, 4, 6];
      const arr2 = [5, 7, 9];
      expect(findCommonElement(arr1, arr2)).toBeUndefined();
    });
    it("should find a common element when one array is empty", () => {
      const arr1 = [];
      const arr2 = [5, 7, 8, 10, 12];
      expect(findCommonElement(arr1, arr2)).toBeUndefined();
    });
    it("should find a common element when both arrays are empty", () => {
      const arr1 = [];
      const arr2 = [];
      expect(findCommonElement(arr1, arr2)).toBeUndefined();
    });
    it("should check if the function throws an error with invalid input", () => {
      const arr1 = "invalid1";
      const arr2 = "invalid";
      expect(() => {
        findCommonElement(arr1, arr2);
      }).toThrow();
    });
  });
});
