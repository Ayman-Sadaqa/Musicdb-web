
import React, { Component } from "react";
import List from './App';
import {render} from "react-dom";

class App extends Component{
  render(){
    return(<List />)
}
}
render(<List/>, document.getElementById('root'))

 