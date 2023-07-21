import "./details.css";

const CurrencyDetails = () => {
  return (
    <div className="currencyDetails">
      <h1>Currency Data</h1>

      <table class="crypto-table">
        <tr>
          <th>Statistics</th>
          <th>Ethereum / Bitcoin</th>
        </tr>
        <tr>
          <td>24h Volume ETH</td>
          <td>20,536.37</td>
        </tr>
        <tr>
          <td>24h Volume BTC</td>
          <td>1,280.56</td>
        </tr>
        <tr>
          <td>24h high</td>
          <td>0.06288</td>
        </tr>
        <tr>
          <td>24h Low</td>
          <td>0.06198</td>
        </tr>
        <tr>
          <td>Large Orders</td>
          <td>3,422,4284</td>
        </tr>
        <tr>
          <td>Medium Orders</td>
          <td>1,039,8732</td>
        </tr>
        <tr>
          <td>Small Orders</td>
          <td>1,591.188</td>
        </tr>
      </table>
    </div>
  );
};

export default CurrencyDetails;
