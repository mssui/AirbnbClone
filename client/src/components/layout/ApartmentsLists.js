import React from "react";
import ApartmentOne from "./ApartmentOne";

const ApartmentsLists = ({ posts }) => {
  return (
    <div className="project-list section">
      {posts &&
        posts.map(post => {
          return <ApartmentOne post={post} key={post.id} />;
        })}
    </div>
  );
};

export default ApartmentsLists;
