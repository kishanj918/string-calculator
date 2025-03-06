import Calculator from "./components/Calculator";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

vi.mock("../utils/add", () => ({
  default: vi.fn(),
}));
describe("renders calculator and adds numbers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("renders input and a button", () => {
    render(<Calculator />);
    const input = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("adds number and shows result", () => {
    render(<Calculator />);
    const input = screen.getByPlaceholderText("Enter numbers...");
    const button = screen.getByText("Calculate");
    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(button);
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });
});
