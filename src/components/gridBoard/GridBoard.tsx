import classNames from "classnames";
import { GridCell } from "../../types/Grids";
import { PlayerPosition } from "../../types/Player";

import './gridBoard.css'

interface GridBoardProps {
  grid: GridCell[][];
  PlayerPos: PlayerPosition;
}

const GridBoard: React.FC<GridBoardProps> = ({ grid, PlayerPos }) => {

  const gridCellIsCurrentPlayerPosition = (x: number, y: number) => {
    return x === PlayerPos.x && y === PlayerPos.y;
  };

  const classToAddToCell = (x: number, y: number) => {
    const currentCellState = grid[x][y].state;
    const classes:string[] = ["cell", currentCellState]
    gridCellIsCurrentPlayerPosition(x, y) && classes.push("playerCell");
    return classNames(classes);
  };

  return (
    <div className="grid">
      {grid.map((row, x) => (
        <div key={x}>
          {row.map((cell, y) => (
            <div key={`${x},${y}`} className={classToAddToCell(x, y)}>
              {x === PlayerPos.x && y === PlayerPos.y ? "P" : cell.state}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridBoard;
