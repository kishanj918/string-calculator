export default function add(numbers: string): number {
  if (numbers.length === 0) return 0;

  const delimiters = new Set([",", "\n"]);
  let counter = 0;
  let total = 0;
  let currentNumber = "";

  while (counter < numbers.length) {
    const char = numbers[counter];

    if (delimiters.has(char)) {
      if (currentNumber !== "") {
        total += Number(currentNumber);
        currentNumber = "";
      }
    } else {
      currentNumber += char;
    }

    counter++;
  }
  if (currentNumber !== "") {
    total += Number(currentNumber);
  }

  return total;
}
