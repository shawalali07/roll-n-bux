import "./dashboard.css";
import Chart from "../components/dashboard/chart";
import { useChart } from "../hooks/useCrypto";
import { predictedData } from "../constants/data";
import Skeleton from "../components/skeleton/Skeleton";
import CurrencyDetails from "../components/dashboard/currenctDetails";

const Dashboard = () => {
  const { data, isLoading } = useChart();

  return (
    <div className="dashboard">
      {isLoading ? (
        <Skeleton type="chart" />
      ) : (
        <>
        <Chart data={data} predictedData={predictedData?.reverse()} />
        <CurrencyDetails/>
        </>
      )}
    </div>
  );
};

export default Dashboard;
