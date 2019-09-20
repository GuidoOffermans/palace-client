import React from 'react';
import { url } from '../../../constants';
import request from 'superagent';
import { connect } from 'react-redux';
import { useState } from 'react';
import {setDiscardTop} from '../../../redux/actions'

const Player = (props) => {
	console.log('playerPROPS:', props);
	const [ youPlayedCard, setYouPlayedCard ] = useState(false);
	const [ cardNotHighEnough, setCardNotHighEnough ] = useState(false);
	// const [ canPlay, setCanPlay ] = useState();

	const translateCard = (cardValue) => {
		if (cardValue[0] === '2') return 2;
		if (cardValue[0] === '3') return 3;
		if (cardValue[0] === '4') return 4;
		if (cardValue[0] === '5') return 5;
		if (cardValue[0] === '6') return 6;
		if (cardValue[0] === '7') return 7;
		if (cardValue[0] === '8') return 8;
		if (cardValue[0] === '9') return 9;
		if (cardValue[0] === '0') return 10;
		if (cardValue[0] === 'J') return 11;
		if (cardValue[0] === 'Q') return 12;
		if (cardValue[0] === 'K') return 13;
		if (cardValue[0] === 'A') return 14;
		console.log('translated card:', cardValue);
		return cardValue;
	};

	const canPlayCard = (playerChoice) => {
		console.log('playercoice:', playerChoice);
		const card = translateCard(playerChoice);
		const discard = translateCard(props.discardTop);
		if (card >= discard) return true;
		else if (card === 2) return true;
		else return false;
	};

	

	const playCard = (e) => {
		if (Number(props.user.id) === Number(props.game_turn)) {
			console.log('it is your turn!');

			if (canPlayCard(e.target.alt)) {
				request
					.put(`${url}/play-card/${props.gameId}/${props.deck_id}`)
					.send({ pileName: props.player.pileId, code: e.target.alt })
					.set('Authorization', `Bearer ${props.jwt}`)
					.then()
					.catch(console.error);
				drawFromDeck();
				setCardNotHighEnough(false);
			} else {
				setCardNotHighEnough(true);
			}
		} else {
			console.log('not your turn!');
			// setYouPlayedCard(false);
		}
	};
	const drawFromDeck = () => {
		request
			.put(`${url}/draw/${props.gameId}/${props.deck_id}`)
			.set('Authorization', `Bearer ${props.jwt}`)
			.then()
			.catch(console.error);
		console.log('deck clicked');
	};


	const takeDiscard = () => {
		request
			.put(`${url}/take-discard/${props.gameId}/${props.deck_id}`)
			.send({ pileName: props.player.pileId})
			.set('Authorization', `Bearer ${props.jwt}`)
			.then(() => console.log('take card response received'))
			.catch(console.error);
		props.setDiscardTop(1)
	}



	return (
		<div className="player">
    {cardNotHighEnough === true?	<button onClick={takeDiscard}>Take Discard Pile</button> : ''}
    <div className="view">
				<h4>
					{cardNotHighEnough === true ? (
						'your card is not high enough!'
					) : (
						''
					)}
				</h4>
			</div>
		
			<h3>{props.turn === true ? "you can play" : "wait for the other player"}</h3>
			{props.player && props.player.cards.length && props.player.cards.map((card) => (
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

const mapStateToProps = (state) => {
	return {
		discardTop: state.discardTop,
		user: state.user
	};
};

export default connect(mapStateToProps, { setDiscardTop })(Player);
