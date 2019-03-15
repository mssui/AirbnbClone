import React, { Component } from "react";

const ApartmentDetails = ({ posts }) => {
  // let id = this.props.match.params.post_id;
  // const post = posts.find(post => post.id === id);
  console.log(this.props.posts);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse,
            cumque in numquam harum optio fuga provident dolores at laboriosam.
            Exercitationem, quasi nobis. Molestiae, odit voluptas excepturi
            earum rerum eaque?
            {posts &&
              posts.map(post => {
                return <div>{post.title}</div>;
              })}
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Aslı</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
