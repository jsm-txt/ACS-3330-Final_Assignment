function CurrentWeatherDisplay(props){
    const { temp, wind_speed, feels_like, humidity} = props

    return(
        <div className="current-display col-5">
            <h1>  {temp}°F</h1>
            <div className="text">
                <small>Feels like: {feels_like}°F</small>
                <small>Wind speed: {wind_speed} mph</small>
                <small>Humidity: {humidity}</small>
            </div>

        </div>
    )
}
export default CurrentWeatherDisplay