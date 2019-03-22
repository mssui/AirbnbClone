import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/fetchPostAction";

class PostMyApartment extends Component {
  state = {
    title: "",
    content: "",
    country: "",
    city: "",
    isChecked: true
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleCheckChange = (e, item) => {
    const checkedBoxes = [...this.state.checkedBoxes];
    if (e.target.checked) {
      this.state.selectedutils.push(item);
    } else {
      const place = checkedBoxes.findIndex(ch => ch.id === item.id);
      checkedBoxes.splice(place, 1);
    }

    this.setState({ checkedBoxes });

    // console.log("Target ID", e.target.id);
    console.log("checkbox statı:", this.state.checkedBoxes);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPost(this.state);
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
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content"> Content</label>
          </div>
          {/* City / Country Select */}

          <label>Select your Country</label>

          <label>Select your City</label>

         
          {/* Pic Upload */}
          <div className="file-field input-field">
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
          </div>

          <div className="input-field">
            <button
              className="btn pink lighten-1 center-align"
              style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
            >
              Post My Apartment
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
