import React from "react";
import ApartmentOne from "./ApartmentOne";

const BestRatedApartments = ({ posts }) => {
  console.log("Best Apartmentsa gelen postlar", posts);
  return (
    <div className="row">
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
