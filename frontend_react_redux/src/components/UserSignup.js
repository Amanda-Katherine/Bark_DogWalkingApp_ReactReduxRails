import React, { Component } from "react";

class UserSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      email: "",
      userType: "",
      address: "",
      phoneNumber: "",
      username: "",
      password: "",
      id: "",
    };
  }
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
          <option value="owner">Owner</option>
          <option value="walker">Walker</option>
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
          value={this.state.phoneNumber}
          name="phoneNumber"
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default UserSignup;