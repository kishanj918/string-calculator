import Calculator from "./Calculator";
import { describe, expect, vi, beforeEach, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("renders calculator and adds numbers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("renders input and a button", () => {
    render(<Calculator />);
    const input = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("adds number and shows result", () => {
    render(<Calculator />);
    const input = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(button);
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });
  it("displays warning for negative numbers", () => {
    render(<Calculator />);
    const input = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    fireEvent.change(input, { target: { value: "-1,-2,3" } });
    fireEvent.click(button);
    expect(
      screen.getByText("negative numbers not allowed -1,-2")
    ).toBeInTheDocument();
  });
});
