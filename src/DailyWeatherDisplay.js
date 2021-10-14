function DailyWeatherDisplay(props) {
  let days = props
  const week_row = [];
  const week_row2 = [];
  let date = 0

  for (let x in days) {
    //for (let x = 1; x < 8; x++) {
    let utcSeconds = days[x].dt
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    let currentTimestamp = d
    //console.log(currentTimestamp); // get current timestamp
    date = new Intl.DateTimeFormat('en-US',
      { month: '2-digit', day: '2-digit' }).format(currentTimestamp)
    if (x > 0) {
      if (x < 5) {
        if (x % 2) {
          week_row.push(
            <div className="daily-card col-2">
              <h3> {date} </h3>
              <div className="daily-content">
                <h4> {days[x].temp.day}°F</h4>
                <small>Max {days[x].temp.max}°F</small>
                <small>Min {days[x].temp.min}°F</small>
                <small>Humidity: {days[x].humidity}</small>
                
              </div>
            </div>
          )
        } else {
          week_row.push(
            <div className="daily-card2 col-2">
              <h2> {date} </h2>
              <div className="daily-content">
                <h4> {days[x].temp.day}°F</h4>
                <small>Max {days[x].temp.max}°F</small>
                <small>Min {days[x].temp.min}°F</small>
                <small>Humidity: {days[x].humidity}</small>
                
              </div>
            </div>
          )
        }
      } else {
        if (x % 2) {
          week_row2.push(
            <div className="daily-card col-2">
              <h3> {date} </h3>
              <div className="daily-content">
                <h4> {days[x].temp.day}°F</h4>
                <small>Max {days[x].temp.max}°F</small>
                <small>Min {days[x].temp.min}°F</small>
                <small>Humidity: {days[x].humidity}</small>
                
              </div>
            </div>
          )
        } else {
          week_row2.push(
            <div className="daily-card2 col-2">
              <h3> {date} </h3>
              <div className="daily-content">
                <h4> {days[x].temp.day}°F</h4>
                <small>Max {days[x].temp.max}°F</small>
                <small>Min {days[x].temp.min}°F</small>
                <small>Humidity: {days[x].humidity}</small>
              </div>
            </div>)
        }
      }
    }
  }

  return (
    <div className="container-fluid p-4">
      <div className="title col-4 p-3 m-auto">
        <h3> 7 Day Week</h3>
      </div>

      <div className="row pb-3 pt-4 justify-content-evenly">
        {week_row}
      </div>
      <div className="row pt-3 pb-3 justify-content-evenly">
        {week_row2}
      </div>
    </div>
  )
}
export default DailyWeatherDisplay