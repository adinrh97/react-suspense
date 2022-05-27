import { Suspense } from "react";
import PostDetail from "./components/PostDetail";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="app">
      <h2>React Suspense Data Fetching</h2>
      <Suspense fallback={<p>Loading post</p>}>
        <PostDetail />
      </Suspense>
      <Suspense fallback={<p>Loading user list</p>}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default App;
