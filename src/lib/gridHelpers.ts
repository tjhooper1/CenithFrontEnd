import { blankCell, endCell, GridCell, lavaCell, mudCell, speederCell, startCell } from "../types/Grids"

export const buildGrid = (gridSize: number): GridCell[][] => {
    const grid: GridCell[][] = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(blankCell));
    grid[0][0] = startCell;
    grid[gridSize - 1][gridSize - 1] = endCell;

    // we need to add random obstacles to the grid
    for(let y = 0; y < gridSize; y++){
        for(let x = 0; x < gridSize; x++){
            if(grid[y][x].state === 'Start' || grid[y][x].state === 'End'){
                continue;
            }
            // let's get a random number
            const random = Math.random();
            // 10% chance of being a speeder 20% chance of it being Lava. 30% chance of it being mud. Rest is blank
            if(random < 0.1){
                grid[y][x] = speederCell;
            } else if(random < 0.3){
                grid[y][x] = lavaCell;
            } else if(random < 0.6){
                grid[y][x] = mudCell;
            }
        }
    }
    return grid;
}