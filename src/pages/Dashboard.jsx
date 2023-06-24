import "./dashboard.css";
import Chart from "../components/dashboard/chart";
import { useChart } from "../hooks/useCrypto";
import { predictedData } from "../constants/data";

const Dashboard = () => {
  const { data, isLoading } = useChart();
  return (
    <div className="dashboard">
      <Chart data={data?.reverse()} predictedData={predictedData?.reverse()} />
    </div>
  );
};

export default Dashboard;
