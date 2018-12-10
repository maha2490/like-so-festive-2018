import React, { Component } from "react";
import "./App.css";
import Homepage from "./containers/homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Homepage />
        </header>
      </div>
    );
  }
}

export default App;
