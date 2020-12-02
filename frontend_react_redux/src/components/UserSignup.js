import React, { Component } from "react";
import { addUser } from "../actions/users";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
// import { compose } from "redux";
// import axios from "axios";

class UserSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      email: "",
      userType: "",
      radius: "",
      payment: "",
      address: "",
      phone: "",
      username: "",
      password: "",
      bio: "",
      // avatar: "",
    };
  }

  handleChange(e) {
    let name = e.target.name;
    // if (e.target.files) {
    //   this.setState({ [name]: e.target.files });
    // } else {
    this.setState({ [name]: e.target.value });
    // }
  }

  // handleUpload = () => {
  //   axios.post();
  // };

  handleSubmit(synEvent) {
    synEvent.preventDefault();
    // if (!this.props.user) {
    this.props.addUser(this.state, this.props.history);
    // } else {
    //   this.props.editUser(this.state);
    // }
    this.setState({
      name: "",
      gender: "",
      email: "",
      userType: "",
      radius: "",
      payment: "",
      address: "",
      phone: "",
      username: "",
      password: "",
      bio: "",
      // avatar: "",
    });
  }

  render() {
    let userLabel;

    if (this.state.userType === "Walker") {
      userLabel = "How far you are willing to travel (in miles):";
    } else if (this.state.userType === "Owner") {
      userLabel = "How much are you willing to pay per hour?";
    }

    return (
      <>
        <h1>User Signup</h1>
        <form onSubmit={(synEvent) => this.handleSubmit(synEvent)}>
          <label>Name:</label>
          <input
            onChange={(synEvent) => this.handleChange(synEvent)}
            type="text"
            value={this.state.name}
            name="name"
          />
          <br />
          <label>Email:</label>
          <input
            onChange={(synEvent) => this.handleChange(synEvent)}
            type="text"
            value={this.state.email}
            name="email"
          />
          <br />
          <label>Username:</label>
          <input
            onChange={(synEvent) => this.handleChange(synEvent)}
            type="text"
            value={this.state.username}
            name="username"
          />
          <br />
          <label>Password:</label>
          <input
            onChange={(synEvent) => this.handleChange(synEvent)}
            type="password"
            value={this.state.password}
            name="password"
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
              <option value="Non-binary">Non-binary</option>
              <option value="Other">Other</option>
              <option value="Did not disclose">I prefer not to say</option>
            </select>
          </div>
          <label>Walker or Owner:</label>
          <select
            onChange={(synEvent) => this.handleChange(synEvent)}
            value={this.state.userType}
            name="userType"
          >
            <option value="blank"></option>
            <option value="Owner">Owner</option>
            <option value="Walker">Walker</option>
          </select>
          <br />
          <label placeholder="Please select User Type Above">
            {this.state.userType !== "" ? `${userLabel}` : null}
          </label>
          {this.state.userType !== "" ? (
            <input
              onChange={(synEvent) => this.handleChange(synEvent)}
              type="text"
              value={
                this.state.userType === "Walker"
                  ? this.state.radius
                  : this.state.payment
              }
              name={this.state.userType === "Walker" ? "radius" : "payment"}
            />
          ) : null}
          <br />
          <label>Address:</label>
          <input
            onChange={(synEvent) => this.handleChange(synEvent)}
            type="text"
            value={this.state.address}
            name="address"
          />
          <br />
          <label>Phone Number:</label>
          <input
            onChange={(synEvent) => this.handleChange(synEvent)}
            type="text"
            value={this.state.phone}
            name="phone"
          />
          <br />
          <label>Bio:</label>
          <input
            onChange={(synEvent) => this.handleChange(synEvent)}
            type="textarea"
            value={this.state.bio}
            name="bio"
          />
          {/* <br />
        <label>Avatar:</label>
        <input
          onChange={(synEvent) => this.handleChange(synEvent)}
          type="file"
          name="avatar"
        />
        <button onClick={this.handleUpload}>Upload Photo</button> */}
          <br />
          <br />
          <br />

          <button type="submit">Sign Up</button>
        </form>
      </>
    );
  }
}

export default withRouter(connect(null, { addUser })(UserSignup));
