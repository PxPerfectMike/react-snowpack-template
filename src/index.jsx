import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const re = document.getElementById('root');
if (!re) {
	throw new Error('No root element found');
}
const root = ReactDOM.createRoot(re);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
