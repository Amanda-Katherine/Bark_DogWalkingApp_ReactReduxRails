import { ROOT_API } from "../constants";

// export const loginUser = (loginData) => {
//   return (dispatch) => {};
// };

export const fetchUsers = () => {
  return (dispatch) => {
    fetch(`${ROOT_API}/users`)
      .then((resp) => resp.json())
      .then((userData) => dispatch({ type: "FETCH_USERS", payload: userData }));
  };
};

export const addUser = (user, history) => {
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch(`${ROOT_API}/users`, options)
      .then((resp) => resp.json())
      .then((user) => {
        if (!user.error) {
          debugger;
          dispatch({ type: "ADD_USER", payload: user });
          history.push(`/users/${user[0].user.id}`);
        } else {
          alert(
            "User not created. It's possible your username isn't unique or you left a field blank."
          );
        }
      });
  };
};

export const fetchDogsAndAppointments = (userId) => {
  return (dispatch) => {
    fetch(`${ROOT_API}/${userId}`)
      .then((resp) => resp.json())
      .then((user) =>
        dispatch({ type: "FETCH_DOGS_AND_APPOINTMENTS", payload: user })
      );
  };
};
