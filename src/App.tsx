import { useEffect, useState } from "react";
import GridBoard from "./components/gridBoard/GridBoard";
import GameOver from "./components/screens/gameOver/GameOver";
import CurrentGame from "./components/screens/currentGame/CurrentGame";
import { usePlayer } from "./hooks/usePlayer";
import { buildGrid } from "./lib/gridHelpers";

import "./app.css";

function App() {
  const {
    remainingHealth,
    remainingMoves,
    move,
    playerPos,
    resetPlayer,
    gameWon,
    gameOver,
  } = usePlayer({
    x: 0,
    y: 0,
  });
  const [grid, setGrid] = useState(buildGrid(20));

  // onKeyDownListener for player movement
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        move(-1, 0, grid);
        break;
      case "ArrowRight":
        e.preventDefault();
        move(1, 0, grid);
        break;
      case "ArrowUp":
        e.preventDefault();
        move(0, -1, grid);
        break;
      case "ArrowDown":
        e.preventDefault();
        move(0, 1, grid);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  function resetGame(difficulty: number): void {
    setGrid(buildGrid(difficulty));
    resetPlayer();
  }

  function renderScreen() {
    if (!gameOver && !gameWon) {
      return (
        <>
          <CurrentGame
            remainingHealth={remainingHealth}
            remainingMoves={remainingMoves}
            resetGame={resetGame}
          />
          <GridBoard grid={grid} PlayerPos={playerPos} />
        </>
      );
    } else if (gameWon) {
      return <GameOver title="You Won!" resetGame={resetGame} />;
    } else {
      return <GameOver title="You Lost!" resetGame={resetGame} />;
    }
  }

  return <div className="App">{renderScreen()}</div>;
}

export default App;
