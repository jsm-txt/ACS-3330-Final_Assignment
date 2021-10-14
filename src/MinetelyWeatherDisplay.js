function MinutelyWeatherDisplay(props) {
  const minutes = props
  const minute_array = [];
  const minute_array2 = [];
  const minute_array3 = [];
  const minute_array4 = [];
  const minute_array5 = [];
  const minute_array6 = [];
  let date = 0;


  for (let x in minutes) {
    let utcSeconds = minutes[x].dt
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    let currentTimestamp = d
    //console.log(currentTimestamp); // get current timestamp
    date = new Intl.DateTimeFormat('en-US',
      { hour: '2-digit', minute: '2-digit' }).format(currentTimestamp)
    if (x > 0) {
      if (x < 11) {
        minute_array.push(
          <div className="time">
            <div className="hourly">Time: {date}</div>
            Precipitaion: {minutes[x].precipitation}%
            <hr></hr>
          </div>
        )
      } else if (x < 21) {
        minute_array2.push(
          <div className="time">
            <div className="hourly m-0 p-0">Time: {date}</div>
            Precipitaion: {minutes[x].precipitation}%
            <hr></hr>
          </div>
        )
      } else if (x < 31) {
        minute_array3.push(
          <div className="time">
            <div className="hourly">Time: {date}</div>
            Precipitaion: {minutes[x].precipitation}%
            <hr></hr>
          </div>
        )
      } else if (x < 41) {
        minute_array4.push(
          <div className="time">
            <div className="hourly m-0 p-0">Time: {date}</div>
            Precipitaion: {minutes[x].precipitation}%
            <hr></hr>
          </div>
        )
      } else if (x < 51) {
        minute_array5.push(
          <div className="time">
            <div className="hourly">Time: {date}</div>
            Precipitaion: {minutes[x].precipitation}%
            <hr></hr>
          </div>
        )
      } else {
        minute_array6.push(
          <div className="time">
            <div className="hourly m-0 p-0">Time: {date}</div>
            Precipitaion: {minutes[x].precipitation}%
            <hr></hr>
          </div>
        )
      }
    }
  }


  return (
    <div className="container-fluid p-4">
      <div className="title col-4 p-3 m-auto">
        <h3> Minutely Precipitation Forecast </h3>
      </div>
      <div className="row p-4">
        <div className="minute-display col-2">
          <h3 className="p-3">First 10 min </h3>
          {minute_array}
        </div>
        <div className="minute-display2 col-2">
          <h3 className="p-3">10 - 20 min </h3>
          {minute_array2}
        </div>
        <div className="minute-display col-2">
          <h3 className="p-3">20 - 30 min </h3>
          {minute_array3}
        </div>
        <div className="minute-display2 col-2">
          <h3 className="p-3">30 - 40 min </h3>
          {minute_array4}
        </div>
        <div className="minute-display col-2">
          <h3 className="p-3">40 - 50 min </h3>
          {minute_array5}
        </div>
        <div className="minute-display2 col-2">
          <h3 className="p-3">50 - 60 min </h3>
          {minute_array6}
        </div>
      </div>
    </div>
  )
}
export default MinutelyWeatherDisplay