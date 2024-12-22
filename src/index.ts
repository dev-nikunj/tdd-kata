export default function sum(a: string): any {
  let delimiter;
  let input = a;
  if (a.startsWith("//")) {
    delimiter = a.substring(2, a.indexOf("\n"));
    input = a.substring(4);
  } else if (a[1] === "\n") {
    delimiter = "\n";
  }
  let numbers = input.replace(RegExp(`[${delimiter}]`, "g"), ",");

  const numbersArray = numbers.split(",").map(Number);

  let exceptions = `negative numbers not allowed`;
  return numbersArray.reduce((acc, curr): any => {
    if (curr < 0) {
      if (exceptions === "negative numbers not allowed") {
        return (exceptions += ` ${curr}`);
      } else {
        return (exceptions += `, ${curr}`);
      }
    }
    
    return acc + curr;
  }, 0);
}

console.log(sum("//?\n1?2?3"));
