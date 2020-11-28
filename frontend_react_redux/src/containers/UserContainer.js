import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/users";

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
