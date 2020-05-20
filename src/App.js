import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/drawer.component";
import Login from "./components/sign-in/sign-in"
import {tokenValidate} from "./util/config"
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag:null
    };
  }
  async componentDidMount(){
    // const token = await tokenValidate();
    //const token = token.data
    const token = localStorage.getItem('token');
    this.setState({flag : token})
    console.log(token)
  }
  render(){
  return (
    <div>
      {this.state.flag !== null ?<Dashboard></Dashboard>:<Login/>}      
    </div>
  );
}
}

export default App;
