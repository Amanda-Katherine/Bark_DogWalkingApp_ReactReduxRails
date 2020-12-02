import React, { Component } from "react";
import { connect } from "react-redux";
import { addAppointment } from "../actions/appointments";
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

const mapStateToProps = (state) => {
  return {
    dogs: state.users.user.dogs,
  };
};

export default connect(mapStateToProps, { addAppointment })(AppointmentForm);
