import { combineReducers } from 'redux'
import games from './games'
import user from './user'
import discardTop from './discard_top'

export default combineReducers({
  games,
  user,
  discardTop
})