import "./Stats.css";
import BarGraph from "../components/graphs/barGraph";
import LineGraph from "../components/graphs/lineGraph";
import PieGraph from "../components/graphs/pieGraph";
import DoughnutGraph from "../components/graphs/doughnutGraph";
import { useRef, useState } from "react";
import { signup, logout, login, useAuth } from "../firebase";

function Stats() {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Logout error.");
    }
    window.location.href = "/";
    setLoading(false);
  }

  return (
    <div className="main container_graphs">
      <div className="container_graph1">
        <div className="logout_container">
          <button onClick={handleLogout}>Se déconnecter</button>
          <a href="/home">
            <button>Map</button>
          </a>
        </div>
        <div className="chart_container">
          <BarGraph></BarGraph>
        </div>
        <div className="chart_container">
          <LineGraph></LineGraph>
        </div>
      </div>
      <div className="container_graph2">
        <div className="chart_container2">
          <PieGraph></PieGraph>
        </div>
        <div className="chart_container2">
          <DoughnutGraph></DoughnutGraph>
        </div>
      </div>
    </div>
  );
}

export default Stats;
