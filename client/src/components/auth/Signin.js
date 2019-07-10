import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../../store/actions/authActions.js";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.userLogin(this.state);
  };
  render() {
    let msg = this.props.statusMsg;
    let user = this.props.user;

    return (
      <div className="container" style={{ height: "90vh" }}>
        <div className="row">
          <div className=" col m3 l3 center-align" />
          <div className=" col s12 m6 l6 center-align">
            <form className="white" onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3">Sign In</h5>
              <div className="input-field">
                <label htmlFor="username">Your Username</label>
                <input type="text" id="username" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <button className="btn orange lighten-1 z-depth-0">
                  Login
                </button>
                {msg === "sucsess" ? (
                  <Redirect
                    to={{
                      pathname: `/profile/${user}`,
                      state: { from: this.props.location }
                    }}
                  />
                ) : null}
              </div>
            </form>
          </div>
          <div className=" col m3 l3 center-align" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user, statusMsg: state.auth.statusMsg };
};
const mapDispatchToProps = dispatch => {
  return { userLogin: params => dispatch(userLogin(params)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(SignIn);
