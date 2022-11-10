import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

function BarGraph() {
  const data = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Nombre d'objets IOT depuis 2015",
        data: ["2500", "2650", "2800", "3000", "3500", "5000", "7000", "8800"],
        backgroundColor: ["red"],
      },
    ],
  };

  return <Line data={data} />;
}

export default BarGraph;
