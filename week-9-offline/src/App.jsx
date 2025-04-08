import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        height: "100vh",
      }}
    >
      <ToggleMessage />
      <Greeting name={"100xdhavit"} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent
              name={"100xdhavit"}
              subtitle={"20,000 followers"}
              time={12}
              profilePhoto={
                "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              }
              description={
                "Want to know how to win big? Check out these folks who got $6000 bounties on the regular."
              }
            />
          </div>
          <br />
          <div>
            <PostComponent
              name={"Linkedin Marketing"}
              subtitle={"Promoted"}
              profilePhoto={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
              }
              description={
                "Want to know how to win big? Check out these folks who got $6000 bounties on the regular."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 30,
};

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); // defining a new state
  // when the value of this state changes
  // ToggleMessage component re-renders

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{ marginTop: 15 }}
      >
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered.</p>}
    </div>
  );
};

function Greeting({ name }) {
  return (
    <div style={{ fontSize: 38 }}>
      <b>Hello {name}!</b>
    </div>
  );
}

function PostComponent({ name, subtitle, time, profilePhoto, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={profilePhoto}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 14, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && (
            <div style={{ display: "flex" }}>
              <div>{time}m &#8226;</div>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PpNh5nNkcB83Sfwp-V3NbdJ6bku2T6Kk_g&s"
                }
                style={{ width: 12, height: 12, marginLeft: 2 }}
              />
            </div>
          )}
        </div>
      </div>

      <div style={{ fontSize: 16 }}>{description}</div>
    </div>
  );
}

export default App;
