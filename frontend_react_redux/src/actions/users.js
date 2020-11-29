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
        dispatch({ type: "ADD_USER", payload: user });
      });
  };
};
