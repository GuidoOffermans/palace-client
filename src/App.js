import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { url } from './constants';

import { setGames } from './redux/actions';
import Lobby from './components/Lobby';

function App(props) {

  const { setGames } = props

	useEffect(() => {
		const source = new EventSource(`${url}/stream`);

		source.onmessage = (event) => {
			const { data } = event;

			const games = JSON.parse(data);

			setGames(games);
		};
	}, [setGames]);

	return (
		<div className="App">
    <header>
      <h1>palace</h1>
    </header>
			<main>
				<Route path="/" exact component={Lobby} />
			</main>
    <footer>
      <p>footer</p>
    </footer>
		</div>
	);
}

const mapDispatchToProps = {
	setGames
};

export default connect(null, mapDispatchToProps)(App);
