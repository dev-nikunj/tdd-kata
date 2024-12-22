export default function sum(a: string): number | undefined {
  const numbers = a.split(",").map(Number);
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
