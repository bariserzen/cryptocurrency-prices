import React from 'react';
import "./Navigation.css";

const Navigation = (props) => {

  return (
    <nav className='nav'>
        <ul className='list'>
            <li className='coin'>Coin</li>
            <li>Price</li>
            <li>24H Volume</li>
            <li>24H </li>
            <li>Total Marketcap</li>
        </ul>
    </nav>
      
  )
}

export default Navigation;
