import {Component} from  'react';
import * as logo from './Logo/Logo.js'
import './App.css';
import './Logo/Logo.css';


class App extends Component {

  

  render() {
    return(
      <div className="App">
        <div id="myDiv" className="head">
  
          <h2>To do list</h2>
  
          <input type="text" id="myInput" placeholder="Title..."/>
  
          <span onClick = {this.newElement()} className="addBtn">Add</span>
  
        </div>
  
        <ul id="myUl"> </ul>
      </div>
    )
  }

}

export default App;
