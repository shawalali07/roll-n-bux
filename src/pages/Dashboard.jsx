import "./dashboard.css";
import Chart from "../components/dashboard/chart";
import { useChart } from "../hooks/useCrypto";
import { predictedData } from "../constants/data";
import Skeleton from "../components/skeleton/Skeleton";
import CurrencyDetails from "../components/dashboard/currenctDetails";

const Dashboard = () => {
  const { newData, isLoading } = useChart("ETHBUSD", "5m", 50);
  console.log(newData);
  return (
    <div className="dashboard">
      {isLoading ? (
        <Skeleton type="chart" />
      ) : (
        <>
          <Chart data={newData} predictedData={predictedData?.reverse()} />
          <CurrencyDetails />
        </>
      )}
    </div>
  );
};

export default Dashboard;
