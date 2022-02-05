import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Pareto",
      yAxisID: "B",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [50, 55, 60, 65, 70, 80, 90, 100],
    },
    {
      type: "bar",
      label: "Complaints",
      yAxisID: "A",
      backgroundColor: "rgb(75, 192, 192)",
      data: [755, 222, 151, 86, 72, 51, 36, 10],
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },

  scales: {
    A: {
      type: "linear",
      position: "left",
      scalePositionLeft: true,
      ticks: {
        beginAtZero: true,
        fontSize: 20,
        min: 0,
        max: 900,
        stepSize: 300,
      },
    },
    B: {
      id: "B",
      type: "linear",
      position: "right",
      scalePositionLeft: false,
      ticks: {
        fontSize: 20,
        suggestedMin: 0,
        suggestedMax: 100,
        stepSize: 40,
        callback: function (value) {
          return value + "%";
        },
        beginAtZero: true,
      },
    },
  },
};
export default function App() {
  return (
    <div style={{ width: "500px" }}>
      <Chart data={data} height={20} width={20} options={options} />
    </div>
  );
}
