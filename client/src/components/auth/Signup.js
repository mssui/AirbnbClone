import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userRegister } from "../../store/actions/authActions.js";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.userRegister(this.state);
  };

  render() {
    let msg = this.props.statusMsg;
    let user = this.props.user;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="username">Pick a Username</label>
            <input type="text" id="username" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">E-mail Address</label>
            <input type="text" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button
              onSubmit={this.handleSubmit}
              className="btn red lighten-1 z-depth-0"
            >
              Sign Up
            </button>
            {msg ? (
              <Redirect
                to={{
                  pathname: `/profile/${user}`,
                  state: { from: this.props.location }
                }}
              />
            ) : null}
            <p> </p>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.auth.user, statusMsg: state.auth.statusMsg };
};
const mapDispatchToProps = dispatch => {
  return { userRegister: params => dispatch(userRegister(params)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
