import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return (
            this.props.todos.map(todo => {
                return (
                    <Todo
                        delTodo={this.props.delTodo}
                        updateTodo={this.props.updateTodo}
                        key={todo.id}
                        todo={todo}
                    />
                )
            })
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
}

export default  Todos