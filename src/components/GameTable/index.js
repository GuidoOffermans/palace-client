import React from 'react'
import DeckMiddle from './DeckMiddle'
import Player from './Player'

class GameTable extends React.Component {

  render() {
    return <div className="game-table">
      <Player />
      <DeckMiddle />
      <Player />
    </div>
  }
}

export default GameTable