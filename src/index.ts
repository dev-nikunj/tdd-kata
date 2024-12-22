export default function sum(a: string): number | undefined {
  let numbers = a.replace(/\n/g, ",");
  const numbersArray = numbers.split(",").map(Number);
  return numbersArray.reduce((acc, curr) => acc + curr, 0);
}
