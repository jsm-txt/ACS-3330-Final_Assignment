function CurrentWeatherDisplay(props){
    const { temp, feels_like,
        description,
        city,
        wind } = props

    return(
        
        <div className="current-display col-5 m-auto">
            <h1>  {temp}°F</h1>
            <div className="text">
                <h3>City: {city}</h3>
                <small>Feels like: {feels_like}°F</small>
                <small>Wind speed: {wind} mph</small>
                <small>{description}</small>
            </div>
        </div>
    )
}
export default CurrentWeatherDisplay