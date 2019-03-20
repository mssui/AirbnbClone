import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostAction } from "../../store/actions/fetchPostAction";

class ApartmentDetails extends Component {
  componentDidMount() {
    this.props.fetchPostAction();
    console.log("Component will mount", this.props);
  }

  render() {
    console.log(this.props.posts);
    let id = this.props.match.params.id;
    const newy = this.props.posts.find(post => post.id === id);
    console.log(newy);

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            {newy ? <div> {newy.title}</div> : null}
            <span className="card-title"> </span>
            <p>{newy ? <div> {newy.body}</div> : null}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Aslı</div>
            <div>date</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    status: state.status
  };
};
export default connect(
  mapStateToProps,
  { fetchPostAction }
)(ApartmentDetails);
