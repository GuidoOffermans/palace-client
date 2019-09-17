import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { url } from './constants';


import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
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
    <header className='App-header'>
      <h1>palace</h1>
      <Link to='/sign'>signIn/ signUp</Link>
    </header>
			<main>
				<Route path="/" exact component={Lobby} />
				<Route path="/login" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
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
