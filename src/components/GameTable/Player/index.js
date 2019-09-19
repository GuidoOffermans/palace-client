import React from 'react';
import { url } from '../../../constants';
import request from 'superagent';

const Player = (props) => {
	const playCard = (e) => {
		console.log('a card was clicked', e.target.className);
		console.log('deckid:', props.deck_id, 'gameid:', props.gameId);
		console.log('target card:', e.target.alt);
		request
			.put(`${url}/play-card/${props.gameId}/${props.deck_id}`)
			.send({ pileName: props.player.pileId, code: e.target.alt })
			.set('Authorization', `Bearer ${props.jwt}`)
			.then()
			.catch(console.error);
	};

	console.log('props of player component:', props);
	if (props.player.side !== 'opponent') {
		return (
			<div className="player">
				<p>{props.side}</p>
				<p>{props.player.pileId}</p>
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
	} else {
		return (
			<div className="player">
				<p>{props.side}</p>
				<p>{props.player.pileId}</p>

				{props.player.cards.map((card) => (
					<img
						onClick={playCard}
						className={`card-pic ${card.code}`}
						src="http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-circle-back-2_grande.png?v=1530155016"
						key={card.code}
					/>
				))}
			</div>
		);
	}
};

export default Player;
