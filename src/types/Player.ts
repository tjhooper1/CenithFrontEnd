export type PlayerPosition = {
    x: number;
    y: number;
};

export type Player = {
    position: PlayerPosition;
    health: number;
    moves: number;
}

export type Direction = 'up' | 'down' | 'left' | 'right';
