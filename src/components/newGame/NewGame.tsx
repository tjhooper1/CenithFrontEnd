import NewGameButton from "../gameControls/NewGameBtn";
import './newGame.css'

interface NewGameProps {
    resetGame: (difficulty: number) => void;
}

const NewGame: React.FC<NewGameProps> = ({ resetGame }) => {
    return (
        <div className="newGameBtns">
        <NewGameButton
          btnColor="green"
          difficultyName="Easy"
          difficulty={5}
          onClick={() => resetGame(5)}
        />
        <NewGameButton
          btnColor="orange"
          difficultyName="Medium"
          difficulty={10}
          onClick={() => resetGame(10)}
        />
        <NewGameButton
          difficulty={20}
          btnColor="red"
          difficultyName="Hard"
          onClick={() => resetGame(20)}
        />
      </div>
    )
}

export default NewGame;