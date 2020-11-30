// import { render } from "react-dom";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import UserContainer from "./containers/UserContainer";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <UserContainer />
      </>
    );
  }
}

export default App;
