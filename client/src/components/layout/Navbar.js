import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";

class Navbar extends Component {
  render() {
    let user = this.props.user;
    return (
      <nav className="nav-wrapper blue-grey lighten-3">
        <div className="container">
          <Link to="/" className="brand-logo left-align">
            Apartment Listings
          </Link>
          {user ? <SignedinLinks user={user} /> : <SignedoutLinks />}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(Navbar);
