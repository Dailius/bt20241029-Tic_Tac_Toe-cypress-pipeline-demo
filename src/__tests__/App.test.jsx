import { describe, it, expect } from "vitest";
import { calculateWinner } from "../App";

describe("calculateWinner function", () => {
  it("returns 'X' when X wins horizontally", () => {
    const board = ["X", "X", "X", null, null, null, null, null, null];
    expect(calculateWinner(board)).toBe("X");
  });

  it("returns 'O' when O wins vertically", () => {
    const board = ["O", null, null, "O", null, null, "O", null, null];
    expect(calculateWinner(board)).toBe("O");
  });

  it("returns 'X' when X wins diagonally", () => {
    const board = ["X", null, null, null, "X", null, null, null, "X"];
    expect(calculateWinner(board)).toBe("X");
  });

  it("returns null when there is no winner", () => {
    const board = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    expect(calculateWinner(board)).toBe(null);
  });

  it("returns null for an empty board", () => {
    const board = Array(9).fill(null);
    expect(calculateWinner(board)).toBe(null);
  });
});
