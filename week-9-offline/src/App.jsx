import { useState } from "react";
import "./App.css";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((item) => (
    <PostComponent
      name={item.name}
      subtitle={item.subtitle}
      time={item.time}
      profilePhoto={item.profilePhoto}
      description={item.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "100xdhavit",
        subtitle: "20,000 followers",
        time: "2m ago",
        profilePhoto:
          "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "Want to know how to win big? Check out these folks who got $6000 bounties on the regular.",
      },
    ]);
  }

  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        height: "100vh",
      }}
    >
      {/* {<ToggleMessage />} */}
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
        <br />
      </div>
    </div>
  );
}

export default App;

// const ToggleMessage = () => {
//   const [isVisible, setIsVisible] = useState(false); // defining a new state
//   // when the value of this state changes
//   // ToggleMessage component re-renders

//   return (
//     <div>
//       <button
//         onClick={() => setIsVisible(!isVisible)}
//         style={{ marginTop: 15 }}
//       >
//         Toggle Message
//       </button>
//       {isVisible && <p>This message is conditionally rendered.</p>}
//     </div>
//   );
// };
