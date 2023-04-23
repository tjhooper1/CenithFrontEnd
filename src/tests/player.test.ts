import { describe, it, beforeEach, expect } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import { usePlayer } from "../hooks/usePlayer";
import { GridCell } from "../types/Grids";
import { PlayerPosition } from "../types/Player";

describe("usePlayer", () => {
  let grid: GridCell[][];
  const initialPosition = { x: 0, y: 0 };

  beforeEach(() => {
    // Define your grid size and initialize with default values
    const gridSize = 5;
    const defaultCell: GridCell = {
      state: "Blank",
      health: 0,
      moves: -1,
    };

    grid = new Array(gridSize)
      .fill(null)
      .map(() => new Array(gridSize).fill(defaultCell));

    grid[1][0] = { state: "Mud", health: -10, moves: -5 };
    grid[2][0] = { state: "Mud", health: -10, moves: -5 };
  });

  it("should initialize player position and stats", () => {
    const { result } = renderHook(() => usePlayer(initialPosition));

    expect(result.current.playerPos).toEqual(initialPosition);
    expect(result.current.remainingHealth).toEqual(100);
    expect(result.current.remainingMoves).toEqual(250);
    expect(result.current.gameOver).toEqual(false);
    expect(result.current.gameWon).toEqual(false);
  });

  it("should move player to the right", () => {
    const { result } = renderHook(() => usePlayer(initialPosition));

    act(() => {
      result.current.move(1, 0, grid);
    });

    expect(result.current.playerPos).toEqual({ x: 1, y: 0 });
    expect(result.current.remainingHealth).toEqual(90);
    expect(result.current.remainingMoves).toEqual(245);
    expect(result.current.gameOver).toEqual(false);
    expect(result.current.gameWon).toEqual(false);
  });

  it("should not let player go out of bounds", () => {
    const { result } = renderHook(() => usePlayer(initialPosition));
    act(() => {
      result.current.move(-1, 0, grid);
    });

    expect(result.current.playerPos).toEqual({ x: 0, y: 0 });
  });
});
