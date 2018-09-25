import * as actionTypes from '../actions/actionTypes'

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_USER:
            return { ...state,
                users: [...state.users, [{
                    name: action.name,
                    id: action.id
                }]]
            }

        case actionTypes.USERS_LIST:
            return action.user
        
        default:
            return state
    }
}