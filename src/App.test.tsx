import { describe, it, expect } from "vitest";
import add from "./add";

describe("math functions", () => {
  it("adds two numbers", () => {
    expect(add("")).toBe(0);
  });
});
