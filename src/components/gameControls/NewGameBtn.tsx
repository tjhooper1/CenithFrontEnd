import "./newGameBtn.css";

interface newGameButtonProps {
  onClick: () => void;
  difficultyName: string;
  difficulty: number;
  btnColor: "green" | "orange" | "red";
}

const NewGameButton: React.FC<newGameButtonProps> = ({
  onClick,
  btnColor,
  difficultyName,
  
}) => {
  return (
    <button className={btnColor} onClick={onClick}>
      {difficultyName}
    </button>
  );
};

export default NewGameButton;
