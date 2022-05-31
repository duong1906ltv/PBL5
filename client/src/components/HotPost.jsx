import React from "react";
import { useAppContext } from "../context/appContext";
import BriefPost from "./BriefPost";

function HotPost() {
  const { posts } = useAppContext();

  function getHotPosts() {
    return posts.filter((post) => post.status === "hot");
  }
  const hotPosts = getHotPosts();

  return (
    <div className="hot-content">
      <h3>Hot Posts</h3>
      <div className="posts">
        {hotPosts.map((post) => (
          <BriefPost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HotPost;
