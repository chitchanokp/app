import React, { Component } from 'react'
import Ionicon from 'react-ionicons'

export default class TodoList extends Component {


    renderList(todolist){
      const {toggleItem, deleteItem} =this.props
      

      return todolist.map((item,index) => { 

        return <div key={index} >
            <li className="list-group-item" >
              <input type="checkbox" className="checkbox" 
              onClick={() => toggleItem(item)} />
                {item.isDone ? ' [DONE] ': null}
                {item.title} 
              <Ionicon icon="ios-close-circle-outline" color="#CC0000" 
              className="float-right icon" id="icon-del"fontSize="4.6%"
              onClick={(e) => deleteItem(item.id)} />
            </li>
         </div>
      })

    };

    render(){
      const {todolist} = this.props

        return (
            <div className="container box">
              <div className=" col-md-7">
                <div className="topic">
                <Ionicon icon="ios-list" className="icon icon-list" fontSize="8%"/>Todo List
                </div>
                <ul className="list-group list-group-flush">
                  {this.renderList(todolist)} 
                </ul>
              </div>

            </div>
        )
    };
}