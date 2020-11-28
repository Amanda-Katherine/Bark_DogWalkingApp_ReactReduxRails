import React, { Component } from "react";
import { addUser } from "../actions/users";
import { connect } from "react-redux";

// import axios from "axios";

class UserSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      email: "",
      userable_type: "",
      address: "",
      phone: "",
      username: "",
      password: "",
      bio: "",
      // avatar: "",
    };
  }

  handleChange(e) {
    // debugger;
    let name = e.target.name;
    console.log("handle change");

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
    debugger;
    // const e = synEvent.target;
    // console.log(e[9].files);
    // debugger;
    // const user = {
    //   ...this.state,
    //   name: e[0].value,
    //   email: e[1].value,
    //   username: e[2].value,
    //   password: e[3].value,
    //   gender: e[4].value,
    //   userType: e[5].value,
    //   address: e[6].value,
    //   phoneNumber: e[7].value,
    //   bio: e[8].value,
    //   // avatar: e[9].files,
    // };
    // if (!this.props.user) {
    this.props.addUser(this.state);
    // } else {
    //   this.props.editUser(this.state);
    // }
  }

  render() {
    return (
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
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="nonbinary">Non-binary</option>
            <option value="other">Other</option>
            <option value="withhold">I prefer not to say</option>
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
    );
  }
}

export default connect(null, { addUser: addUser })(UserSignup);
