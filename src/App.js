import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    currentTodo: {title: ''},
    todolist : [
          {id: 1, title: 'Learn React', isDone: false},
          {id:2, title: 'Practice JavaScript', isDone: false}
    ]
  }

  handleInputChange = event => {
    this.setState({currentTodo: event.target.value});
  }

  onSubmit = item => {
    const {todolist} = this.state
    let currentList = todolist

    if(item.length>0){
      this.setState({
        currentList: currentList.push({id:Math.random(), title: item, isDone: false}),
        currentTodo: {title: ''}
      });
    }

  };

  toggleItem = item => {
    const {todolist} = this.state
      
      item.isDone = !item.isDone
      this.setState({todolist})
    };

  deleteItem = id =>{
    const {todolist} = this.state

    this.setState({
     todolist: todolist.filter(item => item.id !== id)
    });
    
  };


  render() {
    const {showForm, todolist,  currentTodo} = this.state
    return (
      <div className="App">
      
      <TodoList todolist={todolist} 
        toggleItem={this.toggleItem}
        deleteItem={this.deleteItem}
      />

      <AddTodo showForm={showForm} 
        handleInputChange={this.handleInputChange} 
        item={currentTodo}
        onSubmit={this.onSubmit}
      />

      
      </div>
    );
  }
}



export default App;
