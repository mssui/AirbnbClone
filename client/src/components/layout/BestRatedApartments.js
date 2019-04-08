import React from "react";
import BestApartmentOne from "./BestApartmentOne";

const BestRatedApartments = ({ posts }) => {
  return (
    <div>
      {posts ? (
        posts.map(post => {
          return <BestApartmentOne post={post} key={post.id} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default BestRatedApartments;
