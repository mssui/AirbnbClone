import React, { Component } from "react";
import axios from "axios";

class SearchResults extends Component {
  state = {};
  componentDidMount() {
    // Test Call. Will be siapatched as an action
    axios.get(`search${this.props.location.search}`).then(data => {
      console.log("Axios test data", data);
    });
  }

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <h1>Search result will be shown on this component</h1>
      </React.Fragment>
    );
  }
}
export default SearchResults;
