import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { para: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newState = {
      para:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    };

    this.setState(newState);
  }

  render() {
    // console.log("sagar");
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          click
        </button>

        {this.state.para && <p>{this.state.para}</p>}
      </div>
    );
  }
}

export default App;
