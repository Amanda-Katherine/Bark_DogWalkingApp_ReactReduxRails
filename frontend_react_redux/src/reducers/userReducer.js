const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload };

    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export default userReducer;
