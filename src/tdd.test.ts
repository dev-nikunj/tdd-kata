import add from "./index";
test("should return total of given string", () => {
  expect(add("1")).toBe(1);
});

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should be able to handle comma separated string", () => {
  expect(add("1,2,3")).toBe(6);
});

test("should be able to handle new lines and return a number", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should be handling different delimiters", () => {
  expect(add("//;\n1;2;3")).toBe(6);
});

test("should be able to handle different delimiters", () => {
  expect(add("//|\n1|2|3")).toBe(6);
});

test("negative number call should be errored", () => {
  expect(add("-1")).toBe("negative numbers not allowed -1");
});

test("should handle multiple negative numbers", () => {
  expect(add("-1,-2,-3")).toBe("negative numbers not allowed -1, -2, -3");
});

test("should handle multiple negative numbers", () => {
  expect(add("//***\n1***2***3")).toBe(6);
});

test("should handle multiple negative numbers", () => {
  expect(add("1,-2,1,-4")).toBe("negative numbers not allowed -2, -4");
});
