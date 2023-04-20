export type GridState = "Blank" | "Speeder" | "Lava" | "Mud" | "Start" | "End";

export interface GridCell {
    state: GridState;
    health: number;
    moves: number;
}

export const blankCell: GridCell = {
    state: "Blank",
    health: 0,
    moves: -1
};

export const speederCell: GridCell = {
    state: "Speeder",
    health: -5,
    moves: 0
};

export const lavaCell: GridCell = {
    state: "Lava",
    health: -50,
    moves: -10
};

export const mudCell: GridCell = {
    state: "Mud",
    health: -10,
    moves: -5
};

export const startCell: GridCell = {
    state: "Start",
    health: 0,
    moves: 0
};

export const endCell: GridCell = {
    state: "End",
    health: 0,
    moves: 0
};
