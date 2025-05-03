import { describe, expect, it } from "vitest";
import { factorial } from "./factorial";

describe("Factorial", () => {
    it("should return correct factorial of a number", () => {
        const arg = 5;
        const result = 120;

        expect(factorial(arg)).toBe(result);
    });

    it("should return -1 when arg is lower than 0", () => {
        const arg = -12;
        const result = -1;

        expect(factorial(arg)).toBe(result);
    });
});
