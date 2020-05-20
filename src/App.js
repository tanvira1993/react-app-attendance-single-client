import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/drawer.component";
import Login from "./components/sign-in/sign-in.component"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag:null
    };
  }
  async componentDidMount(){
    const token = await localStorage.getItem('token');
    console.log("gggg==>",token)
    this.setState({flag : token})
  }
  render(){
  return (
    <div>
      {this.state.flag !==null ?<Dashboard></Dashboard>:<Login/>}
    </div>
  );
}
}

export default App;
