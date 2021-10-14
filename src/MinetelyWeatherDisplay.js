function MinutelyWeatherDisplay(props){
  const minutes = props
  const minute = [];
  

  for ( let x in minutes){
    
    minute.push(
      <div className="daily-display">
          <small>Time: {minutes[x].dt}</small>
          <small>Precipitaion: {minutes[x].precipitation}%</small>
      </div>
    )
  }

  return(
    <div>
      Minute display
      {minute}
    </div>
      
  )
}
export default MinutelyWeatherDisplay