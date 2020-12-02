const initialState = {
  users: [],
  user: { dogs: [], appointments: [] },
  walkers: [],
  owners: [],
  appointments: [],
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
      let resp = action.payload;
      let walkerArray = !!resp[1].type.walker
        ? [...state.walkers, resp[1].type.walker]
        : [...state.walkers];

      let ownerArray = !!resp[1].type.owner
        ? [...state.owners, resp[1].type.owner]
        : [...state.owners];

      return {
        ...state,
        users: [...state.users, resp[0].user],
        walkers: walkerArray,
        owners: ownerArray,
      };


    case "ADD_APPOINTMENT":
      return {
        ...state,
        appointments: [...state.appointments, action.payload.appointment],
        user: {
          ...state.user,
          appointments: [
            ...state.user.appointments,
            action.payload.appointment,
          ],
        },
      };

    default:
      return state;
  }
};

export default userReducer;
