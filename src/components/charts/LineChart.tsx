import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
import { FiClock } from "react-icons/fi";
import styles from "./Chart.module.scss";

const labels = [
  "Dec",
  "Dec 05",
  "Dec 09",
  "Dec 13",
  "Dec 17",
  "Dec 21",
  "Dec 25",
];
const data = {
  labels,
  datasets: [
    {
      data: [0, 0.1, 0.4, 0.2, 0.5, 0.6, 0.8],
      //   data: [0, 0, 0, 0, 0, 0, 0],
      borderWidth: 3,
      tension: 0,
      pointRadius: 0,
      borderColor: "#2563EB",
    },
  ],
};
const options = {
  responsive: true,
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
      offset: true,
      ticks: {
        font: (ctx: { index: number }) => {
          return {
            size: 9,
            weight: ctx.index === 0 ? 800 : 400,
          };
        },
      },
    },
    y: {
      min: 0,
      max: 1,
      ticks: {
        stepSize: 1,
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
const LineChart = () => {
  return (
    <div className={styles.lineChartContainer}>
      <span className={styles.historyLabel}>
        <FiClock size={18} />
        History - last 30 days
      </span>
      <Line data={data} options={options} height={80} />
    </div>
  );
};

export default LineChart;
