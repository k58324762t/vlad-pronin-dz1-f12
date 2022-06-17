import { createStore, combinerReducer } from 'react-redux'
import { numderReducer } from './numberReducer'
const rootReducer = combinerReducer({
	num: numderReducer,
})

export const store = createStore(rootReducer)
