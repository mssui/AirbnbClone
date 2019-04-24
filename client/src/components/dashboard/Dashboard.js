import React, { Component } from "react";
import BestRatedApartments from "../layout/BestRatedApartments";
import SearchArea from "../layout/search/SearchArea";
import TopDestinations from "../layout/TopDestinations";
import Loading from "../layout/Loading";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostAction } from "../../store/actions/fetchPostAction";

class Dashboard extends Component {
  state = {
    start_date: new Date(),
    end_date: new Date()
  };
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

    // Filter the top destination from posts
    const destinations = posts.filter(g => topdest.includes(g.id));

    return (
      <div className="container" style={{ minWidth: "100%" }}>
        <div className="section" style={{ minHeight: "20%" }}>
          <SearchArea
            user={user}
            handleDate={(date, num) =>
              this.setState(
                {
                  start_date: date
                },
                () => {
                  console.log("Dates selected callback", this.state.start_date);
                }
              )
            }
          />
        </div>

        <div className="section">
          <div className="row">
            <div className="col s12 center-align">
              <Link
                to="/apartmentlistings"
                className="btn-large waves-effect waves-light grey lighten-5"
                style={{
                  margin: "10px",
                  borderRadius: "6px",
                  width: "100%"
                }}
              >
                <h6 className="grey-text text-darken-1 center-align">
                  <i className="material-icons">place</i>Best Rated Apartments
                </h6>
              </Link>
            </div>

            <div className="col s12">
              {/* Sort and Slice */}
              {this.props.isLoading ? (
                <Loading />
              ) : (
                <BestRatedApartments posts={bestthree} />
              )}
            </div>
          </div>

          <div className="section">
            <div className="row">
              <div className="col s12 center-align">
                <Link
                  to="/top-destinations"
                  className="btn-large waves-effect waves-light grey lighten-5"
                  style={{
                    margin: "10px",
                    borderRadius: "6px",
                    width: "100%"
                  }}
                >
                  <h6 className="grey-text text-darken-1 center-align">
                    <i className="material-icons">place</i>Most Visited
                    Destinations
                  </h6>
                </Link>
              </div>
              <div className="col s12">
                <TopDestinations posts={destinations} />
              </div>
            </div>
          </div>
          <div className="row center-align">
            <Link
              to="/apartmentlistings"
              className="btn-large waves-effect waves-light grey lighten-5 "
              style={{ margin: "10px", borderRadius: "6px", width: "100%" }}
            >
              <h6 className="grey-text text-darken-1 center-align">
                <i className="material-icons ">place</i>See All Apartment
                Listings
              </h6>
            </Link>
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
