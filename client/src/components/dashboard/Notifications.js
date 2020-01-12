import React, { Component } from "react";
import { connect } from "react-redux";
import { notify } from "../../store/actions/notify";

class Notifications extends Component {
  increment = id => {
    console.log(id);
    this.props.notify(id);
  };
  render() {
    console.log("From notification component", this.props.likes);

    const { likes } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          {likes.map(like => {
            return (
              <div key={like.id}>
                {like.person} - {like.likecount} - artır{" "}
                <i
                  className="fas fa-arrow-circle-up"
                  onClick={() => {
                    this.increment(like.id);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    likes: state.likes.likes
  };
};

const mapDispatchToProps = dispatch => {
  return { notify: id => dispatch(notify(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
