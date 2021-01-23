import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogsAndAppointments } from "../actions/users";
import DogForm from "./DogForm";
import AppointmentForm from "./AppointmentForm";
import Dogs from "./Dogs";
import AppointmentsPage from "./AppointmentsPage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
// import { withRouter } from "react-router";
// import CalendarPicker from "./CalendarPicker";

class UserPage extends Component {
  componentDidMount() {
    console.log("fetching dogs and appointments");

    if (this.props.match.params.id && !this.props.id) {
      this.props.fetchDogsAndAppointments(this.props.match.url);
    }
  }

  render() {
    let props = this.props;
    return (
      <div className="main-container">
        {props ? <h3>Welcome back, {props.name}.</h3> : ""}
        {!(
          props.location.pathname.includes("/appointments/new") ||
          props.location.pathname.includes("/dogs/new")
        ) ? (
          <>
            <h3>Your Appointments</h3>
            <AppointmentsPage
              location={props.location}
              appointments={props.appointments}
              dogs={props.dogs}
            />{" "}
            {props.dogs ? (
              <>
                <h3>Your Dogs</h3> <Dogs dogs={props.dogs} />
                <ul>
                  <button>
                    <Link to={`${props.match.url}/dogs/new`}>
                      Add a new Dog
                    </Link>
                  </button>

                  <button>
                    <Link to={`${props.match.url}/appointments/new`}>
                      Create new Appointment
                    </Link>
                  </button>
                </ul>
              </>
            ) : (
              <ul>
                <button>
                  <Link to={{ pathname: "/appointments", userId: props.id }}>
                    See all appointments
                  </Link>
                </button>
              </ul>
            )}
            <br />
            <br />
          </>
        ) : null}

        {props ? (
          <Route
            exact
            path="/users/:id/dogs/new"
            render={(routerProps) => (
              <DogForm {...routerProps} dogs={props.dogs} userId={props.id} />
            )}
          />
        ) : null}

        {props ? (
          <Route
            exact
            path="/users/:id/appointments/new"
            render={(routerProps) => (
              <AppointmentForm
                {...routerProps}
                dogs={props.dogs}
                userId={props.id}
                address={props.appointments[0]}
              />
            )}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let userData = state.users;

  let returnedData = userData.user.dogs
    ? {
        id: userData.user.id,
        name: userData.user.name,
        appointments: userData.user.appointments,
        dogs: userData.user.dogs,
      }
    : {
        id: userData.user.id,
        name: userData.user.name,
        appointments: userData.user.appointments,
      };
  return returnedData;
};

export default connect(mapStateToProps, { fetchDogsAndAppointments })(UserPage);
