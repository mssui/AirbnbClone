import React, { Component } from "react";
import Loading from "../layout/Loading";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchPosts,
  fetchBookings,
  fetchFavs
} from "../../store/actions/userProfileActions";
import ApartmentsListsbyCountry from "../layout/ApartmentsListsbyCountry";

class MyAccount extends Component {
  state = {};
  componentWillMount() {
    const userId = this.props.match.params.id;
    this.props.fetchPosts(userId);
    //this.props.fetchBookings(userId);
    //this.props.fetchFavs(userId);
  }

  render() {
    const userPosts = Array.from(this.props.user_posts);

    return (
      <div>
        <h1>USER ACCOUNT PAGE</h1>
        <div className="col s12">
          <h3>Your active Apartment Listings</h3>
          {this.props.user_posts_loading ? (
            <Loading />
          ) : (
            <ApartmentsListsbyCountry posts={userPosts} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_posts_loading: state.profile.user_posts_loading,
    user_posts: state.profile.user_posts,
    user_books_loading: state.profile.user_books_loading,
    user_books: state.profile.user_books,
    user_favs_loading: state.profile.user_favs_loading,
    user_favs: state.profile.user_favs
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts, fetchBookings, fetchFavs }
)(MyAccount);
