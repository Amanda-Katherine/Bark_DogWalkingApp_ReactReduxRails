import { ROOT_API } from "../constants";

export const addDog = (dog, history) => {
  debugger;
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dog),
    };

    fetch(`${ROOT_API}/dogs`, options)
      .then((resp) => resp.json())
      .then((dog) => {
        if (!dog.error) {
          debugger;
          dispatch({ type: "ADD_DOG", payload: dog });
          history.push(`/users/${dog.ownerId}`);
        } else {
          alert("Dog not created.", dog.error);
        }
      });
  };
};
