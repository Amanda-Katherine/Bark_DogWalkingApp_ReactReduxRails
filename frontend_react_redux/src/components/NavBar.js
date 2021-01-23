import React from "react";
import { Link } from "react-router-dom";
import UserSignup from "./UserSignup";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="nav-container, main-container">
          <span className="logo">
            <span className="logo-title">Bark!</span>
            <a href="/">
              <img
                className="logo-icon"
                src="styles/images/logo-icon.png"
                // style={({ width: "30 px" }, { height: "30 px" })}
                alt=""
                loading="lazy"
              />
            </a>
          </span>
          {"    "}
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
          {/* <Link to="/users/:id">See Your Page</Link> */}
          <Link className="nav-link" to="/appointments">
            See Available Walks
          </Link>
          {"        "}
          <Link className="nav-link" to="/users/5">
            See Your Page
          </Link>
        </nav>
      </header>
    </>
  );
}
