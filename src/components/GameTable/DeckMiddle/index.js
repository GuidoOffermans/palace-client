import React from 'react'
import '../GameTable.css'
import request from 'superagent'
import { url } from '../../../constants';


class DeckMiddle extends React.Component {

  drawFromDeck = () => {
    request
    .put(`${url}/draw/${this.props.gameId}/${this.props.deck_id}`)
    .set('Authorization', `Bearer ${this.props.jwt}`)
    .then()
    .catch(console.error)
    console.log('deck clicked')
  }

  renderDiscardPile = () => {
    console.log('deckmiddle props:', this.props.piles)
    
    const discardPile = this.props.piles.find(pile => pile.pileId === 'discard')
    if (discardPile && discardPile.cards) return <img  className="card-pic" alt="back-pic" src={`${discardPile.cards[discardPile.cards.length-1].image}`} />
    // if (discardPile) return console.log("discard pile cards", discardPile.cards)
    else return ''
  }

  render() {
    // console.log('gameid:', this.props.gameId, 'deckid:', this.props.deck_id)
    return <div className="deck-middle">
      <img onClick={this.drawFromDeck} className="card-pic" alt="back-pic" src="http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-circle-back-2_grande.png?v=1530155016" />
      <p className="remaining-cards">{this.props.remaining}</p>
      {/* {console.log('remaining:', this.props.remaining)} */}
      {this.renderDiscardPile()}
    </div>
  }
}

export default DeckMiddle

// 'https://cdn.imgbin.com/16/9/2/imgbin-contract-bridge-playing-card-poker-card-game-standard-52-card-deck-playing-card-back-bcH1GshuS6wCWKYRn4tVpjBzY.jpg'