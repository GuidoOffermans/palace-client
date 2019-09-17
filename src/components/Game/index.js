import React from 'react';
import './game.css';
import { Link } from 'react-router-dom';
import { url } from '../../constants';
import request from 'superagent';
import { connect } from 'react-redux';

const Game = (props) => {
	const { name, gameId, jwt } = props;

	const addUserToGame = () => {
		console.log('clicked');
		request.put(`${url}/join/${gameId}`).set('Authorization',`Bearer ${jwt}`).then();
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

const mapStateToProps = (state) => {
  return {
    jwt: state.user.jwt
  }
}

export default connect(mapStateToProps)(Game);
