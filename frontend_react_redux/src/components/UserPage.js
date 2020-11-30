import React, { Component } from "react";
  render() {
    return (
      <div>
        <h3>This is a single user page</h3>
        {/* <CalendarPicker />; */}
      </div>
    );
  }
}
export default connect(mapStateToProps, { fetchDogsAndAppointments })(UserPage);
