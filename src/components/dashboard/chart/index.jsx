import "./chart.css";
import ReactApexChart from "react-apexcharts";
import { options } from "../../../constants/chartOptions";

const Chart = ({ data, predictedData }) => {
  const series = [{ data }];

  const chartOptions = {
    ...options,
    plotOptions: {
      ...options.plotOptions,
      candlestick: {
        ...options.plotOptions.candlestick,
        colors: {
          ...options.plotOptions.candlestick.colors,
          upward: "#00B746",
          downward: "#EF403C",
        },
      },
    },
    legend: {
      markers: {
        fillColors: ["#00ff00", "#0000ff"],
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="candlestick"
        height={350}
      />
      <div className="btn-container">
        <button>Bot Trade</button>
        <button className="audio">Reject Bot</button>
      </div>
    </div>
  );
};

export default Chart;
