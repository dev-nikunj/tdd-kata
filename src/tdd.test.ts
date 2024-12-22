import add from "./index";
test("should return total of given string", () => {
  expect(add("")).toBe(0);
});

test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
});