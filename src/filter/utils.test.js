import {
  filterByProperties,
  palindromicNumbers,
  isPalindromic,
  filterEvenAndPositive,
  filterLongStrings,
} from "./utils";

describe("Filter", () => {
  describe("FilterLongStrings", () => {
    test("Filters strings longer than minimum length", () => {
      const inputArr = ["apple", "banana", "cherry", "date"];
      const minLength = 5;
      const output = ["banana", "cherry"];
      expect(filterLongStrings(inputArr, minLength)).toEqual(output);
    });
    test("Handles empty input array", () => {
      const inputArr = [];
      const minLenght = 3;
      const output = [];
      expect(filterLongStrings(inputArr, minLenght)).toEqual(output);
    });
    test("Handles empty output array", () => {
      const input = ["cat", "dog", "rat"];
      const minLenght = 3;
      const output = [];
      expect(filterLongStrings(input, minLenght)).toEqual(output);
    });
    test("Handles negative minimum length", () => {
      const input = ["hello", "world"];
      const minLength = -2;
      const output = ["hello", "world"];
      expect(filterLongStrings(input, minLength)).toEqual(output);
    });
    test("Ensures original array remains unchanged", () => {
      const input = ["apple", "banana", "cherry"];
      const minLength = 4;
      const originalInput = [...input];
      filterLongStrings(input, minLength);
      expect(input).toEqual(originalInput);
    });
    test("Checks if the filtered array is empty", () => {
      const input = ["apple", "banana", "cherry", "date"];
      const output = [];
      const minLength = 10;
      expect(filterLongStrings(input, minLength)).toEqual(output);
    });
    test("Checks if the function throws an error with invalid input", () => {
      const input = "invalid";
      const minLength = 5;
      expect(() => {
        filterLongStrings(input, minLength);
      }).toThrow();
    });
  });
  describe("filterEvenAndPositive", () => {
    test("Filter even and positive numbers", () => {
      const input = [2, 4, -6, 8, 9, -10, 11];
      const output = [2, 4, 8];
      expect(filterEvenAndPositive(input)).toEqual(output);
    });
    test("Handles empty input array", () => {
      const input = [];
      const output = [];
      expect(filterEvenAndPositive(input)).toEqual(output);
    });
    test("Handles input with no even and positive numbers", () => {
      const input = [-3, -5, -7];
      const output = [];
      expect(filterEvenAndPositive(input)).toEqual(output);
    });
    test("Handles input with only positive but odd numbers", () => {
      const input = [1, 3, 5, 7];
      const output = [];
      expect(filterEvenAndPositive(input)).toEqual(output);
    });
    test("Checks if the output array contains only even and positive numbers", () => {
      const input = [2, 4, -6, 8, 9, -10, 11];
      const output = filterEvenAndPositive(input);
      expect(output.every((num) => num % 2 === 0 && num > 0)).toBe(true);
    });
    test("Checks if the output array length is correct", () => {
      const input = [2, 4, -6, 8, 9, -10, 11];
      const output = filterEvenAndPositive(input);
      expect(output).toHaveLength(3);
    });
    test("Checks if the filtered array does not contain negative numbers", () => {
      const input = [2, 4, -6, 8, 9, -10, 11];
      expect(filterEvenAndPositive(input)).not.toContain(-6);
      expect(filterEvenAndPositive(input)).not.toContain(-10);
    });
    test("Checks if the function throws an error with invalid input", () => {
      const input = "invalid";
      expect(() => {
        filterEvenAndPositive(input);
      }).toThrow();
    });
  });
  describe("isPallindromic", () => {
    test("Check for a palindromic number", () => {
      expect(isPalindromic(121)).toBe(true);
    });
    test("Check for a non-pallindromic number", () => {
      expect(isPalindromic(123)).toBe(false);
    });
    test("Check for a single-digit number", () => {
      expect(isPalindromic(5)).toBe(true);
    });
    test("Filter palindromic numbers from the provided array", () => {
      const input = [121, 123, 1331, 454, 678, 898];
      const output = [121, 1331, 454, 898];
      expect(palindromicNumbers(input)).toEqual(output);
    });
    test("Filter palindromic numbers from an empty array", () => {
      const input = [];
      const output = [];
      expect(palindromicNumbers(input)).toEqual(output);
    });
    test("Filter palindromic numbers from an array with no palindromic numbers", () => {
      const input = [123, 456, 789];
      const output = [];
      expect(palindromicNumbers(input)).toEqual(output);
    });
    test("Ensure the filtered array contains only palindromic numbers", () => {
      const input = [121, 1331, 454, 898];
      const output = palindromicNumbers(input);
      expect(output.every((num) => isPalindromic(num))).toBe(true);
    });
    test("Check if the filtered array length is correct", () => {
      const input = [121, 1331, 454, 898];
      expect(palindromicNumbers(input)).toHaveLength(4);
    });
    test("Check if the filtered array is an array", () => {
      const input = [121, 1331, 454, 898];
      expect(palindromicNumbers(input)).toBeInstanceOf(Array);
    });
  });
  describe("filterByProperties", () => {
    const items = [
      { name: "Item 1", price: 10, category: "A" },
      { name: "Item 2", price: 25, category: "B" },
      { name: "Item 3", price: 10, category: "A" },
      { name: "Item 4", price: 15, category: "C" },
    ];
    const criteria = { price: 10, category: "A" };
    test("Filter items based on criteria", () => {
      expect(filterByProperties(items, criteria)).toEqual([
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 3", price: 10, category: "A" },
      ]);
    });
    test("Ensure original array remians unchanged", () => {
      const originalInput = [...items];
      filterByProperties(items, criteria);
      expect(items).toEqual(originalInput);
    });
    test("Check if filtered array includes certain items", () => {
      expect(filterByProperties(items, criteria)).toContainEqual({
        name: "Item 1",
        price: 10,
        category: "A",
      });
      expect(filterByProperties(items, criteria)).toContainEqual({
        name: "Item 3",
        price: 10,
        category: "A",
      });
    });
    test("Check if filtered array does not include certain items", () => {
      expect(filterByProperties(items, criteria)).not.toContainEqual({
        name: "Item 2",
        price: 25,
        category: "B",
      });
      expect(filterByProperties(items, criteria)).not.toContainEqual({
        name: "Item 4",
        price: 15,
        category: "C",
      });
    });
    test("Check if the filtered array length s correct", () => {
      expect(filterByProperties(items, criteria)).toHaveLength(2);
    });
    test("Check if the filtered array is an array", () => {
      expect(filterByProperties(items, criteria)).toBeInstanceOf(Array);
    });
    test("check if the filtered array is not empty", () => {
      expect(filterByProperties(items, criteria)).not.toHaveLength(0);
    });
  });
});
