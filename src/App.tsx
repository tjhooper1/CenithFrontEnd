import { useState } from "react";
import "./App.css";
import GridBoard from "./components/gridBoard/GridBoard";
import { buildGrid } from "./lib/gridHelpers";
import { PlayerPosition } from "./types/Player";

function App() {
  const [playerPos, setPlayerPos] = useState<PlayerPosition>({ x: 0, y: 0 });
  const [health, sethealth] = useState(200);
  const [moves, setMoves] = useState(450);

  const grid = buildGrid(100);

  console.log(grid);

  return (
    <div className="App">
      <GridBoard grid={grid} PlayerPos={playerPos} />
    </div>
  );
}

export default App;
