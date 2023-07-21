import "./dashboard.css";
import Chart from "../components/dashboard/chart";
import { useChart } from "../hooks/useCrypto";
import { predictedData } from "../constants/data";
import Skeleton from "../components/skeleton/Skeleton";
import CurrencyDetails from "../components/dashboard/currenctDetails";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { newData, isLoading, data } = useChart("ETHBUSD", "1m", 50);
  const [disData, setDispData] = useState();
  const [disData2, setDispData2] = useState();

  const lastThreeData = newData?.slice(-5, -2)
  console.log(newData)
  const open = String((Number(lastThreeData[0].y[0]) + Number(lastThreeData[1].y[0]) + Number(lastThreeData[2].y[0])) /3)
  const high = String((Number(lastThreeData[0].y[1]) + Number(lastThreeData[1].y[1]) + Number(lastThreeData[2].y[1])) /3)
  const low = String((Number(lastThreeData[0].y[2]) + Number(lastThreeData[1].y[2]) + Number(lastThreeData[2].y[2])) /3)
  const close = String((Number(lastThreeData[0].y[3]) + Number(lastThreeData[1].y[3]) + Number(lastThreeData[2].y[3])) /3)


console.log({open})
  const predictedCandle = {
    x: new Date(),
    y: [
      open,
      high,
      low,
      close
    ]
}

useEffect(()=>{
  if (newData?.length ){
    setDispData2([...newData,predictedCandle])
  }
},[newData])

  console.log(predictedCandle);
  return (
    <div className="dashboard">
      {isLoading ? (
        <Skeleton type="chart" />
      ) : (
        <>
          <Chart data={disData2} predictedData={predictedData?.reverse()} />
          <CurrencyDetails  data={data?.data?.data} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
