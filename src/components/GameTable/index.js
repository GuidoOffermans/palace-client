import React, { useState, useEffect } from 'react';
import DeckMiddle from './DeckMiddle';
import Player from './Player';

function GameTable(props) {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ oppenent, setOpponent ] = useState(null);

	useEffect(() => {
		if (props.game_info) {
			getOpponent();
			getCurrentUser();
		}
	});

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
			(pile) => Number(pile.pileId) !== props.userId
		);
		console.log('op', opUser);
		setOpponent(opUser);
		return;
	};

	return (
		<div className="game-table">
			{oppenent !== null ? (
				<Player side="oppenent" player={oppenent} />
			) : (
				''
			)}
			{props.game_info ? (
				<DeckMiddle remaining={props.game_info.remaining} />
			) : (
				''
			)}
			{currentUser !== null ? (
				<Player side="you" player={currentUser} />
			) : (
				''
			)}
		</div>
	);
}

export default GameTable;
