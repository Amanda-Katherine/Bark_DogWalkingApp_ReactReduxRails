import { ROOT_API } from "../constants";

export const fetchDogs = (userId) => {
  return (dispatch) => {
    fetch(`${ROOT_API}/${userId}`)
      .then((resp) => resp.json())
      //   .then((u) => console.log(u));
      .then((user) => dispatch({ type: "FETCH_DOGS", payload: user }));
  };
};
