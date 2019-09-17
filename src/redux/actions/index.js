
import request from 'superagent'
import {url} from '../../constants'
export const JWT = 'JWT'

const baseUrl = 'http://localhost:4000'

function user(payload) {
  return {
    type: JWT,
    payload
  }
}

export const loginUser = data => dispatch => {
  console.log('loginform data:', data)
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = user(response.body)
      dispatch(action)
    })

export const SET_GAMES = 'SET_GAMES'

export function setGames (games) {
  return {
    type: SET_GAMES,
    payload: games
  }

}