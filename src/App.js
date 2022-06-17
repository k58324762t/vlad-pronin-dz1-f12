import { useDispatch, useSelector } from 'react-redux'
import { incrementNumberAction } from './store/numberReducer'
import './App.css'

// eslint-disable-next-line react-hooks/rules-of-hooks
const num = useSelector(num => num.num.num)
// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch()

const insrementNum = num => {
	dispatch(incrementNumberAction(num))
}

function App() {
	return (
		<div>
			<div onChange={insrementNum}>{num}</div>
		</div>
	)
}

export default App
