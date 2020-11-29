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

export const addUser = (user) => {
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
          dispatch({ type: "ADD_USER", payload: user });
        } else {
          alert(
            "User not created. It's possible your username isn't unique or you left a field blank."
          );
        }
      });
  };
};
