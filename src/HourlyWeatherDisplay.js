function DailyWeatherDisplay(props){
  const hours = props
  const hourly_row = [];
  const hourly_row2 = [];
  let date = 0

  for (let x in hours){
    let utcSeconds = hours[x].dt
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    let currentTimestamp = d
    //console.log(currentTimestamp); // get current timestamp
    date = new Intl.DateTimeFormat('en-US',
    { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(currentTimestamp)

    if (x < 24) {
      hourly_row.push(
        <div className="hour-display">
          <div className="hourly"> {date} | {hours[x].temp}°F</div>
          <p>Feels like: {hours[x].feels_like}°F | 
          Wind Speed: {hours[x].wind_speed} mph | 
          Humidity: {hours[x].humidity}</p>
          <hr></hr>
        </div>
      )
    } else {
      hourly_row2.push(
        <div className="hour-display">
          <div className="hourly pb-0 mb-0"> {date} | {hours[x].temp}°F</div>
          <p>Feels like: {hours[x].feels_like}°F | 
          Wind Speed: {hours[x].wind_speed} mph | 
          Humidity: {hours[x].humidity}</p>
          <hr></hr>
        </div>
      )
    }
  }

  return (
    <div className="container-fluid p-4 ">
      <div className="title col-4 p-3 m-auto">
        <h3> 48 Hour</h3>
      </div>
      <div className="row pt-4 justify-content-evenly">
        <div className="hour-row col-5">
          <h3 className="p-3"> First 24 hours </h3>
          {hourly_row}
        </div>
        <div className="hour-row2 col-5">
          <h3 className="p-3" > Next 48 hours </h3>
          {hourly_row2}
        </div>
      </div>
    </div>

  )
}
export default DailyWeatherDisplay