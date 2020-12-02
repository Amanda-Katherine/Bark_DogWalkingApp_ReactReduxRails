import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { addDog } from "../actions/dogs";
import { connect } from "react-redux";

class DogForm extends Component {
  constructor(props) {
    super(props);
    //BUILD OUT FOR FUTURE EDIT CAPABILITIES
    //   this.state = {
    //     name: this.props.dog ? this.props.dog.name : "",
    //     id: this.props.dog ? this.props.dog.id : "",
    //   };

    this.state = {
      name: "",
      gender: "",
      breed: "",
      age: "",
      //   avatar: "",
      weight: "",
      allergies: "",
      behaviors: "",
      ownerId: parseInt(this.props.match.params.id),
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("adding dog");
    // if (!this.props.list) {
    this.props.addDog(this.state, this.props.history);
    // } else {
    //   this.props.editDog(this.state);
    // }

    this.setState({
      name: "",
      gender: "",
      breed: "",
      age: "",
      //   avatar: "",
      weight: "",
      allergies: "",
      behaviors: "",
      ownerId: parseInt(this.props.match.params.id),
    });
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form
          className="main-container"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <label>Dog Name:</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.name}
            name="name"
          />
          <div className="signup-dropdown">
            <label>Gender:</label>
            <select
              value={this.state.gender}
              onChange={(synEvent) => this.handleChange(synEvent)}
              name="gender"
            >
              <option value="blank"></option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <label>Breed (if mix, best guess):</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.breed}
            name="breed"
          />
          <br />
          <label>Age (in years):</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.age}
            name="age"
          />
          <br />
          <label>Weight (lbs):</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.weight}
            name="weight"
          />
          <br />
          <label>Allergies:</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.allergies}
            name="allergies"
          />
          <br />
          <label>Behaviors:</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.behaviors}
            name="behaviors"
          />
          <br />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { addDog: addDog })(DogForm));
