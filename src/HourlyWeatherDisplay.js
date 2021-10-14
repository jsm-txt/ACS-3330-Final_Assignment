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

  return (
    <div className="container-fluid p-4">
      <div className="title col-4 p-3 m-auto">
        <h3> 48 Hour</h3>
      </div>
      {hourly}
    </div>

  )
}
export default DailyWeatherDisplay