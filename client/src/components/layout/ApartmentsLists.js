import React, { Component } from "react";
import ApartmentOne from "./ApartmentOne";
import { connect } from "react-redux";
import { fetchPostAction } from "../../store/actions/fetchPostAction";

class ApartmentsLists extends Component {
  componentWillMount() {
    this.props.fetchPostAction();
    console.log("Component will mount", this.props);
  }

  render() {
    const posts = this.props.posts;
    return (
      <div className="section">
        <div className="row">
          <div className="col s12">
            {posts &&
              posts.map(post => {
                return <ApartmentOne post={post} key={post.id} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // "Project" rootreducerdaki adı, "projects" project reducerda, statetin içinde bulunan arrayin adı
    posts: state.post.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPostAction }
)(ApartmentsLists);
