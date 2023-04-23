import { useEffect, useState } from "react";
import GridBoard from "./components/gridBoard/GridBoard";
import { usePlayer } from "./hooks/usePlayer";
import { buildGrid } from "./lib/gridHelpers";

import "./App.css";

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
    console.log(e.key);
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

  console.log("lets check", gameOver);

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
          <div className="UIContainer">
            <h1>Health: {remainingHealth}</h1>
            <h1>Remaining Moves: {remainingMoves}</h1>
            <h2>New Game:</h2>
            <div className="newGame">
              <button onClick={() => resetGame(5)}>Easy</button>
              <button onClick={() => resetGame(10)}>Medium</button>
              <button onClick={() => resetGame(20)}>Hard</button>
            </div>
          </div>
          <GridBoard grid={grid} PlayerPos={playerPos} />
        </>
      );
    } else if (gameWon) {
      return (
        <>
          <h1>You Won!</h1>
          <h2>New Game:</h2>
          <div className="newGame__lostScreen">
            <button onClick={() => resetGame(5)}>Easy</button>
            <button onClick={() => resetGame(10)}>Medium</button>
            <button onClick={() => resetGame(20)}>Hard</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1>You Lost!</h1>
          <h2>New Game:</h2>
          <div className="newGame__lostScreen">
            <button onClick={() => resetGame(5)}>Easy</button>
            <button onClick={() => resetGame(10)}>Medium</button>
            <button onClick={() => resetGame(20)}>Hard</button>
          </div>
        </>
      );
    }
  }

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
