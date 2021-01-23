import React, { Component } from "react";

export default class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
  }
  render() {
    let dog = this.props.dog;
    return (
      <div>
        <p>
          <strong>{dog.name}</strong>
        </p>
        <ul>
          <li>
            {dog.breed} - {dog.weight}
          </li>
          <li>
            {dog.gender}- {dog.age} years old
          </li>
          <li>Allergies: {dog.allergies}</li>
          <li>Behaviors: {dog.behaviors}</li>
        </ul>
        <br />
      </div>
    );
  }
}
