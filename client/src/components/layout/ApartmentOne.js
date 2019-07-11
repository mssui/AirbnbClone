import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToFavs,
  removeFromFavs
} from "../../store/actions/userProfileActions";

class ApartmentOne extends Component {
  handleFavs = post => {
    if (this.props.user_favs.includes(this.props.post)) {
      this.props.removeFromFavs({ post: post, user: this.props.user });
    } else if (this.props.user) {
      this.props.addToFavs({ post: post, user: this.props.user });
    } else {
      // This warning will be shown 1 time only!
      let warning = document.getElementById("custom-warning");
      warning.classList.add("custom-visible");
    }
  };

  render() {
    const { post } = this.props;
    return (
      <div className="col s6 m3 l3">
        <div className="card">
          <div className="card-action">
            <Link
              to={{
                pathname: `/apartments/${post.id}`,
                state: {
                  post: post
                }
              }}
              className="orange-text text-darken-1 "
            >
              {post.title.length > 20
                ? post.title.slice(0, 20) + "..."
                : post.title}
            </Link>
          </div>
          {post ? (
            <div className="card-image" style={{ overflow: "hidden" }}>
              <div className="icon-holder">
                <i
                  className="fa fa-heart fa-2x"
                  id={
                    this.props.user_favs && this.props.user_favs.includes(post)
                      ? "heartfull"
                      : "heart"
                  }
                  onClick={() => this.handleFavs(post)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <img
                src={post ? post.img[0] : "https://via.placeholder.com/500"}
                alt={post.title}
              />
            </div>
          ) : (
            <h4>Loading...</h4>
          )}

          <div className="card-content">
            <p>{post.body.slice(0, 60)}...</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  user_favs: state.profile.user_favs
});

const mapDispatchToProps = dispatch => {
  return {
    addToFavs: data => dispatch(addToFavs(data)),
    removeFromFavs: id => dispatch(removeFromFavs(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentOne);
