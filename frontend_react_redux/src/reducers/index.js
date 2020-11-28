import { combineReducers } from "redux";
import userReducer from "./userReducer";
import dogReducer from "./dogReducer";
import appointmentReducer from "./appointmentReducer";

export default combineReducers({
  users: userReducer,
  dogs: dogReducer,
  appointments: appointmentReducer,
});
