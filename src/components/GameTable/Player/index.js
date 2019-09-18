import React from 'react';

const Player = (props) => {
	console.log('props', props)
	return (
		<div className="player">
			<p>{props.side}</p>
			<p>{props.player.pileId}</p>
      {props.player.cards.map(card => <img className='card-pic' src={card.image} alt={card.image} key={card.code}/>)}
		</div>
	);
};

export default Player;
