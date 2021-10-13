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
    <div className="contianer-fluid">
      <div className="weather-form col-4">

        <form onSubmit={e => {
          e.preventDefault();
          dispatch(loadWeather(lat, long))

        }}><heading>Enter your coordinates here!</heading>
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

      <div className=" container-fluid  p-0">
        <div className="page-one row p-3 justify-content-evenly">
          
            {weather && <CurrentWeatherDisplay {...weather.current} />}
          
          
          <div className="card-info  col-5">
            <div className="row h-50 pb-3 justify-content-evenly">
              <div className="day-bttn col-5"> 7 day forecast</div>
              <div className="other-bttn col-5"> 2 day hourly forecast</div>
            </div>
            <div className="row h-50 pt-3 justify-content-evenly">
              <div className="other-bttn col-5"> Minutely forecast</div>
              <div className="day-bttn col-5"> show previous 5 days</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid">
        {weather && <DailyWeatherDisplay {...weather.daily} />}
      </div>

      
      {weather && <HourlyWeatherDisplay {...weather.hourly} />}
      {weather && <MinutelyWeatherDisplay {...weather.minutely} />}
    </div>
  );
}

export default Weather