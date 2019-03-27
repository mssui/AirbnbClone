import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostAction } from "../../store/actions/fetchPostAction";
import { checkAvailability } from "../../store/actions/availabilityAction";
import { bookProperty } from "../../store/actions/bookingAction";
import { Link } from "react-router-dom";
import { store } from "../../index.js";

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
      start: "2016-05-1",
      end: "2016-05-6"
    }
  };

  reserve = e => {
    // Burada actionı çagır
    e.preventDefault();
    this.props.bookProperty(this.state);
    console.log(this.state);
  };
  render() {
    console.log(this.props.posts);
    let id = this.props.match.params.id;
    const newy = this.props.posts.find(post => post.id === id);
    console.log(newy);
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
              <div className="row input-field col s4">
                <input
                  placeholder="Start Date"
                  id="first_name"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="row input-field col s4">
                <input
                  placeholder="End Date"
                  id="first_name"
                  type="text"
                  className="validate"
                />
              </div>
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
