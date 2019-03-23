import React, {Component} from 'react'
import '../index.css'
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todo extends Component{
    render() {
        return this.props.todos.map((todo) =>(
            <TodoItem todo={todo} key={todo.id} testCheck = {this.props.testCheck} deleteTodo = {this.props.deleteTodo}/>
            )
        )
    }

}

//This is the Proptypes
Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todo;