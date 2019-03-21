import React, {Component} from 'react'
import '../index.css'

class TodoItem extends Component{
    getStyle = () => {
        return {
            background: '#707070',
            fontSize: '12px'
        }
    };
    render() {
        return(
            <div style={this.getStyle()}>
                <p> {this.props.todo.item}</p>
            </div>
        )

    }

}

const background = {
    background: '#707070',
    fontSize: '12px'
}


export default TodoItem;