import React, { Component } from "react";
import { connect } from "react-redux";
import { searchResultsAction } from "../../../store/actions/searchResultsAction";
import Loading from "../../layout/Loading";
import axios from "axios";

class SearchResults extends Component {
  state = {};
  componentDidMount() {
    this.props.searchResultsAction(this.props.location.search);
  }

  render() {
    console.log(this.props);
    const searchedPosts = this.props.searched_posts;
    return (
      <React.Fragment>
        <h1>Search result will be shown on this component</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    searched_posts: state.search_results.searched_posts,
    searchLoading: state.search_results.searchLoading
  };
};

const mapDispatchToProps = dispatch => ({
  searchResultsAction: data => dispatch(searchResultsAction(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
