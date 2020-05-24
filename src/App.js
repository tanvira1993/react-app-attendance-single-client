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
    const token = await tokenValidate();
    const tokenParse = token.data
    if(tokenParse === undefined  ){
      this.setState({flag : false})
    }
    else{
      this.setState({flag : tokenParse})
    }
    console.log("token from backend",tokenParse)
    console.log("flag==>",this.state.flag)
  }
  render(){
  return (
    <div>
      {this.state.flag === true ?<Dashboard></Dashboard>:this.state.flag === false?<Login/>:null}      
    </div>
  );
}
}

export default App;
