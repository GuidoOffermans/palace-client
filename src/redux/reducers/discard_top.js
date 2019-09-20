import { CARD_VALUE } from '../actions/index'


export default function discard_top(state = 1, action = {}) {
  switch (action.type) {
    case CARD_VALUE:
      return action.payload
    default:
      return state
  }
}