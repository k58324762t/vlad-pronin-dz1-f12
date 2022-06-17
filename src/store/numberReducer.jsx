const defaultState = {
	num: 5,
}

const ADD_NUMBER = 'ADD_NUMBER'
const INCREMENT_NUMBER = 'INCREMENT_NUMBER'

export const numderReducer = (state = defaultState, action) => {
	switch (action.type) {
		case INCREMENT_NUMBER:
			return { ...state, num: state.num + 10 }
		default:
			return state
	}
}

export const incrementNumberAction = payload => ({ type: ADD_NUMBER })
