import { useEffect, useState } from "react";
import { postsService } from "../../services/post.service";
import { PostPrev } from "./PostPrev";

export function CommentsList({ selectedPost, setSelectedPost }) {
  const [commentsState, setCommentsState] = useState([]);
  useEffect(() => {
    getCommentsDate();
  }, []);

  const getCommentsDate = async () => {
    const res = await postsService.getComments(selectedPost.id);
    const comments = res;
    setCommentsState(comments);
  };

  return (
    <section className="comments-list-container">
      <PostPrev post={selectedPost} />
      <div className="list-container">
        {commentsState.map((comment) => {
          return <div key={comment.id}>{comment.body}</div>;
        })}
      </div>
      <div className="util-btn" onClick={() => setSelectedPost({})}>
        Return To Posts
      </div>
    </section>
  );
}
