import React, { Component } from "react";
import BestRatedApartments from "../layout/BestRatedApartments";
import SearchArea from "../layout/search/SearchArea";
import TopDestinations from "../layout/TopDestinations";
import Loading from "../layout/Loading";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostAction } from "../../store/actions/fetchPostAction";

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchPostAction();
    console.log("Component will mount", this.props);
    console.log("is loading?:", this.props.isLoading);
  }

  render() {
    console.log(this.props.posts);
    const posts = this.props.posts;
    const user = this.props.user;
    const bestthree = posts
      .sort(function(a, b) {
        return a.recommended - b.recommended;
      })
      .reverse()
      .slice(0, 3);

    return (
      <div className="container" style={{ minWidth: "100%" }}>
        <div className="section" style={{ minHeight: "20%" }}>
          <SearchArea user={user} />
        </div>

        <div className="divider" />
        <div className="section">
          <div className="row">
            <div className="col s12">
              {/* Sort and Slice */}
              {this.props.isLoading ? (
                <Loading />
              ) : (
                <BestRatedApartments posts={bestthree} />
              )}

              <Link
                to="/apartmentlistings"
                className="btn-large waves-effect waves-light red"
              >
                <i className="material-icons left">place</i>Best Rated Apartment
                Listings
              </Link>
            </div>
          </div>
          <div className="divider" />

          <div className="section">
            <div className="row">
              <div className="col s12">
                <TopDestinations posts={posts} />
                <Link
                  to="/top-destination"
                  className="btn-large waves-effect waves-light red"
                >
                  <i className="material-icons left">place</i>See All Top
                  Destinations
                </Link>
              </div>
            </div>
          </div>
          <div className="row center-align">
            <Link
              to="/apartmentlistings"
              className="btn-large waves-effect waves-light red "
            >
              <i className="material-icons left">place</i>See All Apartment
              Listings
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // "Project" rootreducerdaki adı, "projects" project reducerda, statetin içinde bulunan arrayin adı
    posts: state.post.posts,
    isLoading: state.post.isLoading,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { fetchPostAction }
)(Dashboard);
