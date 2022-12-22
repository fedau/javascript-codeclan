const WeatherSelector =({img, city, weather, onClick}) => {
    return(
        <div className="weather">
        <h3>Here is some weather info whilst you are at it</h3>
        <button onClick={onClick} value="Brussels"> Brussels</button>
        <button onClick={onClick} value="Scotland"> Scotland</button>
        <button onClick={onClick} value="Edinburgh"> Edinburgh</button>
        <button onClick={onClick} value="Miami"> Miami</button>
        <button onClick={onClick} value="Pisa"> Pisa</button>
        <h4> in {city} it is currently: </h4>
        <h4> {weather.temperature}</h4>
        <h4> It looks like {weather.description}</h4>
        <h4> The wind goos  {weather.wind} whoojs</h4>
        <img src={img} alt='a picture'/>
        </div>
    )
}

export default WeatherSelector