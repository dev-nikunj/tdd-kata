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
