import React from 'react';
import './game.css';
import { Link } from 'react-router-dom';
import { url } from '../../constants';
import request from 'superagent';

const Game = (props) => {
	const { name, gameId } = props;

	const addUserToGame = () => {
    console.log('clicked')
    request.put(`${url}/join/${gameId}`)
    .then();
	};

	return (
		<div className="game">
			<h2>{name}</h2>
			<Link to={`/game/${gameId}`}>
				<button onClick={addUserToGame}>join</button>
			</Link>
		</div>
	);
};

export default Game;
