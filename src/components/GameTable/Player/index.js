import React from 'react';
import { url } from '../../../constants';
import request from 'superagent';
import { connect } from 'react-redux'
import { useState } from 'react'

const Player = (props) => {

	// const [cannotPlay, setCannotPlay] = useState(false)

	const translateCard = (cardValue) => {
		if (cardValue[0] === '2') return 2
		if (cardValue[0] === '3') return 3
		if (cardValue[0] === '4') return 4
		if (cardValue[0] === '5') return 5
		if (cardValue[0] === '6') return 6
		if (cardValue[0] === '7') return 7
		if (cardValue[0] === '8') return 8
		if (cardValue[0] === '9') return 9
		if (cardValue[0] === '0') return 10
		if (cardValue[0] === 'J') return 11
		if (cardValue[0] === 'Q') return 12
		if (cardValue[0] === 'K') return 13
		if (cardValue[0] === 'A') return 14
		console.log('translated card:', cardValue)
		return cardValue
	}

	const canPlayCard = (playerChoice) => {
		console.log('playercoice:', playerChoice)
		const card = translateCard(playerChoice)
		const discard = translateCard(props.discardTop)
		if (card > discard) return true
		else if (card === 2) return true
		else return false
	}

	const playCard = (e) => {
		console.log('play card clicked-------------------------------------------------------')
		// if (cannotPlay === true) return
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
