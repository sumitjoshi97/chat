import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import actions for redux store
import * as actions from '../../store/actions/message'

// class component for add Message
export class AddMessage extends Component {
    state = {
        message: ''
    }


    handleInputChange = e => {
        this.setState({
            message: e.target.value
        })
    }

    // send message on --enter-- key press
    handleAddMessage = e => {
        e.preventDefault()
        if (e.key = 'Enter') {
            this.props.onAddMessage(this.state.message, 'Me')
            this.setState({message: ''})
        }
    }

    render() {
        return (
            <section id="new-message">
                {/* input field */}
                <input
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleAddMessage}
                    type="text"
                    value={this.state.message}
                />
            </section>
        )
    }
}

// function maps action dispatchers to props 
const mapDispatchToProps = dispatch => ({
    onAddMessage: (message, author) => dispatch(actions.addMessage(message, author))
})

// proptypes check
AddMessage.PropTypes = {
    onAddMessage: PropTypes.func.isRequired
}

// component is exported
export default connect(null, mapDispatchToProps)(AddMessage)