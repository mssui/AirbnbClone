import React, { Component } from "react";
import Materialize from "materialize-css";

class StartCalendar extends Component {
  componentDidMount() {
    var context = this;
    var elems = document.querySelectorAll(".start");
    Materialize.Datepicker.init(elems, {
      defaultDate: new Date(),
      minDate: new Date(),
      container: "body",
      onSelect: date => context.props.handleDate(date),
      autoClose: true
    });
  }

  render() {
    return (
      <div className="input-field col s4">
        <i className="material-icons prefix">date_range</i>
        <input
          id="date"
          type="text"
          className="datepicker dateset start"
          defaultValue={this.props.placeholder}
        />
      </div>
    );
  }
}

export default StartCalendar;
