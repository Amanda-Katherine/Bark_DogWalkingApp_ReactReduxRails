import React, { Component } from "react";

export default class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    };
  }

  handleLikes(event) {
    let name = event.target.name;
    this.setState({
      [name]: parseInt(event.target.value) + 1,
    });
  }

  render() {
    let dog = this.props.dog;
    return (
      <div>
        <p>
          <strong>{dog.name}</strong>
        </p>
        <label>Good Dog-o-meter</label>
        <button
          name="likes"
          value={this.state.likes}
          onClick={(event) => this.handleLikes(event)}
        >
          {this.state.likes} likes
        </button>
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
