import React from "react";
import { NavLink } from "react-router-dom";

const SignedinLinks = ({ user }) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">List Your Place</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
            to={`/profile/${user}`}
            className="btn btn-floating red lighten-1"
          >
            My Account
          </NavLink>
        ) : null}
      </li>
    </ul>
  );
};

export default SignedinLinks;
