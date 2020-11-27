const dogs = (state = {}, action) => {
  switch (action.type) {
    case "ADD_DOG":
      return console.log("add updated state info here");

    default:
      return state;
  }
};

export default dogs;
