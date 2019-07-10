import React, { Component } from "react";
import Loading from "../layout/Loading";
import { connect } from "react-redux";
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
      <div className="container">
        <h5>Profile Page</h5>
        <div className="section">
          <div
            style={{
              border: "0.5px solid gray",
              borderRadius: "12px",
              marginBottom: "5px"
            }}
          >
            <h5 className="grey-text text-darken-1 center-align">
              Your Active Apartment Listings
            </h5>
          </div>
          <div className="row col s12">
            {this.props.user_posts_loading ? (
              <Loading />
            ) : (
              <BestRatedApartments posts={userPosts} />
            )}
          </div>
        </div>
        <div className="section">
          <div className="row col s12">
            <div
              style={{
                border: "0.5px solid gray",
                borderRadius: "12px",
                marginBottom: "5px"
              }}
            >
              <h5 className="grey-text text-darken-1 center-align">
                Your Favourites
              </h5>
            </div>
            {this.props.user_favs_loading ? (
              <Loading />
            ) : (
              <BestRatedApartments posts={userFavs} />
            )}
          </div>
        </div>
        <div className="section">
          <div className="row col s12">
            <div
              style={{
                border: "0.5px solid gray",
                borderRadius: "12px",
                marginBottom: "5px"
              }}
            >
              <h5 className="grey-text text-darken-1 center-align">
                Your Bookings
              </h5>
            </div>
          </div>
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
