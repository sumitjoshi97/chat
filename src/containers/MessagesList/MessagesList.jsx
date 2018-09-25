// importing dependencies
import React from 'react'
import PropTypes from 'props-types'

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

MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessagesList