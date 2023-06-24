export const options = {
  chart: {
    type: "candlestick",
    height: 350,
    background: "beige",
  },
  title: {
    text: "CandleStick Chart",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        const options = { month: "long", day: "numeric" };
        return new Date(value)?.toLocaleString("en-US", options);
      },
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#00B746",
        downward: "#EF403C",
      },
    },
  },
  theme: {
    monochrome: {
      color: {
        upword: {
          ranges: [],
        },
      },
    },
  },
};
