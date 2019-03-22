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

      {/* {isEmpty
  ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
  : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
      <Posts posts={posts} />
    </div>
} */}
    </div>
  );
};
export default BestRatedApartments;
