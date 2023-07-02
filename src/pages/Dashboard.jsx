import "./dashboard.css";
import Chart from "../components/dashboard/chart";
import { useChart } from "../hooks/useCrypto";
import { predictedData } from "../constants/data";
import Skeleton from "../components/skeleton/Skeleton";

const Dashboard = () => {
  const { data, isLoading } = useChart();

  return (
    <div className="dashboard">
      {true ? (
        <Skeleton type="chart" />
      ) : (
        <Chart data={data} predictedData={predictedData?.reverse()} />
      )}
    </div>
  );
};

export default Dashboard;
