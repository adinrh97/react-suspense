import React from "react";

const PostDetail = ({resource}) => {
  const postDetails = resource.posts.read();

  return (
    <div>
      <p>
        <span className="user-name">{postDetails.title}</span>
      </p>
      <small>{postDetails.body}</small>
    </div>
  );
};

export default PostDetail;
