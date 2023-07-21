import { useQuery } from "react-query";
import { api } from "../configurations/axiosInterceptors";
import { serverRoutes } from "../routes/serverRoutes";
import { data, predictedData } from "../constants/data";

const fetchChart = (symbol, interval, limit) => {
  return api(
    `${serverRoutes.FETCH_CHART}?symbol=${symbol}&interval=${interval}&limit=${limit}`
  );
};

export const useChart = (symbol, interval, limit) => {
  const data = useQuery(["chart"], () => fetchChart(symbol, interval, limit), {
    refetchOnWindowFocus: false,
    refetchInterval: 1000,
  });
  const newData = data?.data?.data?.map((chartData) => {
    return {
      x: new Date(chartData[0]),
      y: [chartData[1], chartData[2], chartData[3], chartData[4]],
    };
  });

  return { newData, isLoading: data?.isLoading, data };
};
