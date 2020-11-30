import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogsAndAppointments } from "../actions/users";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
// import CalendarPicker from "./CalendarPicker";

class UserPage extends Component {
  componentDidMount() {
    console.log("fetching dogs and appointments");
    //  ;
    if (this.props.match) {
      this.props.fetchDogsAndAppointments(this.props.match.url);
    }
  }

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
