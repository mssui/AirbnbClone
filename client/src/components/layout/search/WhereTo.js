import React, { Component } from "react";
import Materialize from "materialize-css";
import countrydata from "./countrydata.json";

class WhereTo extends Component {
  componentDidMount() {
    var context = this;
    var elems = document.querySelectorAll(".autocomplete");
    Materialize.Autocomplete.init(elems, {
      data: countrydata,
      limit: 5,
      onAutocomplete: selected => context.props.onInputChange(selected)
    });
  }

  render() {
    return (
      <React.Fragment>
        <input
          id="autocomplete-input"
          type="text"
          className="autocomplete"
          onChange={event => this.props.onInputChange(event.target.value)}
        />
        <label htmlFor="autocomplete-input">Where to go?</label>
      </React.Fragment>
    );
  }
}
export default WhereTo;
