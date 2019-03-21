import React, {Component} from 'react'
import '../index.css'

class AddTodo extends Component{
    render() {
        return(
            <div className="AddTodo">
                <div className="addInput">
                <input type="text" />
                <button type="submit" className="addBut"> ADD </button>
                </div>
            </div>
        )
    }

}

export default AddTodo;