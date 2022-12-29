import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';
import './CountriesContainer.css';


const CountryContainer = () => {
    const [allCountries, setAllCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    getCountries();

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => {
            setAllCountries(countries)
        })
    }

    const onCountryClicked = function(country) {
        setSelectedCountry(country);
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }
    const evaluateAnswer = (element) => {
        // compare of element === countries.capitol
        // set var to show winning true or lost
    }

    return (
        <div className="main-container">
            {/* <CountryList countries={countries.name} onCountryClicked={onCountryClicked}/> */}
            {/* <CountrySelector countries={countries} onCountrySelected={onCountrySelected} /> */}
            {/* {selectedCountry ? <CountryDetail country={selectedCountry}/> : null} */}
            <div>{{country.name.common}}</div>
            capitol.forEach(element => {
                <button onClick={evaluateAnswer(element, country)} >element</button>
            });
        </div>
    )
}

export default CountryContainer;
