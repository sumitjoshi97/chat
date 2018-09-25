import * as actionTypes from '../actions/actionTypes'

const initialState = {
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_MESSAGE:
      return { ...state,
        messages: [...state.messages, {
          id: action.id,
          message: action.message,
          author: action.author
        }]
      }

    // case actionTypes.MESSAGE_RECEIVED:
    //   return {
    //     ...state,
    //     id: action.id,
    //     message: action.message,
    //     author: action.author
    //   }

    default:
      return state
  }
}