// import { render } from "react-dom";
import React, { Component } from "react";
import UserContainer from "./containers/UserContainer";

class App extends Component {
  render() {
    return (
      <>
        <h1>App Page</h1>
        <UserContainer />
      </>
    );
  }
}

export default App;
