import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { para: "" };
  }
  handleClick = () => {
    this.setState({
      para:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  };

  render() {
    return (
      <div id="main">
        <button onClick={this.handleClick}></button>
        <p>{this.state.para}</p>
      </div>
    );
  }
}

export default App;
