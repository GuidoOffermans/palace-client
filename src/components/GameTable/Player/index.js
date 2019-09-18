import React from 'react'

class Player extends React.Component {

  render() {
    return <div className="player">PlayersSide
      <p>{this.props.player.pileId}</p>
    </div>
  }
}

export default Player