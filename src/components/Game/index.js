import React from 'react';
import './game.css';
import { Link } from 'react-router-dom';
import { url } from '../../constants';
import request from 'superagent';
import { connect } from 'react-redux';

const Game = (props) => {
	const { name, gameId, jwt } = props;
	console.log('users:', props.users)

  
	const addUserToGame = () => {
    request.put(`${url}/join/${gameId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(res => console.log(res)).catch(console.error);
	};

	return (
		<div className="game">
			<h2>{name}</h2> 
      {props.jwt ? <Link to={`/game/${gameId}`}>
				<button onClick={addUserToGame}>join</button>
			</Link> : ''}
			{props.users && <ul>{props.users.map(user => <li>{user.name}</li>)}</ul>}
		</div>
	);
};

const mapStateToProps = (state) => {
  return {
		jwt: state.user.jwt,
		games: state.games
  }
}

export default connect(mapStateToProps)(Game);
