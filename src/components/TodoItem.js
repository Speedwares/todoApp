import React, {Component} from 'react'
import '../index.css'

class TodoItem extends Component{
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#707070',
            fontSize: '18px',
            color: '#ffffff'
        }
    };
    render() {
        return(
            <div style={this.getStyle()}>
                <p style={{padding: '10px 20px'}}> {this.props.todo.item}</p>
            </div>
        )

    }

}


export default TodoItem;