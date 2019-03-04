import React from "react";
import { NavLink } from "react-router-dom";

const SignedinLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">Create New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          AA
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedinLinks;
