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
	const [deckState, setDeckState] = useState({
		"success": true,
		"deck_id": "d5x0uw65g416",
		"remaining": "42",
		"piles": {
			"player1": {
				"pile1": [
					{
						"image": "https://deckofcardsapi.com/static/img/KH.png",
						"value": "KING",
						"suit": "HEARTS",
						"code": "KH"
					},
					{
						"image": "https://deckofcardsapi.com/static/img/8C.png",
						"value": "8",
						"suit": "CLUBS",
						"code": "8C"
					}
				],
				"remaining": "2"
			},
			"player2": {
				"pile1": [
					{
						"image": "https://deckofcardsapi.com/static/img/KH.png",
						"value": "KING",
						"suit": "HEARTS",
						"code": "KH"
					},
					{
						"image": "https://deckofcardsapi.com/static/img/8C.png",
						"value": "8",
						"suit": "CLUBS",
						"code": "8C"
					}
				],
				"remaining": "2"
			},
			"discard": {
				"discard_pile": [
					{
						"image": "https://deckofcardsapi.com/static/img/KH.png",
						"value": "KING",
						"suit": "HEARTS",
						"code": "KH"
					},
					{
						"image": "https://deckofcardsapi.com/static/img/8C.png",
						"value": "8",
						"suit": "CLUBS",
						"code": "8C"
					}
				],
				"remaining": "2"
			},
		},

	})

	const { jwt, games } = props;

	const gameId = props.match.params.id;

	const thisGame = games.find((game) => game.id === Number(gameId));
	// console.log('thisGame:', thisGame);

	const leaveGame = () => {
		console.log('jwt', jwt);
		const gameId = props.match.params.id;
		console.log(gameId);
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
		startGame(true)
		renderCards()
	}

	const startRequest = () => {
		request.put(`${url}/start/${gameId}/${thisGame.deck_id}`)
			.set('Authorization', `Bearer ${jwt}`)
      .then(cards => console.log('response',cards.body))
      .catch(console.error)
	};

	const renderCards = () => {
		console.log('first pile of first player', deckState.piles.player1.pile1)
		return (
			<img src={deckState.piles.player1.pile1[0]["image"]} />
		)
	}
	if (!gameOn) {
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
				<button onClick={startPlaying}>start</button>
				<button onClick={leaveGame}>leave</button>
				{redirect ? <Redirect to="/" /> : ''}
			</div>
		);
	} else {
		return (
			<div>
				{/* {renderCards()} */}
				<GameTable />
				<button onClick={leaveGame}>leave</button>
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		jwt: state.user.jwt,
		games: state.games
	};
}

export default connect(mapStateToProps)(GameSession);
