import React from "react";
import { usePostsContext } from "./PostsProvider";

export default function PostsContainerComponent() {
  const { posts, addPost, deleteFirstPost, isLoading, error } =
    usePostsContext();

  return (
    <div className="container py-2">
      <button onClick={addPost} className="btn btn-success mx-2">
        Add post
      </button>
      <button onClick={deleteFirstPost} className="btn btn-danger mx-2">
        Delete first post
      </button>
      <button
        onClick={() => deleteFirstPost(10)}
        className="btn btn-danger mx-2"
      >
        Delete first 10 posts
      </button>
      {/* <Demo /> */}
      <h1 className="mb-2 ms-3">Data fetching in React</h1>
      {error && <p>{error}</p>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
