export default function App4_children() {
  return (
    <div style={{ display: "flex", backgroundColor: "gray" }}>
      <Card>
        <div style={{ color: "green" }}>
          What do you want to post?
          <br /> <br />
          <input type={"text"} />
        </div>
      </Card>

      <Card>
        <div>hi there</div>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "lightBlue",
        borderRadius: 10,
        color: "white",
        padding: 10,
        margin: 10,
      }}
    >
      {children}
    </div>
  );
}
