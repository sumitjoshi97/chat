import React from 'react'
import propTypes from 'prop-types'

const Message = ({ author, message }) => (
    <p>
        <i>{author}</i>: {message}
    </p>
)

Message.propTypes = {
    message: propTypes.string.isRequired,
    author: propTypes.string.isRequired
}
export default Message