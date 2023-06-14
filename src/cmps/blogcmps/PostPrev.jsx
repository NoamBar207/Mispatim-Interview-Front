export function PostPrev({ post, setSelectedPost }) {
  return (
    <div
      className="post-prev-container"
      key={post.id}
      onClick={() => setSelectedPost(post)}
    >
      <h1>{post.title}</h1>
      <h4>{post.body}</h4>
    </div>
  );
}
