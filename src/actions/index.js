export const LOADWEATHER = 'LOADWEATHER'

export const loadWeather = (lat, long) => {
	return async (dispatch) => {
		
	
	  const apikey = process.env.REACT_APP_APIKEY
		const unit = 'imperial'
		const path = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apikey}&units=${unit}`
		const res = await fetch(path)
		const json = await res.json()
		console.log("From action")
		console.log(json)
		const cod = json.cod
		const message = json.message
		if (cod !== undefined) {

			dispatch({
				type:LOADWEATHER,
				payload: {cod, message}
			})
			return
		}

		dispatch({
			type: LOADWEATHER,
			payload: {...json}
		})

	}
}