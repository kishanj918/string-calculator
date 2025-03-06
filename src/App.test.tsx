import { describe, it, expect } from "vitest";
import add from "./add";

describe("String Calculator", () => {
  it("return 0 if empty string", () => {
    expect(add("")).toBe(0);
  });
  it("adds numbers", () => {
    expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });

  it("handles newline", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
