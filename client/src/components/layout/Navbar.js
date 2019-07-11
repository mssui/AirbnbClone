import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import logo from "../../logo3.png";

class Navbar extends Component {
  render() {
    let user = this.props.user;
    return (
      <nav
        className="nav-wrapper blue-grey lighten-5"
        style={{
          minHeight: "74px"
        }}
      >
        <div className="container">
          <Link to="/" className="brand-logo left-align">
            <img src={logo} alt="" width="172" height="74" />
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
