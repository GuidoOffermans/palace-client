import React, { useState } from 'react';
import request from 'superagent';
import { url } from '../../constants';

const CreateGameForm = () => {
	const [ gameName, setGameName ] = useState({ name: '' });

	const onChange = (event) => {
		setGameName({
			...gameName,
			[event.target.name]: event.target.value
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
    request
      .post(`${url}/game`)
      .send(gameName)
      .catch(console.error);
		setGameName({ name: '' });
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				name="name"
				onChange={onChange}
				value={gameName.name}
				placeholder="game-name"
			/>
			<button>create game</button>
		</form>
	);
};

export default CreateGameForm;
