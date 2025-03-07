export default function add(numbers: string) {
  if (numbers.length === 0) return 0;
  const acceptedChars = new Set([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
  ]);
  let counter = 0;
  let total = 0;
  let currentNumber = "";
  const negativeNumbers: string[] = [];

  while (counter < numbers.length) {
    const char = numbers[counter];

    if (!acceptedChars.has(char)) {
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
