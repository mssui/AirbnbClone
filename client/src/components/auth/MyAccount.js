import React, { Component } from "react";
import Loading from "../layout/Loading";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchPosts,
  fetchBookings,
  fetchFavs
} from "../../store/actions/userProfileActions";
import BestRatedApartments from "../layout/BestRatedApartments";

class MyAccount extends Component {
  state = {};
  componentWillMount() {
    const userId = this.props.match.params.id;
    this.props.fetchPosts(userId);
    this.props.fetchFavs(userId);
    //this.props.fetchBookings(userId);
  }

  render() {
    const userPosts = Array.from(this.props.user_posts);
    const userFavs = Array.from(this.props.user_favs);

    return (
      <div>
        <h3>USER ACCOUNT PAGE</h3>
        <div className="col s12">
          <h6>Your active Apartment Listings</h6>
          {this.props.user_posts_loading ? (
            <Loading />
          ) : (
            <div className="col s4">
              <BestRatedApartments posts={userPosts} />
            </div>
          )}
        </div>
        <div className="col s12">
          <h6>Your Favourites</h6>
          {this.props.user_favs_loading ? (
            <Loading />
          ) : (
            <div className="col s4">
              <BestRatedApartments posts={userFavs} />
            </div>
          )}
        </div>
        <div className="col s12">
          <h6>Your Bookings</h6>
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
