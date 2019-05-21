import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostAction } from "../../store/actions/fetchPostAction";
import { checkAvailability } from "../../store/actions/availabilityAction";
import { bookProperty } from "../../store/actions/bookingAction";
import { Link } from "react-router-dom";
import { store } from "../../index.js";
import StartCalendar from "./search/StartCalendar.js";
import EndCalendar from "./search/EndCalendar.js";
import moment from "moment";

class ApartmentDetails extends Component {
  componentDidMount() {
    this.props.fetchPostAction();
    console.log("Component will mount", this.props);
  }
  state = {
    property: this.props.match.params.id,
    user: store.getState().auth.user,
    num_guests: 2, // will pick by form after
    payedwith: "MasterCard",
    date: {
      start: new Date(),
      end: new Date()
    }
  };
  handleEndDate = e => {
    var formatEnd = moment(e).format("DD-MM-YYYY");
    let date = Object.assign({}, this.state.date);
    date.start = formatEnd;
    this.setState({ date });
  };
  handleStartDate = e => {
    var formatStart = moment(e).format("DD-MM-YYYY");
    let date = Object.assign({}, this.state.date);
    date.start = formatStart;
    this.setState({ date });
  };
  reserve = e => {
    e.preventDefault();
    this.props.bookProperty(this.state);
  };
  render() {
    const allPosts = Array.from(this.props.posts);
    let id = this.props.match.params.id;
    const newy = allPosts.find(post => post.id === id);
    const mesaj = this.props.msg;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            {newy ? (
              <img
                className="responsive-img"
                src={newy.img[0]}
                style={{ minWidth: "100%" }}
              />
            ) : null}
            <div
              className="row col s12 center-align"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <StartCalendar
                placeholder={"Start Date"}
                handleDate={this.handleStartDate}
              />
              <EndCalendar
                placeholder={"End Date"}
                handleDate={this.handleEndDate}
              />
              <div className="row col s4">
                <Link
                  to="/apartmentlistings"
                  className="btn-large waves-effect waves-light red "
                >
                  <i className="material-icons left">card_travel</i>BOOK NOW
                </Link>
              </div>
              <a
                className="waves-effect waves-light btn-large "
                onClick={this.props.checkAvailability}
              >
                Show me available dates
              </a>

              <a
                className="waves-effect waves-light btn-large "
                onClick={this.reserve}
              >
                Send my booking dates
              </a>
              {mesaj ? <div> {mesaj}</div> : null}
            </div>

            <span className="card-title">
              {newy ? <div> {newy.title}</div> : null}
            </span>
            {newy ? <div> {newy.body}</div> : null}
            <span> {newy ? <div> {newy.body}</div> : null}</span>
          </div>
          <div className="card-action grey lighten-4 grey-text right-align">
            <div>
              <h6>Property Owner: </h6>
              {newy ? <div> {newy.addedby}</div> : null}
            </div>
            <div>date</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    booking: state.booking.msg
  };
};

const mapDispatchToProps = dispatch => ({
  checkAvailability: select => dispatch(checkAvailability(select)),
  fetchPostAction: () => dispatch(fetchPostAction()),
  bookProperty: params => dispatch(bookProperty(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentDetails);
