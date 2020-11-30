import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogsAndAppointments } from "../actions/users";
class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>This is a single user page</h3>
        {/* <CalendarPicker />; */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchDogsAndAppointments })(UserPage);
