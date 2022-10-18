import React, { useState, useEffect } from 'react';
import { changeTitle } from './helpers';
import logo from './logo.svg';

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
			<header className='App-header'>
				<h1>Thank you for using the PxPerfect Snowpack React template</h1>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
			</header>
		</div>
	);
}

export default App;
