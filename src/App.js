import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layouts/Header';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err));
    }

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
            .then(res => {
                if(res.status === 201) {
                    res.data.id = uuidv4();
                    this.setState({ todos: [...this.state.todos, res.data]});
                }
            })
            .catch(err => console.log(err));
    }

    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                if(res.status === 200) {
                    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
                }
            })
            .catch(err => console.log(err));
    }

    updateTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo
            })
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route
                        exact
                        path="/"
                        render={prop => (
                            <React.Fragment>
                                <h2>Add Todo</h2>
                                <AddTodo addTodo={this.addTodo} />
                                <h2>Todos</h2>
                                <Todos
                                    delTodo={this.delTodo}
                                    updateTodo={this.updateTodo}
                                    todos={this.state.todos}
                                />
                            </React.Fragment>
                        )}
                    />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
