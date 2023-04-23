import NewGame from "../../newGame/NewGame";
import "./gameOver.css";

interface GameOverProps {
  title: string;
  resetGame: (difficulty: number) => void;
}

const GameOver: React.FC<GameOverProps> = ({ title, resetGame }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>New Game:</h2>
      <NewGame resetGame={resetGame}/>
    </>
  );
};

export default GameOver;
