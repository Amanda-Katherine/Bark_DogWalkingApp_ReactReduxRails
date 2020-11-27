const users = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return console.log("add updated state info here");

    default:
      return state;
  }
};

export default users;
