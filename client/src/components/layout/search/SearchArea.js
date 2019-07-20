import React, { Component } from "react";
import { Link } from "react-router-dom";
import Increment from "./Increment";
import LocationSearchInput from "./WhereTo";
import StartCalendar from "./StartCalendar";
import EndCalendar from "./EndCalendar";
import moment from "moment";
import queryString from "query-string";

class SearchArea extends Component {
  state = {
    start_date: new Date(),
    end_date: new Date(),
    guest_num: 1,
    lat: 0,
    lng: 0
  };

  formatAddress = value => {
    this.setState({ lat: value.lat, lng: value.lng }, () => {});
    console.log("Distance added to state", this.state);
  };

  handleEndDate = e => {
    var formatEnd = moment(e).format("YYYY-MM-DD");
    this.setState({ end_date: formatEnd }, () => {});
  };
  handleStartDate = e => {
    var formatStart = moment(e).format("YYYY-MM-DD");
    this.setState({ start_date: formatStart }, () => {});
  };

  incrementGuestNumber = e => {
    e.preventDefault();
    this.setState(prevState => ({ guest_num: prevState.guest_num + 1 }));
  };

  decrementGuestNumber = e => {
    e.preventDefault();
    if (this.state.guest_num > 1) {
      this.setState(prevState => ({ guest_num: prevState.guest_num - 1 }));
    }
  };

  render() {
    let values = queryString.stringify({
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      guest_num: this.state.guest_num,
      lat: this.state.lat,
      lng: this.state.lng
    });
    return (
      <React.Fragment>
        <div className="row center-align" style={{ padding: "2em" }}>
          <div className="input-field col s12 m12 l6  ">
            <LocationSearchInput
              formatAddress={val => this.formatAddress(val)}
            />
          </div>
          <div className="col s12 m12 l6 " style={{ marginTop: "2em" }}>
            <Increment
              counter={this.state.guest_num}
              increment={this.incrementGuestNumber}
              decrement={this.decrementGuestNumber}
            />
          </div>
        </div>

        <div className="row center-align">
          <div className="input-field col s12 m12 l6  ">
            <StartCalendar
              placeholder={"Start Date"}
              handleDate={this.handleStartDate}
            />
          </div>
          <div className="input-field col s12 m12 l6  ">
            <EndCalendar
              placeholder={"End Date"}
              handleDate={this.handleEndDate}
            />
          </div>
        </div>

        <div className="row center-align">
          <div className=" col s2 m3 l4" />
          <div className=" col s8 m6 l4 ">
            <Link
              to={{
                pathname: "/search",
                search: values
              }}
              className="btn orange lighten-1 center-align"
              style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
            >
              Search
            </Link>
            <h6>Username: asli, Password: 12345</h6>
          </div>
          <div className=" col s2 m3 l4" />
        </div>
      </React.Fragment>
    );
  }
}
export default SearchArea;
