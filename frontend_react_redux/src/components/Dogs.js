import React, { Component } from "react";
import Dog from "./Dog";

class Dogs extends Component {
  render() {
    let dogs = this.props.dogs;
    return <>{dogs && dogs.map((dog) => <Dog key={dog.id} dog={dog} />)}</>;
  }
}

export default Dogs;
