import { createContext, useContext } from "react";
import usePosts from "./hooks/usePosts"; // Import your custom hook

// Create the context
const PostsContextInstance = createContext();

// Create a provider component
export const PostsProvider = ({ children }) => {
  const post = usePosts(); // Use your custom hook here

  return (
    <PostsContextInstance.Provider value={post}>
      {children}
    </PostsContextInstance.Provider>
  );
};

// Custom hook to consume the PostsContext
export const usePostsContext = () => {
  const context = useContext(PostsContextInstance);
  if (!context) {
    throw new Error("usePostsContext must be used within a PostsProvider");
  }
  return context;
};
