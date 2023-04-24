interface LegendItemProps {
    title: string;
    health: number;
    moves: number;
    className: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ title, health, moves, className }) => {
  return (
    <div className={className}>
      <h3>{`${title}:`}</h3>
      <p>
        {`health - ${health}`}
        <br />
        {`moves - ${moves}`}        
      </p>
    </div>
  );
};

export default LegendItem;
