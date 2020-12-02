import React, { Component } from "react";
import Appointment from "./Appointment";

class AppointmentsPage extends Component {
  renderAppointments = () => {
    let appts = this.props.appointments;
    let availableAppointments = appts.filter((apmt) => apmt.available === true);

    return this.props.location.pathname.includes("/appointments")
      ? availableAppointments.map((appt) => (
          <Appointment key={appt.id} available={true} appointment={appt} />
        ))
      : appts.map((appt) => <Appointment key={appt.id} appointment={appt} />);
  };
  render() {
    return (
      <div>
        <>{this.props.appointments && this.renderAppointments()}</>
      </div>
    );
  }
}

export default AppointmentsPage;
