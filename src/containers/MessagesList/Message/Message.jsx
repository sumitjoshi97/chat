import React from 'react'

const Message = ({ author, message }) => (
    <p>
        <i>{author}</i>: {message}
    </p>
)

Message.PropTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
export default Message