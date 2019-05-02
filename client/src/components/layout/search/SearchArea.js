import React, { Component } from "react";
import { Link } from "react-router-dom";
import Increment from "./Increment";
import WhereTo from "./WhereTo";
import StartCalendar from "./StartCalendar";
import EndCalendar from "./EndCalendar";
import countries from "./countries.json";
import moment from "moment";

class SearchArea extends Component {
  state = {
    start_date: new Date(),
    end_date: new Date(),
    guest_num: 1,
    infoData: countries,
    filteredData: [],
    searchTerm: ""
  };

  filteredData = () => {
    let term = this.state.searchTerm;
    let newData = this.state.infoData.filter(item => {
      return item.key.toLowerCase().search(term.toLowerCase()) !== -1;
    });
    this.setState({ filteredData: newData }, () =>
      console.log(this.state.searchTerm)
    );
  };
  handleEndDate = e => {
    var formatEnd = moment(e).format("DD-MM-YYYY");
    this.setState({ end_date: formatEnd }, () => {});
  };
  handleStartDate = e => {
    var formatStart = moment(e).format("DD-MM-YYYY");
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
    return (
      <React.Fragment>
        <div className="row s12 center-align">
          {this.props.user ? (
            <div>Welcome {this.props.user}</div>
          ) : (
            <div>
              <h5 className="grey-text text-darken-1 center-align">
                Welcome Guest, Wanna <Link to="/signup"> join?</Link>
              </h5>
              <h6>For test Username: asli, Password: 12345</h6>
            </div>
          )}
        </div>
        <div className="row col s12 center-align">
          <div className=" col s2 " />

          <form>
            <div className="input-field col s4 ">
              <WhereTo
                onInputChange={val =>
                  this.setState({ searchTerm: val }, () => {
                    this.filteredData();
                  })
                }
              />
            </div>
          </form>
          <div className="input-field col s4 " style={{ marginTop: "10px" }}>
            <Increment
              counter={this.state.guest_num}
              increment={this.incrementGuestNumber}
              decrement={this.decrementGuestNumber}
            />
          </div>
          <div className=" col s2 " />
        </div>
        <div className="row col s12 center-align">
          <div className=" col s2 " />
          <StartCalendar
            placeholder={"Start Date"}
            handleDate={this.handleStartDate}
          />
          <EndCalendar
            placeholder={"End Date"}
            handleDate={this.handleEndDate}
          />
          <div className=" col s2 " />
        </div>
      </React.Fragment>
    );
  }
}
export default SearchArea;
