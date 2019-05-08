import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogout } from "../../store/actions/authActions.js";
class Logout extends Component {
  componentWillMount() {
    this.props.userLogout();
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.userLogin(this.state);
    this.props.history.push(`/profile`);
  };
  render() {
    return (
      <div className="container">
        <h1>Sucsessfully loged out</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { userLogout: () => dispatch(userLogout()) };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
