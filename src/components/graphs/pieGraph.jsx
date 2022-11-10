import React from "react";
import { PolarArea } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

function BarGraph() {
  const data = {
    labels: ["IOS", "Android", "Chrome", "Spider", "Home"],
    datasets: [
      {
        label: "Support",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea data={data} />;
}

export default BarGraph;
