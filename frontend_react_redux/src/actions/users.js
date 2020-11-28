
export const loginUser = (loginData) => {
  return (dispatch) => {};
};


export const addUser = (user) => {
  debugger;
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
