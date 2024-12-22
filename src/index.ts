export default function sum(a: string): number | undefined {
  let delimiter;
  let input = a;
  if (a.startsWith("//")) {
    delimiter = a[2];
    input = a.substring(4);
  } else if (a[1] === "\n") {
    delimiter = "\n";
  }
  let numbers = input.replace(RegExp(`[${delimiter}]`, "g"), ",");

  const numbersArray = numbers.split(",").map(Number);
  return numbersArray.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum("//?\n1?2?3"));
