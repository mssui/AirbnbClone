import React, { Component } from "react";
import "./calendar.css";
import Materialize from "materialize-css";
import moment from "moment";

class Calendar extends Component {
  componentDidMount() {
    var context = this;

    var elems = document.querySelectorAll(".dateset");
    Materialize.Datepicker.init(elems, {
      defaultDate: new Date(),
      format: this.state.format,
      container: "body",
      onSelect: function(date) {
        context.setState({ value: context.state.value });
        console.log(date); // Selected date is logged
      },
      autoClose: true
    });
  }

  state = {
    value: new Date(),
    format: "ddd d, mmm",
    formatMoment: "ddd D, MMM"
  };

  render() {
    return (
      <div className="input-field col s4">
        <i className="material-icons prefix">date_range</i>
        <input
          id="date"
          type="text"
          className="datepicker dateset"
          defaultValue={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Calendar;
