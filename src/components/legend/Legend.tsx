import "./legend.css";

const Legend: React.FC = () => {
  return (
    <div className="UIContainer__legend">
      <div className="blankLegend">
        <h3>Blank:</h3>
        <p>
          health - 0
          <br />
          moves - 1
        </p>
      </div>
      <div className="mudLegend">
        <h3>Mud:</h3>
        <p>
          health - 10
          <br />
          moves - 0
        </p>
      </div>
      <div className="lavaLegend">
        <h3>Lava:</h3>
        <p>
          health - 50
          <br />
          moves - 10
        </p>
      </div>
      <div className="speederLegend">
        <h3>Speeder:</h3>
        <p>
          health - 5
          <br />
          moves - 0
        </p>
      </div>
    </div>
  );
};

export default Legend;
