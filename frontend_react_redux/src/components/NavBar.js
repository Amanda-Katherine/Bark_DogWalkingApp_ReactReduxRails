import React from "react";
import { Link } from "react-router-dom";
import UserSignup from "./UserSignup";

export default function NavBar() {
  return (
    <>
      <Link to="/signup">Sign Up</Link>
      <br />
      {/* <Link to="/users/:id">See Your Page</Link> */}
      {/* <Link to="/users">See all users page</Link> */}

      {/* <UserLogin/> */}
    </>
  );
}
