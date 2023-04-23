import { useState } from "react";
import { GridCell } from "../types/Grids";
import { PlayerPosition } from "../types/Player";

// let's make a userPlayer Hook that controls movement and state of the player
export const usePlayer = (initialPosition: PlayerPosition) => {
  const [playerPos, setPlayerPos] = useState<PlayerPosition>(initialPosition);
  const [remainingHealth, setRemainingHealth] = useState<number>(200);
  const [remainingMoves, setRemainingMoves] = useState<number>(450);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // control player movement and update player stats
  function move(dx: number, dy: number, grid: GridCell[][]) {
    const { x, y } = playerPos;
    const gridSize = grid.length;

    // check if player is moving out of bounds
    if (x + dx < 0 || x + dx >= gridSize || y + dy < 0 || y + dy >= gridSize) {
      return;
    }
    const cell = grid[x + dx][y + dy];

    const newRemainingHealth = remainingHealth + cell.health;
    const newRemainingMoves = remainingMoves + cell.moves;
    const newPosition = { x: x + dx, y: y + dy };

    if (playerLost(newRemainingHealth, newRemainingMoves)) {
      setGameOver(true);
    } else if (playerWon(newPosition, gridSize)) {
      setGameWon(true);
    } else {
      setPlayerPos((previousPlayerPosition: PlayerPosition) => ({
        x: previousPlayerPosition.x + dx,
        y: previousPlayerPosition.y + dy,
      }));
      setRemainingHealth(newRemainingHealth);
      setRemainingMoves(newRemainingMoves);
    }
  }

  function resetPlayer() {
    setPlayerPos(initialPosition);
    setRemainingHealth(200);
    setRemainingMoves(450);
    setGameOver(false);
    setGameWon(false);
  }

  function playerWon(playerPos: PlayerPosition, gridSize: number) {
    // if player reaches the last grid cell with health and moves, they win
    const healthAndMovesRemain = remainingHealth > 0 && remainingMoves > 0;
    const onLastCell =
      playerPos.x === gridSize - 1 && playerPos.y === gridSize - 1;

    return healthAndMovesRemain && onLastCell;
  }

  const playerLost = (remainingHealth: number, remainingMoves: number) => {
    return remainingHealth <= 0 || remainingMoves <= 0;
  };

  return {
    playerPos,
    remainingHealth,
    remainingMoves,
    move,
    resetPlayer,
    gameWon,
    gameOver,
  };
};
