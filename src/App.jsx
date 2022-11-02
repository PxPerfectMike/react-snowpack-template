import React, { useState, useEffect } from 'react';
import { changeTitle } from './helpers';
import Game from './Game';

function App() {
	// Create the count state.
	const [count, setCount] = useState(0);
	// Update the count (+1 every second).
	useEffect(() => {
		const timer = setTimeout(() => setCount(count + 1), 1000);
		return () => clearTimeout(timer);
	}, [count, setCount]);
	changeTitle(`Page open for ${count} seconds`);

	return (
		<div className='App'>
			<Game />
		</div>
	);
}

export default App;
