import React, { useEffect, useState } from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  const [yhat_lower, setYhat_lower] = useState([]);
  const [dates, setDates] = useState([]);
  const get_prediction = async () => {
    const uri = `http://127.0.0.1:8000/${name
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const resp = await fetch(uri);
    const body = await resp.json();

    const Yhat_lower = body["yhat_lower"];
    const Dates = body["ds"];

    setDates(Dates);
    setYhat_lower(Yhat_lower);
    console.log(uri);
    console.log("debug", yhat_lower);
  };

  useEffect(() => {
    get_prediction();
  }, []);
  return (
    <tr className="coin-row">
      <td className="coin">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
      </td>
      <td className="coin-price">{price}</td>
      <td className="coin-volume">{volume.toLocaleString()}</td>

      {priceChange < 0 ? (
        <td className="coin-percent red">{priceChange.toFixed(2)}%</td>
      ) : (
        <td className="coin-percent green">{priceChange.toFixed(2)}%</td>
      )}

      <td className="coin-marketcap">{marketcap.toLocaleString()}</td>

      <td className="coin-price">{Math.round((yhat_lower[0] * 100) / 100)}</td>
      <td className="coin-price">{Math.round((yhat_lower[1] * 100) / 100)}</td>
      <td className="coin-price">{Math.round((yhat_lower[2] * 100) / 100)}</td>
    </tr>
  );
};

export default Coin;
