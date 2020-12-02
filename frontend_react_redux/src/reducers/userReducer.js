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
      console.log("users fetched");
      return {
        ...state,
        users: action.payload.users,
        walkers: action.payload.walkers,
        owners: action.payload.owners,
        appointments: action.payload.appointments,
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

    case "FETCH_DOGS_AND_APPOINTMENTS":
      console.log("dogs & appointments fetched");
      let returnData =
        Object.keys(action.payload).length === 3
          ? {
              ...initialState,
              user: {
                dogs: action.payload.dogs,
                appointments: action.payload.appointments,
                id: action.payload.user.id,
                name: action.payload.user.name,
              },
            }
          : {
              ...initialState,
              user: {
                appointments: action.payload.appointments,
                id: action.payload.user.id,
                name: action.payload.user.name,
              },
            };

      return returnData;

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
