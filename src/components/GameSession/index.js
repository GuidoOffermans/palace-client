import React, { useState } from 'react';
import request from 'superagent';
import { url } from '../../constants';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const GameSession = (props) => {
	const [ redirect, setRedirect ] = useState(false);
	const [ readyToPlay, setReadyToPlay ] = useState(false);

  const { jwt, games } = props;
  
	const gameId = props.match.params.id;

	const thisGame = games.find((game) => game.id === Number(gameId));
	console.log('thisGame:', thisGame);

	const leaveGame = () => {
		console.log('jwt', jwt);
		const gameId = props.match.params.id;
		console.log(gameId);
		request
			.put(`${url}/leave/${gameId}`)
			.set('Authorization', `Bearer ${jwt}`)
			.then((res) => console.log(res))
			.catch(console.error);
		setRedirect(true);
	};

	const start = () => {
    request.put(`${url}/start/${gameId}/${thisGame.deck_id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then()
  };

	return (
		<div>
			<p>welcome to this game room</p>
      <p>{thisGame ? thisGame.game_status : ''}</p>
			<h3>users in this room:</h3>
			{thisGame ? (
				thisGame.Users.map((user) => <p key={user.id}>{user.name}</p>)
			) : (
				''
			)}
			<button onClick={start}>start</button>
			<button onClick={leaveGame}>leave</button>
			{redirect ? <Redirect to="/" /> : ''}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		jwt: state.user.jwt,
		games: state.games
	};
}

export default connect(mapStateToProps)(GameSession);
