import React from 'react';
import { url } from '../../../constants';
import request from 'superagent';

const Player = (props) => {
	const playCard = (e) => {
		// console.log('a card was clicked', e.target.className);
		// console.log('deckid:', props.deck_id, 'gameid:', props.gameId);
		// console.log('target card:', e.target.alt);
		request
			.put(`${url}/play-card/${props.gameId}/${props.deck_id}`)
			.send({ pileName: props.player.pileId, code: e.target.alt })
			.set('Authorization', `Bearer ${props.jwt}`)
			.then()
			.catch(console.error);
	};

	console.log('props of player component:', props);
	
		return (
			<div className="player">
				<p>{props.side}</p>
        <h3>{props.turn === true ? "you can play" : "wait for the other player"}</h3>
				{props.player.cards.map((card) => (
					<img
						onClick={playCard}
						className={`card-pic ${card.code}`}
						src={card.image}
						alt={card.code}
						key={card.code}
					/>
				))}
			</div>
		);
	
};

export default Player;
