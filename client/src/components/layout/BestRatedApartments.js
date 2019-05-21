import React from "react";
import ApartmentOne from "./ApartmentOne";

const BestRatedApartments = ({ posts }) => {
  return (
    <div>
      {posts ? (
        posts.map(post => {
          return <ApartmentOne post={post} key={post.id} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default BestRatedApartments;
