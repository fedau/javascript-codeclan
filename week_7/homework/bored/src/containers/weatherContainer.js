import {useEffect, useState} from 'react'
import WeatherSelector from '../components/weatherselector';


const WeatherContainer = () => {

    const [weather, setWeather] = useState("");
    const [city, setCity] = useState("")
    const [img, setImg] = useState("")

    const fetchWeather = function(city){
        fetch("https://goweather.herokuapp.com/weather/" + city)
        .then(resp => resp.json())
        .then(data => setWeather(data))
    }

    const handleClickWeatherButton = (event) => {
        setCity(event.target.value)
    }


    useEffect(()=>{
        fetchWeather("")
    },[])

    useEffect(()=>{
        fetchWeather(city)
    },[city])

    useEffect(() => {
        if (weather.description === "Partly cloudy"){
            setImg("https://cdn.dribbble.com/users/198461/screenshots/2445890/media/b65d38c498e198800211af9a7d3a40cb.png?compress=1&resize=800x600&vertical=top")
        }
        else if (weather.description === "Clear" || weather.description === "Sunny") {
            setImg("https://darksky.net/images/weather-icons/clear-day.png")
          }

          else if (weather.description  === "Light drizzle"){
            setImg("https://windy.app//storage/posts/November2021/04-light-rain-weather-symbol-windyapp.jpg")}
          
          else {
            setImg(weather.description )
          }
    },[weather])




    return(
        <>
        <WeatherSelector img={img} city={city} weather={weather} onClick={handleClickWeatherButton}/>
    

        </>
    )


}

export default WeatherContainer