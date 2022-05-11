import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import "./Coin";
import Coin from "./Coin";

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&ids=binance-usd%2Cbitcoin%2Ccardano%2Cethereum%2Clitecoin%2Cpolkadot%2Csolana%2Cterra-luna%2Ctether%2Cxrp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      <table className="coin-container">
        <tr className="coin-row">
          <td className="coin">Currency</td>
          <td className="coin-price">Price</td>
          <td className="coin-volume">Volume</td>
          <td className="coin-percent">Percent</td>
          <td className="coin-marketcap">Market Cap</td>
          <td className="coin-1d">1D</td>
          <td className="coin-2d">2D</td>
          <td className="coin-3d">3D</td>
        </tr>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </table>
    </div>
  );
}

export default Home;
