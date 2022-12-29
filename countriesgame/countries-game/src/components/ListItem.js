import React from 'react';
import CountryDetail from './CountryDetail';
import './ListItem.css';

const ListItem = ({country, onCountryClicked}) => {

  const handleClick = function() {
    console.log(`Clicked on ${country.capital}`);
      onCountryClicked(country);
    // onCountryClicked(country);
  }

  return (
    <>
    {/* <CountryDetail/> */}
    <li onClick={handleClick} className="clickable-li">{country.name.common}</li>
    <span>you clicked on {country.capital}</span>
    </>
  )
}

export default ListItem;