const appointments = (state = {}, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      return console.log("add updated state info here");

    default:
      return state;
  }
};

export default appointments;
