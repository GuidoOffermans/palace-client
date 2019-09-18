import React from 'react'
import '../GameTable.css'

class DeckMiddle extends React.Component {

  render() {
    return <div className="deck-middle">
      <img className="card-pic" alt="back-pic" src="http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-circle-back-2_grande.png?v=1530155016" />
      <p className="remaining-cards">{this.props.remaining}</p>
      {console.log('remaining:', this.props.remaining)}
    </div>
  }
}

export default DeckMiddle

// 'https://cdn.imgbin.com/16/9/2/imgbin-contract-bridge-playing-card-poker-card-game-standard-52-card-deck-playing-card-back-bcH1GshuS6wCWKYRn4tVpjBzY.jpg'