import { useQuery } from "react-query";
import { api } from "../configurations/axiosInterceptors";
import { serverRoutes } from "../routes/serverRoutes";
import { data, predictedData } from "../constants/data";

const fetchChart = () => {
  return api(serverRoutes.FETCH_CHART);
};

export const useChart = () => {
  //   return useQuery(["chart"], fetchChart);
  return { data, predictedData, isLoading: false };
};
