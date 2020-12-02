import React from "react";

export default function Dog(props) {
  let dog = props.dog;
  return (
    <div>
      <p>
        <strong>{dog.name}</strong>
      </p>
      <ul>
        <li>
          {dog.breed} - {dog.weight}
        </li>
        <li>
          {dog.gender}- {dog.age} years old
        </li>
        <li>Allergies: {dog.allergies}</li>
        <li>Behaviors: {dog.behaviors}</li>
      </ul>
      <br />
    </div>
  );
}
