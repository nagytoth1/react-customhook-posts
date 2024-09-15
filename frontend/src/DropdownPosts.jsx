import React from "react";
import { usePostsContext } from "./PostsProvider";

export default function DropdownPosts() {
  const { posts } = usePostsContext();
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Your posts
      </button>
      <ul className="dropdown-menu">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
