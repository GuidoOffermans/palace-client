import React, { useState, useEffect } from 'react';
import DeckMiddle from './DeckMiddle';
import Player from './Player';

function GameTable(props) {
	const [ currentUser, setCurrentUser ] = useState(null);
  const [ oppenent, setOpponent ] = useState(null);
  const [turn, setTurn ] = useState({
    user: true,
    oppenent:false
  })

	useEffect(() => {
		if (props.game_info && props.game_info.piles.length >= 2) {
			console.log('in game table useeffect, game_info:', props.game_info);
			getOpponent();
      getCurrentUser();
      checkTurn()
		} else {
		}
  });
  
  const checkTurn = () => {
    const turn = props.game_turn
    console.log("turn", turn)
  }


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

	if (props.game_info) {
		return (
			<div className="game-table">
				{oppenent !== null ? (
					<Player side="oppenent" turn={turn.oppenent} player={oppenent} />
				) : (
					''
				)}
				{props.game_info ? (
					<DeckMiddle
						remaining={props.game_info.remaining}
						gameId={props.gameId}
						deck_id={props.deck_id}
						jwt={props.jwt}
					/>
				) : (
					''
				)}
				{currentUser !== null ? (
					<Player side="you" turn={turn.user} player={currentUser} />
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
