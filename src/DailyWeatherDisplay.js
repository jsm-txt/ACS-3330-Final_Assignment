function DailyWeatherDisplay(props){
  const days = props
  const week = [];

  for ( let x in days){
    week.push(
      <div className="daily-display">
          <heading>Temperature {days[x].temp.day}°F</heading>
          <small>Max {days[x].temp.max}°F</small><br></br>
          <small>Min {days[x].temp.min}°F</small>
          <small>Humidity: {days[x].humidity}</small>
      </div>
    )
  }

  return(
    <div>
      7 day week
      {week}
    </div>
      
  )
}
export default DailyWeatherDisplay