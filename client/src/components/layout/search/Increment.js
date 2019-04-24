import React, { Component } from "react";

class Increment extends Component {
  state = {
    counter: 1
  };

  increment = e => {
    e.preventDefault();

    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  decrement = e => {
    e.preventDefault();
    if (this.state.counter > 1) {
      this.setState(prevState => ({ counter: prevState.counter - 1 }));
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="col s4 ">
          <p>Guests</p>
        </div>
        <div className="col s2 ">
          <i
            className="fa fa-minus-square"
            style={{ fontSize: "48px", color: "#b2dfdb" }}
            onClick={this.decrement}
          />
        </div>
        <div
          className="col s2 "
          style={{ fontSize: "35px", marginLeft: "10px" }}
        >
          {this.state.counter}
        </div>

        <div className="col s2 ">
          <i
            className="fa fa-plus-square"
            style={{ fontSize: "48px", color: "#b2dfdb" }}
            onClick={this.increment}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Increment;
