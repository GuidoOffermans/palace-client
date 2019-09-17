import React from 'react';
import './game.css';

const Game = (props) => {
	const { name } = props;
	return (
		<div className="game">
			<h2>{name}</h2>
      <button>join</button>
		</div>
	);
};

export default Game;
