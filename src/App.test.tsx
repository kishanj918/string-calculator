import { describe, it, expect } from "vitest";
import add from "./add";

describe("String Calculator", () => {
  it("return 0 if empty string", () => {
    expect(add("")).toBe(0);
  });
});
