"use client"

import React from "react";
import {Line} from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const HistoryGraph: React.FC = async () => {
  const res = await fetch(
    "http://localhost:3000/api/histories"
  );
  const json = await res.json();
  const histories = json.data;

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'History Graph'
      },
    },
  }

  const data: any = {
    labels: histories.map((history) => history.date),
    datasets: [
      {
        label: "test",
        data: histories.map((history) => history.score),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }

  return (
    <>
      <Line options={options} data={data}/>
    </>
  )
}
