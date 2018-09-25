// importing dependencies
import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

// import child components
import Message from './Message/Message'

const MessagesList = ({ messages }) => (
    <section id="messages-list">
        <ul>
            {/* mapping message list to Message Component */}
            {messages && messages.map(message => (
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
    messages: state.messages.messages
})

MessagesList.propTypes = {
    messages: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            message: propTypes.string.isRequired,
            author: propTypes.string.isRequired
        }).isRequired
    )
}

export default connect(mapStateToProps)(MessagesList)