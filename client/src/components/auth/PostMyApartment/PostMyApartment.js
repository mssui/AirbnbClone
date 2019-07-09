import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../../store/actions/fetchPostAction";
import PickDate from "./PickDate";
import moment from "moment";
import { Redirect } from "react-router-dom";
import FileUpload from "./FileUpload";

class PostMyApartment extends Component {
  componentWillMount() {
    // Today's date
    var dateOfToday = moment();
    this.setState({ start: dateOfToday });

    // Add 90 days to Today's date
    var dateOfNext = moment(dateOfToday).add(90, "days");
    this.setState({ end: dateOfNext });
  }
  state = {
    title: "",
    slug: "",
    body: "",
    img: [], // Upload companent will be replaced
    addedBy: this.props.user,
    address: {
      country: "",
      city: "",
      all: ""
    },
    max_guest_num: "",
    start: new Date(), // Sets onload
    end: new Date(), // Sets onload,
    not_available: []
  };

  handleChange = e => {
    if (
      e.target.id === "country" ||
      e.target.id === "city" ||
      e.target.id === "all"
    ) {
      let address = Object.assign({}, this.state.address);
      address[e.target.id] = e.target.value.toLowerCase();
      this.setState({ address });
    } else {
      this.setState({
        [e.target.id]: e.target.value.toLowerCase()
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPost(this.state);
  };

  render() {
    let user = this.props.user;
    console.log(this.props);
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12">
              <h5 className="grey-text text-darken-1 center-align">
                Fill the form & List your apartment
              </h5>
            </div>
          </div>
        </div>
        <form className="white" onSubmit={this.handleSubmit}>
          {/* Title */}
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title"> Title</label>
          </div>
          {/* Body */}
          <div className="input-field">
            <textarea
              id="body"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="body"> Content</label>
          </div>
          {/* City / Country Select */}

          <div className="input-field">
            <input type="text" id="country" onChange={this.handleChange} />
            <label htmlFor="country"> Write your Country</label>
          </div>

          <div className="input-field">
            <input type="text" id="city" onChange={this.handleChange} />
            <label htmlFor="city"> Write your City</label>
          </div>

          <div className="input-field">
            <input type="text" id="all" onChange={this.handleChange} />
            <label htmlFor="all"> Write your Address</label>
          </div>

          <div className="input-field">
            <input
              type="number"
              id="max_guest_num"
              onChange={this.handleChange}
            />
            <label htmlFor="max_guest_num">How many guests can stay?</label>
          </div>
          {/* Pic Upload */}
          {/* <div className="file-field input-field">
            <div className="btn">
              <span>Browse</span>
              <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload one or more files"
              />
            </div>
          </div> */}
          <div className="section " style={{ minHeight: "10%" }}>
            <PickDate
              handleCalender={e =>
                this.setState(
                  {
                    not_available: [
                      ...this.state.not_available,
                      e.target.getAttribute("value")
                    ]
                  },
                  () => {
                    console.log(
                      "Dates selected callback",
                      this.state.not_available
                    );
                  }
                )
              }
            />
          </div>
          <div className="input-field">
            <button
              className="btn orange lighten-1 center-align"
              style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
            >
              Post My apartment
            </button>
            {this.props.creating === false ? (
              //this.props.store.dispatch(sendMessage(message))
              <Redirect
                to={{
                  pathname: `/profile/${user}`,
                  state: { from: this.props.location }
                }}
              />
            ) : null}
          </div>
        </form>
        <div className="section">
          <div className="row">
            <div className="col s12">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  creating: state.post.creating
});
const mapDispatchToProps = dispatch => {
  return { createPost: project => dispatch(createPost(project)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMyApartment);
