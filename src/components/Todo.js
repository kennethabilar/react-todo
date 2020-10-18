import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
    getTodoStyle = () => {
        return {
            borderBottom: '1px solid #efefef',
            padding: '6px 10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { id, title, completed } = this.props.todo

        return (
            <div style={this.getTodoStyle()}>
                <input
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={this.props.updateTodo.bind(this, id)}
                />
                { ' ' }
                { title }
                { ' ' }
                <button style={delBtn} onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
        )
    }
}

const delBtn = {
    backgroundColor: 'red',
    border: 0,
    borderRadius: '50%',
    padding: '4px 8px',
    cursor: 'pointer',
    float: 'right'
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    delTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
}

export default Todo
