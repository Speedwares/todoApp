import React, {Component} from 'react'
import '../index.css'

class TodoItem extends Component{
    render() {
        return(
            <div>
                <p> {this.props.todo.item}</p>
            </div>
        )

    }

}

export default TodoItem;