import React, {Component} from 'react'
import '../index.css'

class AddTodo extends Component{
    state = {
        title: ''
    }

    changed = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

   
    render() {
        return(
            <div className="AddTodo" >
                <form style={{display: 'flex', padding: '10px 25px'}} onSubmit={this.submitted}>
                <input type="text"
                name='title'
                style={{flex: '10'}}
                placeholder='Add new Todo'
                value={this.state.title}
                onChange={this.changed}/>
                <button
                    type="submit"
                    className="addBut"
                    style={{flex: '1'}}
                > ADD </button>
                </form>
            </div>
        )
    }

}

export default AddTodo;