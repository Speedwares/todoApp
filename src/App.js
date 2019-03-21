import React, { Component } from 'react';
import Header from './components/Header.js';
import AddTodo from './components/AddTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;
