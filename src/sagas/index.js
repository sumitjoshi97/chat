import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../store/actions/actionTypes'

const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(actionTypes.ADD_MESSAGE, action => {
        action.author = params.username,
        params.socket.send(JSON.stringify(action))
    })
}

export default handleNewMessage