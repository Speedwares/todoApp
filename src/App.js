import React, { Component } from 'react';
import Header from './components/Header.js';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

class App extends Component {

    state = {
        todos: [
            {
                id: 1,
                item: "Just the first one",
                completed: false
            },
            {
                id: 2,
                item: "This looks like the second one",
                completed: false
            },
            {
                id: 3,
                item: "You should probably be the third",
                completed: false
            }
        ]
    };

    testCheck = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });

    }
  render() {
    return (
      <div className="App">
        <Header/>
        <AddTodo/>
        <Todo todos={this.state.todos} testCheck = {this.testCheck}/>
      </div>
    );
  }
}

export default App;
