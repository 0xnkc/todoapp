import React from 'react';
import logo from "./logo.png";
import "./App.css"

class App extends React.Component{
  render(){
    return (
      <div>
      <img src={logo} width="100" height="100" className="logo"/>
      <h1 className="app-title">Todo App</h1>
       <div className="container">
        add an item.....
        <br/>
        <input type="text" className="input-text" placeholder="Write a ToDo"/>
        <button className="add-button">Add TODO</button>
        <div className="list">
        <ul>
        <li>
          <input type="checkbox"></input>
          Learn MERN
          <button className="btn">Delete</button>
        </li>
        </ul>
        </div>
       </div>
      </div>
      );
  }

}

export default App;