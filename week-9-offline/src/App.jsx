import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <PostComponent />
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
};

function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={
            "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          }
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 14, marginLeft: 10 }}>
          <b>100xdhavit</b>
          <div>23,000 followers</div>
          <div>12m</div>
        </div>
      </div>

      <div style={{ fontSize: 16 }}>
        Want to know how to win big? Check out these folks who got $6000
        bounties on the regular.
      </div>
    </div>
  );
}

export default App;
