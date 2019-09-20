import React from 'react';

const Opponent = (props) => {
	console.log('props of player component:', props);
  
  // const numberOfpictures = 
		return (
			<div className="player">
				<p>{props.side}</p>
				{props.player.cards.map((card, index) => (
					<img
						className={`card-pic ${card.code}`}
						src="http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-circle-back-2_grande.png?v=1530155016"
						alt="http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-circle-back-2_grande.png?v=1530155016"
						key={index}
					/>
				))}
			</div>
		);
	
};

export default Opponent;
