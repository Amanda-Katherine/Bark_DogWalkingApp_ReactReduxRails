const initialState = {
  users: [],
  walkers: [],
  owners: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload[0],
        walkers: action.payload[1],
        owners: action.payload[2],
      };

    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export default userReducer;
