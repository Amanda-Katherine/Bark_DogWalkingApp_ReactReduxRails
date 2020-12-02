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
  return (
    <div>
    </div>
  );
}
