import React, { Component } from "react";
class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      address: "",
      duration: "",
      available: true,
      dogId: "",
      compensation: "",
      walkerId: 0,
    };
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
