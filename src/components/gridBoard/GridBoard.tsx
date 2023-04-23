import { buildGrid } from "../../lib/gridHelpers";
import { GridCell } from "../../types/Grids";
import { PlayerPosition } from "../../types/Player";
import './gridBoard.css'

interface GridBoardProps {
  grid: GridCell[][];
  PlayerPos: PlayerPosition;
}

const GridBoard: React.FC<GridBoardProps> = ({ grid, PlayerPos }) => {
  return (
    <div className="grid">
      {grid.map((row, x) => (
        <div key={x}>
          {row.map((cell, y) => (
            <div key={`${x},${y}`} className="cell">
              {x === PlayerPos.x && y === PlayerPos.y ? "P" : cell.state}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridBoard;
