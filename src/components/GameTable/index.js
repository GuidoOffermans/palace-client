import React, { useState, useEffect } from 'react';
import DeckMiddle from './DeckMiddle';
import Player from './Player';

function GameTable(props) {
	const [ currentUser, setCurrentUser ] = useState();
	const [ oppenent, setOpponent ] = useState();

	useEffect(() => {
    getOpponent();
		getCurrentUser();
		
	});

	const getCurrentUser = () => {
		const piles = props.game_info.piles;
		const currUser = piles.find((pile) => (Number(pile.pileId) === props.userId)
    );
    console.log('cur',currUser)
		setCurrentUser(currUser);
		return;
	};

	const getOpponent = () => {
		const piles = props.game_info.piles;
    const opUser = piles.find((pile) => Number(pile.pileId )!== props.userId);
    console.log('op',opUser)
		setOpponent(opUser);
		return;
	};

	return (
		<div className="game-table">
			{oppenent ? <Player side='oppenent' player={oppenent} /> : ''}
			{props.game_info.piles ? <DeckMiddle remaining={props.game_info.remaining}/>:''}
			{currentUser ? <Player side='you' player={currentUser} /> : ''}
		</div>
	);
}

export default GameTable;
