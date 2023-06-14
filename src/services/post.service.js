import axios from "axios";

export const postsService = {
  getPosts,
  getComments,
};

async function getPosts() {
  const posts = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .catch(() => {
      console.log("error getting posts data");
    });
  return posts;
}

async function getComments(postId) {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .catch(() => {
      console.log("error getting posts data");
    });
  const comments = res.data.filter((com) => {
    if (com.postId === postId) return com;
  });
  return comments;
}
