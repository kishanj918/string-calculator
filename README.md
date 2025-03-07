## Project Overview

This project demonstrates a **Test-Driven Development (TDD)** approach to building a **String Calculator**, along with a simple user interface that allows users to input numbers and calculate their sum.

---

## Tech Stack

- **React** - Component-based UI development
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build and development tool
- **Vitest** - Unit testing framework
- **React Testing Library** - For UI component tests

---

## Features

- Add numbers from a comma-separated string
- Support newline characters as delimiters
- Support custom delimiters via `//[delimiter]\n` format
- Throw error for negative numbers (list all negatives in error message)
- User-friendly UI:
  - Input box for entering numbers
  - Calculate button
  - Dynamic result display
- Support multiple delimiters like this: “//[delim1][delim2]\n” for example “//[\*][%]\n1\*2%3” should return 6.
- Handles multiple delimiters with length longer than one char

---

## Demo

https://kishanj918.github.io/string-calculator/
