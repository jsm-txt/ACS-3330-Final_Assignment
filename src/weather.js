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
  // const [data, setData] = useState([])
  
//   useEffect(() => {
//     d3.json('./weather.json')
//     .then(data => {
//       setData(data)
//     })
// }, [])
    // async function assignVar() {
    //   const temp = weather.current.temp
    //   const wind_speed = weather.current.wind_speed
    //   const feelsLike = weather.current.feels_like
    //   const humidity = weather.current.humidity
    //   setCurrent({
    //     temp, wind_speed, feelsLike, humidity
  //   })
  // }
  
  // if (weather ===  null || {}) {
  //   console.log(weather)
  //   console.log('undefined')
  //   return (
  //     <div className="contianer-fluid">
  //       <div className="weather-form col-4">
  //         <form onSubmit={e => {
  //           e.preventDefault();
  //           dispatch(loadWeather(lat, long)
  //           )
  //         }}><heading className="form-title">Enter your coordinates here!</heading>
  //           <div class="mb-3">
  //             <label>Latitude:</label><br></br>
  //             <input type="text" value={lat}
  //               onChange={e => setLat(e.target.value)} />
  //           </div>
  //           <div class="mb-3">
  //             <label>Longitude:</label><br></br>
  //             <input type="text" value={long}
  //               onChange={e => setLong(e.target.value)} />
  //           </div>
  //           <button>
  //             Submit
  //           </button>
  //         </form>
  //       </div>

  //       <div className=" container-fluid m-0 p-0">
  //         <div className="page-one row pt-4 pb-4 justify-content-evenly">
  //           {weather && <CurrentWeatherDisplay {...weather.current} />}
  //           <div className="card-info  col-5">
  //             <div className="row h-50 pb-3 justify-content-evenly">
  //               <div className="day-bttn col-5" href="#Daily-weather">7 day Forecast</div>
  //               <div className="other-bttn col-5"> 2 day hourly forecast</div>
  //             </div>
  //             <div className="row h-50 pt-3 justify-content-evenly">
  //               <div className="other-bttn col-5"> Minutely forecast</div>
  //               <div className="day-bttn col-5"> Previous 5 days</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //     </div>
  //   );

  // }
  // else {
    console.log(weather)
    console.log('Display')
    return (
      <div className="contianer-fluid">
        <div className="weather-form col-4">
          <form onSubmit={e => {
            e.preventDefault();
            dispatch(loadWeather(lat, long)
            )
          }}><heading className="form-title">Enter your coordinates here!</heading>
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

        <div className=" container-fluid m-0 p-0">
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
        </div>

        {weather.daily && <DailyWeatherDisplay {...weather.daily} />}
        {weather.daily && <BarChart {...weather} />}
        {/* {loadData} */}
        {/* <BarChart data = {data} /> */}
        {weather.daily && <HourlyWeatherDisplay {...weather.hourly} />}
        {weather.minutely && <MinutelyWeatherDisplay {...weather.minutely} />}
      </div>
    );
  }
//}
  export default Weather