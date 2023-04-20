import { GridCell } from "../types/Grids";
import { Direction, Player } from "../types/Player";

export const movePlayer = (player: Player, direction: Direction, grid: GridCell[][]): Player => {
    const { x, y } = player.position;
    const { health, moves } = player;
    const gridSize = grid.length;
    let newPlayer = { ...player };
    switch (direction) {
        case 'up':
            if (y > 0) {
                const cell = grid[y - 1][x];
                newPlayer = {
                    ...newPlayer,
                    position: { x, y: y - 1 },
                    health: health + cell.health,
                    moves: moves + cell.moves
                }
            }
            break;
        case 'down':
            if (y < gridSize - 1) {
                const cell = grid[y + 1][x];
                newPlayer = {
                    ...newPlayer,
                    position: { x, y: y + 1 },
                    health: health + cell.health,
                    moves: moves + cell.moves
                }
            }
            break;
        case 'left':
            if (x > 0) {
                const cell = grid[y][x - 1];
                newPlayer = {
                    ...newPlayer,
                    position: { x: x - 1, y },
                    health: health + cell.health,
                    moves: moves + cell.moves
                }
            }
            break;
        case 'right':
            if (x < gridSize - 1) {
                const cell = grid[y][x + 1];
                newPlayer = {
                    ...newPlayer,
                    position: { x: x + 1, y },
                    health: health + cell.health,
                    moves: moves + cell.moves
                }
            }
            break;
        default:
            break;
    }
    return newPlayer;
}