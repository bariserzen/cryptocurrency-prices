import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Coin from "./components/Coin";
import Navigation from "./components/Navigation";

const  App = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false")
    .then(response => {
      setCoins(response.data);
    }).catch(error => console.log(error));
  },[]);

  const handleChange = (event) =>{
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )



  return (
   <div className="coin-app">

    <div className="coin-search">

      <h1 className="coin-text">Search a currency</h1>

      <form>
        <input 
        type="text" 
        placeholder="Search" 
        className="coin-input"
        onChange={handleChange}
        ></input>
      </form>

    </div>

    <Navigation/>
    
    {filteredCoins.map(coin => {
      return (
        <Coin 
        key={coin.id}
        name={coin.name}
        image={coin.image}
        symbol={coin.symbol}
        price={coin.current_price}
        marketcap={coin.market_cap}
        priceChange={coin.price_change_percentage_24h}
        volume={coin.total_volume}
        />
      )
    })}

   </div>
  )
};

export default App;