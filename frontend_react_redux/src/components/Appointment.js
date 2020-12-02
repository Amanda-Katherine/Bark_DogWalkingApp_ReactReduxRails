import React from "react";
export default function Appointment(props) {
  let {
    id,
    available,
    date,
    time,
    address,
    duration,
    compensation,
  } = props.appointment;

  let {
    name,
    breed,
    age,
    weight,
    gender,
    behaviors,
    allergies,
  } = props.appointment.dog;

  const handleBooking = (event) => {
    event.preventDefault();
    // props.acceptWalk(event.target.value);
    //BUILD OUT ACCEPT WALK ACTION AND REDUCER ONCE SESSIONS CAPABLE
  };

  return (
    <div>
    </div>
  );
}
