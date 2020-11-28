import React, { Component } from "react";
import { connect } from "react-redux";
class UserContainer extends Component {
  render() {
    // debugger;
    return (
      <div>
        <UserSignup />
      </div>
    );
  }
}
export default connect(mapStateToProps, {
  fetchUsers: fetchUsers,
})(UserContainer);
