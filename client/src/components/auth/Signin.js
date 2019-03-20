import React, { Component } from "react";
import { connect } from "react-redux";
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
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="username">Your Username</label>
            <input type="text" id="username" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { userLogin: params => dispatch(userLogin(params)) };
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
