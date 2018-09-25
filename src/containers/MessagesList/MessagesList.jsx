// importing dependencies
import React from 'react'
import PropTypes from 'props-types'
import { connect } from 'react-redux'

// import child components
import Message from './Message/Message'

const MessagesList = ({ messages }) => (
    <section id="messages-list">
        <ul>
            {/* mapping message list to Message Component */}
            {messages.map(message => (
                <Message
                    key={message.id}
                    {...message}
                />
            ))}
        </ul>
    </section>
)

// mapping redux store to state
const mapStateToProps = state => ({
    users: state.users.users
})

MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default connect(mapStateToProps)(MessagesList)