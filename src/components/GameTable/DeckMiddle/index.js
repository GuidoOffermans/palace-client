
import React from 'react';
import '../GameTable.css';
import request from 'superagent';
import { connect } from 'react-redux';
import { setDiscardTop } from '../../../redux/actions';

function DeckMiddle(props) {

	const renderDiscardPile = () => {
    // console.log('deckmiddle props:', this.props.piles)
    
    const discardPile = this.props.piles.find(pile => pile.pileId === 'discard')
    if (discardPile && discardPile.cards && discardPile.cards.length) {
      console.log('deckmiddle component discardtop:', discardPile.cards[discardPile.cards.length-1].value)
      this.props.setDiscardTop(discardPile.cards[discardPile.cards.length-1].code)
      return <img  className="card-pic" alt="back-pic" src={`${discardPile.cards[discardPile.cards.length-1].image}`} />
    }
    else return ''
  }

	//  if(props.thisGame){
	return (
		<div className="deck-middle">
			<div className="deck-discard">
				<img
					className="card-pic"
					alt="back-pic"
					src="http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-circle-back-2_grande.png?v=1530155016"
				/>
				{renderDiscardPile()}
			</div>
			<p className="remaining-cards">
				cards left in the deck :{props.remaining}
			</p>
		</div>
	);
	//  } else {
	//    return <h3>loading</h3>
	//  }

}

export default connect(null, { setDiscardTop })(DeckMiddle);
