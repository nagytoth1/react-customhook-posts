import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "https://jsonplaceholder.typicode.com";
export default function usePosts() {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  // handle race condition
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      // previous request is cancelled before firing the new one
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);

      try {
        console.debug("fetchel");
        const response = await fetch(`${BASE_URL}/posts`, {
          signal: abortControllerRef.current?.signal,
        });
        const responseJson = await response.json();
        setPosts(responseJson);
      } catch (error) {
        if (error.name === "AbortError") {
          console.debug("request aborted");
          return;
        }

        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const addPost = () => {
    setCounter(counter + 1);
    setPosts((prevPosts) => [...prevPosts, { id: uuidv4(), title: `Post` }]);
  };
  const deleteFirstPost = () => {
    setPosts((prevPosts) => prevPosts.slice(1));
  };

  return { posts, error, addPost, deleteFirstPost, isLoading };
}
