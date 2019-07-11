import React from "react";
import TopDestinationsOne from "./TopDestinationsOne";

const TopDestinations = ({ posts }) => {
  return (
    <div className="row">
      {posts ? (
        posts.map(post => {
          return <TopDestinationsOne post={post} key={post.id} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default TopDestinations;
