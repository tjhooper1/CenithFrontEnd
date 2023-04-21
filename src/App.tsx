import { useState } from "react";
// import "./App.css";
import GridBoard from "./components/gridBoard/GridBoard";
import { buildGrid } from "./lib/gridHelpers";
import { movePlayer } from "./lib/playerHelpers";
import { Player } from "./models/player";
import { blankCell } from "./types/Grids";
import { PlayerPosition } from "./types/Player";

function App() {
  const [player, setPlayer] = useState<Player>(new Player())
  const grid = buildGrid(10);

  // onKeyDownListener for player movement
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key)
    switch(e.key){
      case "ArrowLeft":
        setPlayer((prevPlayer) => {
          const newPlayer = new Player(prevPlayer.getPosition().x + -1, prevPlayer.getPosition().y + 0);
          return newPlayer;
        });
        break;
      case "ArrowRight":
        setPlayer((prevPlayer) => {
          const newPlayer = new Player(prevPlayer.getPosition().x + 1, prevPlayer.getPosition().y + 0);
          return newPlayer;
        })
        break;
      case "ArrowUp":
        setPlayer((prevPlayer) => {
          const newPlayer = new Player(prevPlayer.getPosition().x + 0, prevPlayer.getPosition().y + -1);
          return newPlayer;
        })
        break;
      case "ArrowDown":
        setPlayer((prevPlayer) => {
          const newPlayer = new Player(prevPlayer.getPosition().x + 0, prevPlayer.getPosition().y + 1);
          return newPlayer;
        })
        break;
      default:
        break;
    }
  }

  console.log("lets check", player)
  
  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex={0}>
      <GridBoard grid={grid} PlayerPos={player.getPosition()} />
    </div>
  );
}

export default App;
