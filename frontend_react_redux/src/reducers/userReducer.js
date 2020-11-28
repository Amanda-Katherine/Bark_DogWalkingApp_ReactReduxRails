const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload };

    case "ADD_USER":
      return console.log("add updated state info here");

    default:
      return state;
  }
};

export default userReducer;
