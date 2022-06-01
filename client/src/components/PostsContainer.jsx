import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import HotPost from "./HotPost";
import NewPost from "./NewPost";

function PostsContainer() {
  const { getPosts, posts, isLoading } = useAppContext();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="contents">
      <HotPost />
      <NewPost />
    </div>
  );
}

export default PostsContainer;
