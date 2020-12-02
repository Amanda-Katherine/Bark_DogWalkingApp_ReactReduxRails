import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/users";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserSignup from "../components/UserSignup";
import UsersPage from "../components/UsersPage";
import UserPage from "../components/UserPage";
import AppointmentsPage from "../components/AppointmentsPage";

class UserContainer extends Component {
  componentDidMount() {
    console.log("fetching users");
    this.props.fetchUsers();
  }

  render() {
    return (
      <>
        <Route
          exact
          path="/signup"
          render={(routerProps) => <UserSignup {...routerProps} />}
        />
        {/* <Route
          path="/users"
          allUsers={this.props.users}
          allOwners={this.props.owners}
          allWalkers={this.props.walkers}
          component={UsersPage}
        /> */}
        <Route
          path="/users/:id"
          render={(routerProps) => <UserPage {...routerProps} />}
        />
        <Route
          exact
          path="/appointments"
          render={(routerProps) => (
            <AppointmentsPage
              appointments={this.props.appointments}
              {...routerProps}
            />
          )}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  //   debugger;
  return {
    users: state.users.users,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => {
//       fetch(`${ROOT_API}/users`)
//         .then((resp) => resp.json())
//         .then((users) => console.log(users));
//       // { dispatch({type: "FETCH_USERS", payload: users})}
//     },
//   };
// };

export default connect(mapStateToProps, {
  fetchUsers: fetchUsers,
})(UserContainer);
