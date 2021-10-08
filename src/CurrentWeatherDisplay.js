
function CurrentWeatherDisplay(props){
    const { temp, wind_speed, feels_like, humidity} = props

    return(
        <div className="display">
            <h2> Current temperature {temp}°F</h2>
            <small>Feels like: {feels_like}°F</small><br></br>
            <small>Wind speed: {wind_speed} mph</small><br></br>
            <small>Humidity: {humidity}</small><br></br>

        </div>
    )
}
export default CurrentWeatherDisplay