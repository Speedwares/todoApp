import React, {Component} from 'react'
import '../index.css';
import PropTypes from 'prop-types';

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
                    {'  '} {item}
                <button style={buttonStyle} onClick={this.props.deleteItem.bind(this)}> Delete</button></p>
            </div>
        )

    }

}

//This is the Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

//Button style
const buttonStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    float: 'right',
    cursor: 'pointer',
    borderRadius: '5px'
}

export default TodoItem;