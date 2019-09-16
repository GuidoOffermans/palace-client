import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Lobby from './components/Lobby'

function App(props) {
	return (
		<div className="App">
			<main>
				<Route path="/" exact component={Lobby} />
			</main>
		</div>
	);
}

export default App;
