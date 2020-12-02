import React, { Component } from "react";
import { connect } from "react-redux";
import { addAppointment } from "../actions/appointments";
import Dog from "./Dog";

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

  handleChange(event) {
    let name = event.target.name;

    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("adding appointment");
    // if (!this.props.list) {
    this.props.addAppointment(
      this.state,
      this.props.history,
      this.props.match.params.id
    );
    // } else {
    //   this.props.editDog(this.state);
    // }

    this.setState({
      date: "",
      time: "",
      address: "",
      duration: "",
      available: true,
      dogId: "",
      compensation: "",
      walkerId: 0,
    });
  }

  render() {
    return (
      <div className="main-container">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Date:</label>
          <input
            type="text"
            placeholder="MM/DD/YY"
            onChange={(event) => this.handleChange(event)}
            value={this.state.date}
            name="date"
          />
          <br />
          <label>Time:</label>
          <input
            type="text"
            placeholder="e.g. 4:30 PM"
            onChange={(event) => this.handleChange(event)}
            value={this.state.time}
            name="time"
          />
          <br />
          <label>Address:</label>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.address}
            name="address"
          />
          <br />
          <label>For which dog?</label>
          <select
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.dogId}
            name="dogId"
          >
            <option value="blank"></option>
            {this.props.dogs.map((dog, key) => {
              return (
                <option key={key} value={dog.id}>
                  {dog.name}
                </option>
              );
            })}
          </select>
          <br />
          <label>Duration:</label>
          <input
            type="text"
            placeholder="minutes"
            onChange={(event) => this.handleChange(event)}
            value={this.state.duration}
            name="duration"
          />
          <br />
          <label>Compensation:</label>
          <input
            type="text"
            placeholder="$ USD"
            onChange={(event) => this.handleChange(event)}
            value={this.state.compensation}
            name="compensation"
          />
          <br />
          <input type="submit" />
        </form>
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
