import React from 'react';

const Player = (props) => {


	const playCard = (e) => {
		console.log("a card was clicked", e.target.className)
		
	}

	console.log('props of player component:', props)
  if(props.player){
	return (
		<div className="player">
			<p>{props.side}</p>
			<p>{props.player.pileId}</p>
      {props.player.cards.map(card => <img onClick={playCard} className={`card-pic ${card.code}`} src={card.image} alt={card.image} key={card.code}/>)}
		</div>

	)
} else {
    return 'loading'
  }


};

export default Player;
