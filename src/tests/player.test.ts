import { movePlayer } from "../lib/playerHelpers";
import { GridCell } from "../types/Grids";
import { Player } from "../types/Player";
import { describe, it, beforeEach, expect } from 'vitest';

describe("movePlayer", () => {
  let grid: GridCell[][];
  let player: Player;

  beforeEach(() => {
    player = {position: {x: 1, y: 1}, health: 100, moves: 100}
    // 3x3 grid with player at start
    grid = [
      [
        { state: "Start", health: 0, moves: 0 },
        { state: "Speeder", health: -5, moves: 0 },
        { state: "Lava", health: -50, moves: -10 },
      ],
      [
        { state: "Speeder", health: -5, moves: 0 },
        { state: "Lava", health: -50, moves: -10 },
        { state: "Lava", health: -50, moves: -10 },
      ],
      [
        { state: "Lava", health: -50, moves: -10 },
        { state: "Lava", health: -50, moves: -10 },
        { state: "End", health: 0, moves: 0 },
      ],
    ];
  });

    it("should move player up", () => {
        const newPlayer = movePlayer(player, "up", grid);
        expect(newPlayer).toEqual({
            position: {x: 1, y: 0},
            health: 95,
            moves: 100
        });
    });
});
