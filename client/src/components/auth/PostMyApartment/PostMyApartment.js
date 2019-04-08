import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../../store/actions/fetchPostAction";
import PickDate from "./PickDate";

class PostMyApartment extends Component {
  componentWillMount() {}
  state = {
    title: "",
    slug: "",
    body: "",
    img: [], // Upload companent will be replaced
    addedBy: {
      username: ""
    },
    address: {
      country: "",
      city: "",
      all: ""
    },
    availability: {
      // Pick availablity will be replaced
      start: "2016-05-18",
      end: "2016-09-18"
    },
    not_available: []
  };

  handleChange = e => {
    if (
      e.target.id === "country" ||
      e.target.id === "city" ||
      e.target.id === "all"
    ) {
      let address = Object.assign({}, this.state.address);
      address[e.target.id] = e.target.value;
      this.setState({ address });
    } else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">List your apartment</h5>
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
              className="btn pink lighten-1 center-align"
              style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
            >
              Post My apartment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { createPost: project => dispatch(createPost(project)) };
};

export default connect(
  null,
  mapDispatchToProps
)(PostMyApartment);
