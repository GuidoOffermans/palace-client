import React from 'react';
import { url } from '../../../constants';
import request from 'superagent';
import { connect } from 'react-redux'
import { useState } from 'react'

const Player = (props) => {

	const [cannotPlay, setCannotPlay] = useState(false)

	const translateCard = (cardValue) => {
		if (cardValue === 'JACK') return 11
		if (cardValue === 'QUEEN') return 12
		if (cardValue === 'KING') return 13
		if (cardValue === 'ACE') return 14
		console.log('translated card:', cardValue)
		return cardValue
	}

	const canPlayCard = (playerChoice) => {
		const card = translateCard(playerChoice)
		let discard = null
		if (props.discardTop) discard = translateCard(props.discardTop)
		else return true
		if (card > discard) return true
		else return false
	}

	const playCard = (e) => {
		if (cannotPlay === true) return
		console.log('a card was clicked', e.target.className);
		// console.log('deckid:', props.deck_id, 'gameid:', props.gameId);
		// console.log('target card:', e.target.alt);
		console.log('player component discardtop', props.discardTop)
		console.log('canplaycard:', canPlayCard(e.target.alt))
		if (canPlayCard(e.target.alt)) {
			// setCannotPlay(true)
			request
				.put(`${url}/play-card/${props.gameId}/${props.deck_id}`)
				.send({ pileName: props.player.pileId, code: e.target.alt })
				.set('Authorization', `Bearer ${props.jwt}`)
				.then()
				.catch(console.error);
		} else {
			console.log("---------------Can't play this card, its not high enough----------------")
		}


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

const mapStateToProps = state => {
	return { discardTop: state.discardTop }
}

export default connect(mapStateToProps)(Player);
