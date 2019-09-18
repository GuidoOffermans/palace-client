import React from 'react'
import DeckMiddle from './DeckMiddle'
import Player from './Player'

class GameTable extends React.Component {
  state = {
    currUser: '',
    opUser: ''
  }
  
  setCurrentUser = () => {
    const { piles } = this.props.game_info
    console.log('piles:', piles)
    const currUser = piles.find(pile => pile[pileId] === this.props.userId)
    return this.setState({currUser})
  }

  setOpponent = () => {
    const { piles } = this.props.game_info
    const opUser = piles.find(pile => pile[pileId] !== this.props.userId)
    return this.setState({opUser})
  }

  render() {
    this.setCurrentUser()
    this.setOpponent()
    return <div className="game-table">
      <Player player={this.state.opUser}/>
      <DeckMiddle remaining={this.props.game_info.remaining}/>
      <Player player={this.state.currUser}/>
    </div>
  }
}

export default GameTable