import { LOADWEATHER } from '../actions'

const weatherReducer = (state = {}, action) => {
	switch(action.type) {
		case LOADWEATHER: 
			return action.payload

		default:
			return state
	}
}

export default weatherReducer