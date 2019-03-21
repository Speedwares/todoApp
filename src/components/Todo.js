import React, {Component} from 'react'
import '../index.css'
import TodoItem from "./TodoItem";

class Todo extends Component{
    render() {
        return this.props.todos.map((todo) =>(
            <TodoItem todo={todo} key={todo.id} testCheck = {this.props.testCheck}/>
            )
        )
    }

}

export default Todo;