import Legend from "../../legend/Legend";
import NewGame from "../../newGame/NewGame";
import "./currentGame.css";

interface CurrentGameProps {
  remainingHealth: number;
  remainingMoves: number;
  resetGame: (difficulty: number) => void;
}

const CurrentGame: React.FC<CurrentGameProps> = ({
  remainingHealth,
  remainingMoves,
  resetGame,
}) => {
  return (
    <div className="UIContainer">
      <Legend />
      <h1>Health: {remainingHealth}</h1>
      <h1>Remaining Moves: {remainingMoves}</h1>
      <h2>New Game:</h2>
      <NewGame resetGame={resetGame} />
    </div>
  );
};

export default CurrentGame;
