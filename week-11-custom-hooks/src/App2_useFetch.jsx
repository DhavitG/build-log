import { useFetch, usePostTitle } from "./hooks/useFetch";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentPost, setCurrentPost] = useState(1);

  const post = usePostTitle();
  const { finalData, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${currentPost}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      <hr />
      {post.title}
      <hr />
      {finalData.title}
    </div>
  );
}

export default App;
