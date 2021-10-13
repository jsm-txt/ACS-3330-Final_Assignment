function DailyWeatherDisplay(props){
  const days = props
  const week_row = [];
  const week_row2 = [];
  

  for ( let x in days){
    if (x < 4) {
      week_row.push(
        <div className="daily-card col-3">
          <heading>Temperature {days[x].temp.day}°F</heading>
          <small>Max {days[x].temp.max}°F</small><br></br>
          <small>Min {days[x].temp.min}°F</small>
          <small>Humidity: {days[x].humidity}</small>
        </div>)
        let utcSeconds = days[x].dt
        let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(utcSeconds);
        let currentTimestamp = d
        //console.log(currentTimestamp); // get current timestamp
        let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
        //console.log(date)
      } else {
      week_row2.push(
        <div className="daily-card col-3">
          <heading>Temperature {days[x].temp.day}°F</heading>
          <small>Max {days[x].temp.max}°F</small><br></br>
          <small>Min {days[x].temp.min}°F</small>
          <small>Humidity: {days[x].humidity}</small>
        </div>)
        let utcSeconds = days[x].dt
        let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(utcSeconds);
        let currentTimestamp = d
        
        let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
        //console.log(date)
      }

  }

  return(
    <div className="container-fluid">
      <h3> 8 Day Week</h3>
      <div className="row">
        {week_row}
      </div>
      <div className="row">
        {week_row2}
      </div>
    </div>
      
  )
}
export default DailyWeatherDisplay