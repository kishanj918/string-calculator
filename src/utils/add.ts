export default function add(numbers: string) {
  if (numbers.length === 0) return 0;
  const potentialDelimiter = numbers.slice(0, 3);
  const customDelimiter = potentialDelimiter.includes("//")
    ? potentialDelimiter[2]
    : "";
  const delimiters = new Set([",", "\n", customDelimiter, "/", " "]);
  let counter = 0;
  let total = 0;
  let currentNumber = "";
  const negativeNumbers: string[] = [];

  while (counter < numbers.length) {
    const char = numbers[counter];

    if (delimiters.has(char)) {
      if (currentNumber !== "") {
        const number = Number(currentNumber);

        if (number < 0) {
          negativeNumbers.push(currentNumber);
        }
        total += number;
        currentNumber = "";
      }
    } else {
      currentNumber += char;
    }

    counter++;
  }
  if (currentNumber !== "") {
    const number = Number(currentNumber);
    if (number < 0) {
      negativeNumbers.push(currentNumber);
    }
    total += number;
  }
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }
  return total;
}
