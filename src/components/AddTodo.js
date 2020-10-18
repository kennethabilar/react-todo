import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
    state = {
        title: ''
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    changeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.addTodo.bind(this)}>
                <label>Title</label>
                { ' ' }
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.changeInput.bind(this)}
                />
                { ' ' }
                <input type="submit" value="Add" />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default  AddTodo
