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
                completed: true
            },
            {
                id: 3,
                item: "You should probably be the third",
                completed: false
            }
        ]
    };
  render() {
    return (
      <div className="App">
        <Header/>
        <AddTodo/>
        <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
