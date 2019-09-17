import React from 'react';
import './game.css';
import { Link } from 'react-router-dom';

const Game = (props) => {
  const { name, id } = props;
  
  const addUserToGame = () =>{
    
  }

	return (
		<div className="game">
			<h2>{name}</h2>
      <Link to={`/game/${id}`}><button>join</button></Link>
		</div>
	);
};

export default Game;
