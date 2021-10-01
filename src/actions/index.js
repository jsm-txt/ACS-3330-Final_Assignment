export const INCREMENT = 'INCREMENT'

export const increment = () => {
	return {
		type: INCREMENT
	}
}

export const LOADWEATHER = 'LOADWEATHER'

export const loadWeather = (zip) => {
	return async (dispatch) => {
		console.log('Function called')
		const apikey = process.env.REACT_APP_APIKEY
		const unit = 'metric'
		const path = `https://api.openweathermap.org/data/2.5/weather?units=${unit}&zip=${zip}&appid=${apikey}`
		console.log(path)
		const res = await fetch(path)
		const json = await res.json()

		const cod = json.cod
		const message = json.message
		if (cod !== 200) {

			dispatch({
				type:LOADWEATHER,
				payload: {cod, message}
			})
			return
		}

		console.log(json)
		dispatch({
			type: LOADWEATHER,
			payload: {...json}
		})

	}
}