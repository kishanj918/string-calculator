import Calculator from "./components/Calculator";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("renders calculator and adds numbers", () => {
  test("renders input and a button", () => {
    render(<Calculator />);
    const input = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
