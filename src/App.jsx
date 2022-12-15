import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementBy, decrement, reset } from './store/slices/counter'

function App() {
	const { counter } = useSelector((state) => state.counter); // selecciona algo de nuestro store
	const dispatch = useDispatch() // despacha acciones


	return (
		<div className="App">
			<h1>Vite + React</h1>
			<div className="card">
				<p>count is {counter}</p>
				<button onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button onClick={() => dispatch(incrementBy(3))}>
					IncrementBy 3
				</button>
				<button onClick={() => dispatch(reset())}>
					Reset
				</button>
			</div>
		</div>
	)
}

export default App
