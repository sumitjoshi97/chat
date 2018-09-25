import * as actionTypes from './actionTypes'

let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => ({
    type: actionTypes.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
})

export const addUser = name => ({
    type: actionTypes.ADD_USER,
    id: nextUserId ++,
    name
})

export const messageReceived = (message, author) => ({
    type: actionTypes.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
})

export const populateUsersList = users => ({
    type: actionTypes.USERS_LIST,
    users
})