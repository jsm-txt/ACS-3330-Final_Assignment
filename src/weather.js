import { useState } from 'react'
import { loadWeather } from './actions';
import "./weather.css";
import { useSelector, useDispatch } from 'react-redux'
import CurrentWeatherDisplay from './CurrentWeatherDisplay';



function Weather() {
  const weather = useSelector(state => state.weather)
  console.log("from weather")
  console.log(weather.current)
  const dispatch = useDispatch()
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  const [current, setCurrent] = useState(null)
 

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
    <div>
      <div className="weather-form">

        <form onSubmit={e => {
          e.preventDefault();
          dispatch(loadWeather(lat, long))

        }}><label>Latitude:</label>
          <input type="text" value={lat}
            onChange={e => setLat(e.target.value)} /><br></br>
          <label>Longitude:</label>
          <input type="text" value={long}
            onChange={e => setLong(e.target.value)} /><br></br>
          <button>
            submit
          </button>
        </form>

      </div>
      {weather && <CurrentWeatherDisplay {...weather.current} />}
    </div>
  );
}

export default Weather