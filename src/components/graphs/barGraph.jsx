import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

function BarGraph() {
  const data = {
    labels: ["Téléphone", "Lampe connectée", "Voiture", "Montre"],
    datasets: [
      {
        label: "Nombre d'objets IOT",
        data: ["25", "21", "24", "13"],
        backgroundColor: ["red"],
      },
    ],
  };

  return <Bar data={data} />;
}

export default BarGraph;
