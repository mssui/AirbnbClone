import React, { Component } from "react";
import BestRatedApartments from "../layout/BestRatedApartments";
import SearchArea from "../layout/search/SearchArea";
import TopDestinations from "../layout/TopDestinations";
import Loading from "../layout/Loading";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostAction } from "../../store/actions/fetchPostAction";

class Dashboard extends Component {
  state = {};
  componentWillMount() {
    this.props.fetchPostAction();
  }

  render() {
    const posts = this.props.posts;
    const topdest = this.props.topdest;
    const user = this.props.user;

    // Calculate the best rated 3 apartments by sorting from post data

    const bestthree = posts
      .sort(function(a, b) {
        return a.recommended - b.recommended;
      })
      .reverse()
      .slice(0, 4);

    return (
      <div className="container" style={{ minWidth: "100%" }}>
        <div className="section mainbg" style={{ minHeight: "90vh" }}>
          <div className="row">
            <div className=" col m2 l3 center-align" />
            <div
              className=" col s12 m8 l6 center-align personal-bgcolor "
              style={{ marginTop: "4em", padding: "2em", borderRadius: "1em" }}
            >
              <SearchArea {...this.props} />
            </div>
            <div className=" col m2 l3 center-align" />
          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="col s12 center-align gap">
              <Link to="/apartmentlistings">
                <h5 className="grey-text text-darken-1 center-align">
                  <i className="material-icons" style={{ marginTop: "1em" }}>
                    home
                  </i>
                  Best Rated Apartments
                </h5>
                <div class="divider" />
              </Link>
            </div>

            <span id="custom-warning">
              <h5>Please Login to add to your Favourites!</h5>
            </span>
            {/* Sort and Slice */}
            {this.props.isLoading ? (
              <Loading />
            ) : (
              <BestRatedApartments posts={bestthree} />
            )}
          </div>

          <div className="section">
            <div className="row">
              <div className="col s12 center-align gap">
                <h5 className="grey-text text-darken-1 center-align">
                  <i className="material-icons" style={{ marginTop: "1em" }}>
                    place
                  </i>
                  Popular Destinations
                </h5>
                <div class="divider" />
              </div>
              <div className="col s12">
                <TopDestinations
                  posts={posts.filter(g => topdest.includes(g.id))}
                />
              </div>
            </div>
          </div>

          <div class="divider" />
          <div className="section main-banner gap">
            <div className="row">
              <Link
                to="/apartmentlistings"
                className="grey-text text-darken-1 center-align"
              >
                <div
                  className=" col s12 center-align"
                  style={{
                    marginTop: "4em",
                    padding: "2em",
                    borderRadius: "1em"
                  }}
                >
                  <div class="caption center-align top-bg">
                    <h3 class="grey-text text-darken-3">
                      Explore All Listings
                    </h3>
                    <h5 class="light grey-text text-lighten-2">
                      Pick One from Many!
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    isLoading: state.post.isLoading,
    user: state.auth.user,
    topdest: state.post.topdest
  };
};

export default connect(
  mapStateToProps,
  { fetchPostAction }
)(Dashboard);
