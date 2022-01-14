import { useState, useEffect } from 'react'
import * as d3 from "d3";
import { loadWeather } from './actions';
import "./weather.css";
import { useSelector, useDispatch } from 'react-redux'
import CurrentWeatherDisplay from './CurrentWeatherDisplay';
import DailyWeatherDisplay from './DailyWeatherDisplay';
import HourlyWeatherDisplay from './HourlyWeatherDisplay';
import MinutelyWeatherDisplay from './MinetelyWeatherDisplay';
import BarChart from './DailyWeatherBar';
import HourlyBarChart from './HourlyBar';
//import data from './weather.json'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function Weather() {
  const weather = useSelector(state => state.weather)
  //console.log("from weather")
  //console.log(JSON.stringify(weather))
  const dispatch = useDispatch()
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  //const [type, setType] = useState('lat')
  const [zip, setZip] = useState('')
  const [data, setData] = useState(null)

  

  async function fetchWeather() {
    const apikey =  process.env.REACT_APP_APIKEY
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},&appid=${apikey}&units=imperial`
    const res = await fetch(path)
    const json = await res.json()
    
    const cod = json.cod
    const message =json.message
    if (cod!== 200){  
        setData({cod, message})
            return
        
    }
    const temp = json.main.temp
    const description = json.weather[0].description 
    const feels_like = json.main.feels_like
    const city = json.name
    const wind = json.wind.speed

    setLong(json.coord.lon)
    setLat(json.coord.lat) 

    setData({
      cod,
            message,
            temp,
            feels_like,
            description,
            city,
            wind,
  
    })
    console.log(json)
    dispatch(loadWeather(json.coord.lat, json.coord.lon));
}
  // console.log(weather)
  // console.log('Display')

  return (
    <div className="contianer-fluid">
      <div className="row">
      {data && <CurrentWeatherDisplay { ...data} /> }
      <div className="weather-form col-4">
      <form onSubmit={e => {
          e.preventDefault(); 
          fetchWeather(); 
          dispatch(loadWeather(lat, long));
          }}>
          <heading className="form-title">Enter your coordinates here!</heading>

          <div class="mb-3">
            <label>Zip Code:</label><br></br>
            <input type="text" value={zip}
              onChange={e => setZip(e.target.value)} />
          </div>
          <div>OR</div><br></br>
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
      </div>
      {/* <div className=" container-fluid m-0 p-0">
        <div className="page-one row pt-4 pb-4 justify-content-evenly">
          {weather && <CurrentWeatherDisplay {...weather.current} />}
          <div className="card-info  col-5">
            <div className="row h-50 pb-3 justify-content-evenly">
              <div className="day-bttn col-5" href="#Daily-weather">7 day Forecast</div>
              <div className="other-bttn col-5"> 2 day hourly forecast</div>
            </div>
            <div className="row h-50 pt-3 justify-content-evenly">
              <div className="other-bttn col-5"> Minutely forecast</div>
              <div className="day-bttn col-5"> Previous 5 days</div>
            </div>
          </div>
        </div>
      </div> */}
      
      {weather.daily && <DailyWeatherDisplay {...weather.daily} />}
      {weather.daily && <BarChart {...weather} />}
      {weather.daily && <HourlyWeatherDisplay {...weather.hourly} />}
      {/* {weather.daily && <HourlyBarChart {...weather} />} */}
      {weather.minutely && <MinutelyWeatherDisplay {...weather.minutely} />}
    </div>
  );
}
//}
export default Weather