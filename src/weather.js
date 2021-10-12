import { useState } from 'react'
import { loadWeather } from './actions';
import "./weather.css";
import { useSelector, useDispatch } from 'react-redux'
import CurrentWeatherDisplay from './CurrentWeatherDisplay';
import DailyWeatherDisplay from './DailyWeatherDisplay';
import HourlyWeatherDisplay from './HourlyWeatherDisplay';
import MinutelyWeatherDisplay from './MinetelyWeatherDisplay';



function Weather() {
  const weather = useSelector(state => state.weather)
  console.log("from weather")
  console.log(weather)
  const dispatch = useDispatch()
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  

    // async function assignVar() {
    //   const temp = weather.current.temp
    //   const wind_speed = weather.current.wind_speed
    //   const feelsLike = weather.current.feels_like
    //   const humidity = weather.current.humidity
    //   setCurrent({
    //     temp, wind_speed, feelsLike, humidity
  //   })
  // }

  return (
    <div className="contianer">
      <div className="weather-form col-4">

        <form onSubmit={e => {
          e.preventDefault();
          dispatch(loadWeather(lat, long))

        }}>
          <div class="mb-3">
            <label>Latitude:</label><br></br>
            <input type="text" value={lat}
              onChange={e => setLat(e.target.value)} />
          </div>
          <div class="mb-3">
            <label>Longitude:</label><br></br>
            <input type="text" value={long}
              onChange={e => setLong(e.target.value)} />
          </div>
          <button>
            Submit
          </button>
        </form>

      </div>
      <div className="page-one container-fluid m-3 p-0">
        <div className="row">
        {weather && <CurrentWeatherDisplay {...weather.current} />}
        <div className="car-info col-6"><div className="row">
          <div className="day-bttn col-6"> 7 day forecast</div>
          <div className="other-bttn col-6"> 2 day hourly forecast</div>
        </div>
          <div className="row">
            <div className="other-bttn col-6"> Minutely forecast</div>
            <div className="day-bttn col-6"> show previous 5 days</div>
          </div>
        </div>
      </div></div>

      {weather && <DailyWeatherDisplay {...weather.daily} />}
      {weather && <HourlyWeatherDisplay {...weather.hourly} />}
      {weather && <MinutelyWeatherDisplay {...weather.minutely} />}
    </div>
  );
}

export default Weather