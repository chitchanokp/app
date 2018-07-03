import React, { Component } from 'react';
import Ionicon from 'react-ionicons'

class AddTodo extends Component {

    render(){
      const {handleInputChange, onSubmit, item} = this.props

      return (
        <div className="container box"> 
            <div className="form-group col-md-7">
              <div className="topic topic-add" >
                <Ionicon icon="ios-create" fontSize="6%" className="icon icon-add" /> Add new item
              </div>

              <input type="text" className="form-control form"  
                placeholder="please enter a title" 
                onChange={handleInputChange} value={item.title}/> 
              
              <div className="float-right ">
                <button type="button" className="btn btn-primary btn-submit" onClick={() => onSubmit(item)} >Submit</button>
              </div>

            </div>

        </div>
        )
    };
}

export default AddTodo