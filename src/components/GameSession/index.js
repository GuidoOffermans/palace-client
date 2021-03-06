import React, { useState } from 'react';
import request from 'superagent';
import { url } from '../../constants';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameTable from '../GameTable/'

const GameSession = (props) => {
	const [redirect, setRedirect] = useState(false);
	// const [ readyToPlay, setReadyToPlay ] = useState(false);
  const [gameOn, startGame] = useState(false)
  

	const { jwt, games } = props;

	const gameId = props.match.params.id;

	const thisGame = games.find((game) => game.id === Number(gameId));
	console.log('thisGame:', thisGame);

	const leaveGame = () => {
		// console.log('jwt', jwt);
		const gameId = props.match.params.id;
		// console.log(gameId);
		request
			.put(`${url}/leave/${gameId}`)
			.set('Authorization', `Bearer ${jwt}`)
			// .then((res) => console.log(res))
			.then()
			.catch(console.error);
		setRedirect(true);
	};


	const startPlaying = () => {
		startRequest()
		// startGame(true)
	}

	const startRequest = () => {
		request.put(`${url}/start/${gameId}/${thisGame.deck_id}`)
			.set('Authorization', `Bearer ${jwt}`)
			.then()
			// .then(cards => console.log('response', cards.body))
			.catch(console.error)
	};

	if ( thisGame && thisGame.game_status === 'waiting' ) {
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
				{ thisGame.Users && thisGame.Users.length > 1 ?<button onClick={startPlaying}>start</button> : ''}
				<button onClick={leaveGame}>leave</button>
        {redirect ? <Redirect to="/" /> : ''}
			
			</div>
		);
	} if (thisGame && thisGame.game_status === 'playing') {
		return (
			<div>
				{thisGame ? <GameTable game={thisGame} game_info={thisGame.game_info} userId={props.userId} gameId={thisGame.id} deck_id={thisGame.deck_id} jwt={jwt} /> : ''}
				<button onClick={leaveGame}>leave</button>
        {redirect ? <Redirect to="/" /> : ''}
			</div>
		)
	} else {
    return 'loading'
  }
};

function mapStateToProps(state) {
	return {
		jwt: state.user.jwt,
		games: state.games,
		userId: state.user.id
	};
}

export default connect(mapStateToProps)(GameSession);
