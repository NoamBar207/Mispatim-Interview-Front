import { useState } from "react";
import { PostsList } from "../cmps/blogcmps/PostsList";
import { CommentsList } from "../cmps/blogcmps/CommentsList";

export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState({});
  return (
    <section className="blog-page-container">
      {Object.keys(selectedPost).length ? (
        <CommentsList
          setSelectedPost={setSelectedPost}
          selectedPost={selectedPost}
        />
      ) : (
        <PostsList setSelectedPost={setSelectedPost} />
      )}
    </section>
  );
}
