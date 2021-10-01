import { useState } from 'react'
import { loadWeather } from './actions';
import "./weather.css";
import { useSelector, useDispatch } from 'react-redux'



function Weather() {
  const weather = useSelector(state => state.weather)
  
  console.log(weather)
  const dispatch = useDispatch()
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  
  return (
    <div className="weather-form">
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(loadWeather(lat, long))
      }}>
        <input type="text" value={lat}
          onChange={e => setLat(e.target.value)} />
        <input type="text" value={long}
          onChange={e => setLong(e.target.value)} />
        <button>
          submit
        </button>
      </form>
    </div>
  );
}

export default Weather