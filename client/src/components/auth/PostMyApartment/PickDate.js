import React, { Component } from "react";
import moment from "moment";
import "./calendar.css";

class PickDate extends Component {
  fillArray = (arr, times) => {
    for (var i = 0; i < times; i++) {
      arr.push(<li key={"a" + i} />);
    }
    return arr;
  };
  dateStart = extra => {
    var thisyear = moment().year();

    var thismonth = (moment().month() + extra).toString();
    var first = moment([thisyear, thismonth]).startOf("month");
    return first.day() % 6 === 0 ? first.day(1) : first;
  };

  createTable = (theday, next) => {
    var thisyear = moment().year();
    let monthy = "0" + (moment().month() + next).toString(); // Tek haneli ise önüne sıfır ekleyecek bir fonksiyon yaz
    let total = moment(monthy, "MM").daysInMonth();
    let children = [];

    switch (theday) {
      case "Monday":
        break;
      case "Tuesday":
        this.fillArray(children, 1);
        break;
      case "Wednesday":
        this.fillArray(children, 2);
        break;
      case "Thursday":
        this.fillArray(children, 3);
        break;
      case "Friday":
        this.fillArray(children, 4);
        break;
      case "Saturday":
        this.fillArray(children, 5);
        break;
      case "Sunday":
        this.fillArray(children, 6);
        break;
        case "default":
        break;
    }

    //Inner loop to create children
    for (let j = 0; j < total; j++) {
      children.push(
        <li
          key={j}
          value={(thisyear + "-" + monthy + "-" + (j + 1)).toString()}
          onClick={e => this.props.handleCalender(e)}
        >{`${j + 1}`}</li>
      );
    }

    return children;
  };

  render() {
    var currMonthName = moment().format("MMMM");
    var secondMonthName = moment()
      .add(1, "month")
      .format("MMMM");
    var thirdMonthName = moment()
      .add(2, "month")
      .format("MMMM");

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <p
              style={{
                fontStyle: "italic",
                fontSize: "24px",
                color: "lightgrey"
              }}
            >
              <i className="material-icons" style={{ marginTop: "5px" }}>
                info_outline
              </i>
              We have selected everyday for the next 3 months as available.
              Please remove the unavailable dates by clicking on it.
            </p>
          </div>
        </div>
        <div id="first-month">
          <div className="month">
            <ul>
              <li>
                <span style={{ fontSize: "20px" }}> {currMonthName}</span>
                <br />
                {moment().year()}
              </li>
            </ul>
          </div>
          <ul className="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
          </ul>
          <ul className="days">
            {this.createTable(this.dateStart(0).format("dddd"), 1)}
          </ul>
        </div>
        <div id="second-month">
          <div className="month">
            <ul>
              <li>
                <span style={{ fontSize: "20px" }}> {secondMonthName}</span>
                <br />
                {moment().year()}
              </li>
            </ul>
          </div>
          <ul className="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
          </ul>
          <ul className="days">
            {this.createTable(this.dateStart(1).format("dddd"), 2)}
          </ul>
        </div>
        <div id="third-month">
          <div className="month">
            <ul>
              <li>
                <span style={{ fontSize: "20px" }}> {thirdMonthName}</span>
                <br />
                {moment().year()}
              </li>
            </ul>
          </div>
          <ul className="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
          </ul>
          <ul className="days">
            {this.createTable(this.dateStart(2).format("dddd"), 3)}
          </ul>
        </div>
      </div>
    );
  }
}
export default PickDate;
