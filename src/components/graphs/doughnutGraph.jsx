import React from "react";
import { Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

function BarGraph() {
  const data = {
    labels: ["Voiture", "Maison", "Jardin", "Bureau", "Commerces"],
    datasets: [
      {
        label: "# of Votes",
        data: [18, 9, 23, 15, 2, 33],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default BarGraph;
