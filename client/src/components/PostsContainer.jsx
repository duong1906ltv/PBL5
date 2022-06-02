import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import HotPost from "./HotPost";
import NewPost from "./NewPost";
import Loading from "./Loading";

function PostsContainer() {
  const { getPosts, isLoading } = useAppContext();
  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <div className="contents">
      <HotPost />
      <NewPost />
    </div>
  );
}

export default PostsContainer;
