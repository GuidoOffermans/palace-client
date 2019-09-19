
import request from 'superagent';
import { url } from '../../constants';
export const JWT = 'JWT';


function user(payload) {
	return {
		type: JWT,
		payload
	};
}

export const loginUser = (data) => (dispatch) => {
	console.log('loginform data:', data);
	request.post(`${url}/login`).send(data).then((response) => {
		const action = user(response.body);
		dispatch(action);
	});
};
export const SET_GAMES = 'SET_GAMES';

export function setGames(games) {
	return {
		type: SET_GAMES,
		payload: games
	};
}

