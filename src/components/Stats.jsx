import "./Stats.css";
import BarGraph from "../components/graphs/barGraph";
import LineGraph from "../components/graphs/lineGraph";

function Stats() {
  return (
    <div className="main">
      <div className="contanier_graph">
        <BarGraph width={50}></BarGraph>
        <LineGraph width={100}></LineGraph>
      </div>
    </div>
  );
}

export default Stats;
