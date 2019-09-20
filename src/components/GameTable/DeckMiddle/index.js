import React from 'react'
import '../GameTable.css'
import request from 'superagent'
import { url } from '../../../constants';
import { connect } from 'react-redux'
import { setDiscardTop } from '../../../redux/actions'


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
    // console.log('deckmiddle props:', this.props.piles)
    
    const discardPile = this.props.piles.find(pile => pile.pileId === 'discard')
    if (discardPile && discardPile.cards && discardPile.cards.length) {
      console.log('deckmiddle component discardtop:', discardPile.cards[discardPile.cards.length-1].value)
      this.props.setDiscardTop(discardPile.cards[discardPile.cards.length-1].code)
      return <img  className="card-pic" alt="back-pic" src={`${discardPile.cards[discardPile.cards.length-1].image}`} />
    }
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

export default connect(null, { setDiscardTop })(DeckMiddle);
