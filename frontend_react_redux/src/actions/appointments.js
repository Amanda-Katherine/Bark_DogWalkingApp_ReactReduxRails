import { ROOT_API } from "../constants";

export const addAppointment = (appointment, history, ownerId) => {
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(appointment),
    };

    fetch(`${ROOT_API}/appointments`, options)
      .then((resp) => resp.json())
      .then((appointment) => {
        if (!appointment.error) {
          dispatch({ type: "ADD_APPOINTMENT", payload: appointment });
          history.push(`/users/${ownerId}`);
        } else {
          alert("Appointment not created.", appointment.error);
        }
      });
  };
};
