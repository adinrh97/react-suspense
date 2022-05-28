import { Suspense, useState } from "react";
import PostDetail from "./components/PostDetail";
import UserList from "./components/UserList";
import fetcher from "./helper/fetcher";

function getNextId(id) {
  return id + 1;
}

export function fetchData(id) {
  let userPromise = fetcher("https://jsonplaceholder.typicode.com/users");
  let postsPromise = fetcher(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return {
    id,
    user: userPromise,
    posts: postsPromise
  };
}

const initialResource = fetchData(1);

const App = () => {
  const [resource, setResource] = useState(
    initialResource
  );

  return (
    <div className="app">
      <h2>React Suspense Data Fetching</h2>
      <button
        onClick={() => {
          const nextId = getNextId(resource.id);
          setResource(
            fetchData(nextId)
          );
        }}
      >
        Next
      </button> 
      <Suspense fallback={<p>Loading post</p>}>
        <PostDetail resource={resource} />
      </Suspense>
      <Suspense fallback={<p>Loading user list</p>}>
        <UserList resource={resource} />
      </Suspense>
    </div>
  );
};

export default App;
