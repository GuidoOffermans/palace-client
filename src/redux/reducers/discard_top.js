import { CARD_VALUE } from '../actions/index'


export default function discard_top(state = 1, action = {}) {
  switch (action.type) {
    case CARD_VALUE:
      console.log('I am inside CARD_VALUE reducer')
      return action.payload
    default:
      return state
  }
}