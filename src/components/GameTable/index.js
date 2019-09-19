import React, { useState, useEffect } from 'react';
import DeckMiddle from './DeckMiddle';
import Player from './Player';
import Oppenent from './Opponent'

function GameTable(props) {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ oppenent, setOpponent ] = useState(null);
	const [ turn, setTurn ] = useState({
		user: true,
		opp: false
	});

	useEffect(() => {
    setTheTurn()
		if (props.game_info && props.game_info.piles.length >= 2) {
    //   console.log('in game table useeffect, game_info:', props.game_info);
      
			getOpponent();
			getCurrentUser();
		} else {
		}
	}, [props.userId, props.game.game_turn, props]);

	const setTheTurn = () => {
    console.log('userID', props.userId, '--', 'gameturn', props.game.game_turn)
		if (Number(props.userId) === Number(props.game.game_turn)) {
			setTurn({
				user: true,
				opp: false
			});
		} else {
			setTurn({
				user: false,
				opp: true
			});
		}
	};

	const getCurrentUser = () => {
		const piles = props.game_info.piles;
		const currUser = piles.find(
			(pile) => Number(pile.pileId) === props.userId
		);
		console.log('cur', currUser);
		setCurrentUser(currUser);
		return;
	};

	const getOpponent = () => {
		const piles = props.game_info.piles;
		const opUser = piles.find(
			(pile) =>
				Number(pile.pileId) !== Number(props.userId) &&
				pile.pileId !== 'discard'
		);
		console.log('op', opUser);
		setOpponent(opUser);
		return;
	};

	if (props.game_info) {
		return (
			<div className="game-table">
				{oppenent !== null ? (
					<Oppenent
						turn={turn.user}
						side="oppenent"
						player={oppenent}
						gameId={props.gameId}
						deck_id={props.deck_id}
						jwt={props.jwt}
					/>
				) : (
					''
				)}
				{props.game_info ? (
					<DeckMiddle
						remaining={props.game_info.remaining}
						gameId={props.gameId}
						deck_id={props.deck_id}
						jwt={props.jwt}
						piles={props.game_info.piles}
					/>
				) : (
					''
				)}
				{currentUser !== null ? (
					<Player
						turn={turn.opp}
						side="you"
						player={currentUser}
						gameId={props.gameId}
						deck_id={props.deck_id}
						jwt={props.jwt}
					/>
				) : (
					''
				)}
			</div>
		);
	} else {
		return <h1>loading......</h1>;
	}
}
export default GameTable;
