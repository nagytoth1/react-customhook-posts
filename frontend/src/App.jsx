import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import DropdownPosts from "./DropdownPosts";
import "./index.css";
import PostsContainerComponent from "./PostsContainerComponent";
import { PostsProvider } from "./PostsProvider";

function App() {
  return (
    <>
      <PostsProvider>
        {/* navbar component containing the posts (to navigate to a single post or something) */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2 py-3">
          <DropdownPosts />
        </nav>
        {/* main component containing the posts */}
        <main>
          <PostsContainerComponent />
        </main>
      </PostsProvider>
    </>
  );
}

export default App;
