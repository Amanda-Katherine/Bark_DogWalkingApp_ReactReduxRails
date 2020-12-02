import React, { Component } from "react";
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
  render() {
    return (
      <div>
      </div>
    );
  }
}

