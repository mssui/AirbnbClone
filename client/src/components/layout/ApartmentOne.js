import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToFavs,
  removeFromFavs
} from "../../store/actions/userProfileActions";

class ApartmentOne extends Component {
  handleFavs = id => {
    if (this.props.user_favs.includes(this.props.post.id)) {
      this.props.removeFromFavs({ id: id, user: this.props.user });
    } else if (this.props.user) {
      this.props.addToFavs({ id: id, user: this.props.user });
    } else {
      // This warning will be shown 1 time only!
      let warning = document.getElementById("custom-warning");
      warning.classList.add("custom-visible");
      // setTimeout(function() {
      //   warning.classList.remove("custom-visible");
      //   warning.classList.add("custom-hidden");
      // }, 3000);
    }
  };

  render() {
    const { post } = this.props;
    console.log(post);
    return (
      <div className="col s6 m3 l3">
        <div className="card">
          <div
            className="card-image"
            style={{ height: "200px", overflow: "hidden" }}
          >
            <div className="icon-holder">
              <i
                className="fa fa-heart fa-2x"
                id={
                  this.props.user_favs.includes(post.id) ? "heartfull" : "heart"
                }
                onClick={() => this.handleFavs(post.id)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <img
              src={post ? post.img[0] : "https://via.placeholder.com/500"}
              alt={post.title}
            />
            <span className="card-title" />
          </div>
          <div className="card-content">
            <div className="right" />
            <p>{post.body.slice(0, 120)}...</p>
          </div>
          <div className="card-action">
            <Link to={"/apartments/" + post.id}>
              {post.title.length > 19
                ? post.title.slice(0, 19) + "..."
                : post.title}
            </Link>
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
