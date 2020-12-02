import React from "react";
import { Link } from "react-router-dom";

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
      <span>
        <h4>Appointment Details: {available ? "Not Booked" : "Booked"}</h4>
        <ul>
          <li>
            Date: {date} at {time}
          </li>
          <li>Address: {address}</li>
          <li>Requested outing length: {duration} minutes</li>
          <li>Payment: {compensation} </li>
        </ul>

        <ul>
          <strong> Dog: </strong>
          <li>Name: {name}</li>
          <li>
            {breed} - {gender}
          </li>
          <li>
            {age} years old - {weight} lbs
          </li>
          <li>Behaviors: {behaviors}</li>
          <li>Allergies: {allergies}</li>
          <br />
          <button
            value={id}
            onClick={({ synEvent }) => {
              handleBooking(synEvent);
            }}
          >
            Accept Walk
          </button>
        </ul>
      </span>
      <br />
    </div>
  );
}

//connect acceptWalk via mapDispatchToProps
