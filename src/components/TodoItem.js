import React, {Component} from 'react'
import '../index.css'

class TodoItem extends Component{
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#707070',
            fontSize: '20px',
            color: '#ffffff'
        }
    };

    render() {
        const {id, item} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p style={{padding: '10px 20px'}}>
                    <input type="checkbox" onChange={this.props.testCheck.bind(this, id)} />
                    {'  '} {item}</p>
            </div>
        )

    }

}


export default TodoItem;