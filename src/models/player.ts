import { GridCell } from "../types/Grids";
import { PlayerPosition } from "../types/Player";

export class Player {
    private position: PlayerPosition;
    private health: number;
    private moves: number;

    constructor(x: number = 0, y: number = 0) {
        this.position = {x, y};
        this.health = 200;
        this.moves = 450;
    }

    public getPosition(): PlayerPosition {
        return this.position;
    }

    public setPosition(position: PlayerPosition): void {
        this.position = position;
    }

    public getHealth(): number {
        return this.health;
    }

    public setHealth(health: number): void {
        this.health = health;
    }

    public getMoves(): number {
        return this.moves;
    }

    public setMoves(moves: number): void {
        this.moves = moves;
    }

    public move(dx: number, dy: number, grid: GridCell[][]): void {
        const { x, y } = this.position;
        const gridSize = grid.length;
        if (x + dx >= 0 && x + dx < gridSize && y + dy >= 0 && y + dy < gridSize) {            
            const cell = grid[y + dy][x + dx];
            this.position = { x: x + dx, y: y + dy };
            this.health += cell.health;
            this.moves += cell.moves;
        }
    }
}