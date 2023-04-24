import LegendItem from "./LegendItem";
import "./legend.css";

const Legend: React.FC = () => {
  return (
    <div className="UIContainer__legend">
      <LegendItem title="Blank" health={0} moves={1} className="blankLegend" />
      <LegendItem title="Mud" health={10} moves={5} className="mudLegend" />
      <LegendItem title="Lava" health={50} moves={10} className="lavaLegend" />
      <LegendItem
        title="Speeder"
        health={5}
        moves={0}
        className="speederLegend"
      />
    </div>
  );
};

export default Legend;
