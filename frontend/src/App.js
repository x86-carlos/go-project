import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("Hello");
    sendMsg("Hello");
  }

  render() {
	return (
		<div className="App">
			<Header />
			<button onClick={this.send}>Hit</button>
		</div>
	);
  }
}

export default App;
