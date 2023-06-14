import { useEffect, useState } from "react";
import { postsService } from "../../services/post.service";
import { PostPrev } from "./PostPrev";
import { PaginationCmp } from "../utilcmps/PaginationCmp";
import { SectionTitle } from "../utilcmps/SectionTitle";

export function PostsList({ setSelectedPost }) {
  const [postsState, setPostsState] = useState([]);
  const [postsToRender, setPostsToRender] = useState([]);
  useEffect(() => {
    getPostsDate();
  }, []);

  const getPostsDate = async () => {
    const res = await postsService.getPosts();
    const posts = res.data;
    setPostsState(posts);
    setPostsToRender(posts.slice(0, 10));
  };

  return (
    <section className="posts-list-container">
      <SectionTitle title="Posts:" />
      <div className="list-container">
        {postsToRender?.map((post) => {
          return <PostPrev post={post} setSelectedPost={setSelectedPost} />;
        })}
      </div>
      <PaginationCmp
        setRenderItems={setPostsToRender}
        arr={postsState}
        itemsPerPage={10}
      />
    </section>
  );
}
