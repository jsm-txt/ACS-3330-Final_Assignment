function DailyWeatherDisplay(props){
  const hours = props
  const hourly = [];

  for ( let x in hours){
    hourly.push(
      <div className="daily-display">
          <heading>Temperature {hours[x].temp}°F</heading>
          <small>Feels like: {hours[x].feels_like}°F</small><br></br>
          <small>Wind Speed: {hours[x].wind_speed} mph</small>
          <small>Humidity: {hours[x].humidity}</small>
      </div>
    )
  }

  return(
    <div>
      48 Hour display
      {hourly}
    </div>
      
  )
}
export default DailyWeatherDisplay