import * as actionTypes from '../store/actions/actionTypes'
import * as actions from '../store/actions/message'

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8989')

    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: actionTypes.ADD_USER,
            name: username
        }))
    }

    socket.onmessage = event => {
        const data = JSON.parse(event.data) 
        switch (data.type) {
            case actionTypes.ADD_MESSAGE: 
                dispatch(actions.messageReceived(data.message, data.author))
                break
            
            case actionTypes.ADD_USER: 
                dispatch(actions.addUser(data.name))
                break
            
            case actionTypes.USERS_LIST: 
                dispatch(actions.populateUsersList(data.users))
                break
            
            default:
                break
        }
    }
    return socket
}

export default setupSocket