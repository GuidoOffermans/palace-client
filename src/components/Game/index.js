import React from 'react';
import './game.css';
import { Link } from 'react-router-dom';
import { url } from '../../constants';
import request from 'superagent';
import { connect } from 'react-redux';

const Game = (props) => {
	const { name, gameId, jwt, index } = props;
	console.log('users:', props.games[index].Users);

	const addUserToGame = () => {
		request
			.put(`${url}/join/${gameId}`)
			.set('Authorization', `Bearer ${jwt}`)
			.then((res) => console.log(res))
			.catch(console.error);
	};

	const canRenderButton = () => {
		if (!props.jwt) {
			return <p>not logged in</p>;
		}
		if (props.games[index].Users.length >= 4) {
			return 'full';
		} else {
			return (
				<Link to={`/game/${gameId}`}>
					<button onClick={addUserToGame}>join</button>
				</Link>
			);
		}
	};

	return (
		<div className="game">
			<h2>{name}</h2>
			{canRenderButton()}
			{props.games[index].Users ? (
				<p>
					players: <b>{props.games[index].Users.length}</b>
				</p>
			) : (''
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		jwt: state.user.jwt,
		games: state.games
	};
};

export default connect(mapStateToProps)(Game);
