import React, {useState} from 'react';
import request from 'superagent';
import { url } from '../../constants';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

const GameSession = (props) => {
  const [redirect, setRedirect] = useState(false)
	const { jwt } = props;

	const leaveGame = () => {
		console.log('jwt', jwt);
		const gameId = props.match.params.id;
		console.log(gameId);
		request
			.put(`${url}/leave/${gameId}`)
			.set('Authorization', `Bearer ${jwt}`)
			.then((res) => console.log(res))
      .catch(console.error);
    setRedirect(true)
	};

	return (
		<div>
      <p>welcome to this game room</p>
			<button onClick={leaveGame}>leave</button>
			{redirect ? <Redirect to="/" /> : ''}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		jwt: state.user.jwt
	};
}

export default connect(mapStateToProps)(GameSession);
