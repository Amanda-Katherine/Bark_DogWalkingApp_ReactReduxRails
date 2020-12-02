import React from "react";
import { Link } from "react-router-dom";
import UserSignup from "./UserSignup";

export default function NavBar() {
  return (
    <>
      <Link to="/signup">Sign Up</Link>
      {"        "}
      {/* <Link to="/users/:id">See Your Page</Link> */}
      <Link to="/appointments">See Available Walks</Link>
      {"        "}
      <Link to="/users/5">See Your Page</Link>

      {/* <UserLogin/> */}
    </>
  );
}
