import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
