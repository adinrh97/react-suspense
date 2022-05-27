import React from "react";
import fetcher from "../helper/fetcher";

const resource = fetcher("https://jsonplaceholder.typicode.com/posts/1");

const PostDetail = () => {
  const postDetails = resource.read();

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
