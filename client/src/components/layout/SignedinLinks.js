import React from "react";
import { NavLink } from "react-router-dom";

const SignedinLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">List Your Place</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red lighten-1">
          My Account
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedinLinks;
