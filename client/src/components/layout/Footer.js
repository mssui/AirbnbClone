import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer blue-grey lighten-5">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Apartment Listings</h5>
            <p className="blue-grey-text text-lighten-4">
              A project for marketplace
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li>
                <NavLink
                  className="blue-grey-text text-lighten-1"
                  to="/apartmentlistings"
                >
                  All apartments
                </NavLink>
              </li>
              <li>
                <NavLink className="blue-grey-text text-lighten-1" to="/signin">
                  Login to your account
                </NavLink>
              </li>
              <li>
                <NavLink className="blue-grey-text text-lighten-1" to="/signup">
                  Become a member
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright orange lighten-3">
        <div className="container">
          © 2019 Asli
          <a
            className="blue-grey-text text-darken-1 right"
            href="https://github.com/mssui/AirbnbClone"
          >
            Source Code on Github{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
