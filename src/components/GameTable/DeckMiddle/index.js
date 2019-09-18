import React from 'react'
import '../GameTable.css'

class DeckMiddle extends React.Component {

  render() {
    return <div className="deck-middle">
      {console.log('remaining:', this.props.remaining)}
    </div>
  }
}

export default DeckMiddle

// 'https://cdn.imgbin.com/16/9/2/imgbin-contract-bridge-playing-card-poker-card-game-standard-52-card-deck-playing-card-back-bcH1GshuS6wCWKYRn4tVpjBzY.jpg'