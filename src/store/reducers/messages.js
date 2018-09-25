import * as actionTypes from '../actions/actionTypes'

const initialState = {
    id: null,
    message: null,
    author: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.ADD_MESSAGE:
    return { ...state,  }

case actionTypes.MESSAGE_RECEIVED: 
    return {
        ...state,
        id: action.id,
        message: action.message,
        author: action.author
    }
    
  default:
    return state
  }
}