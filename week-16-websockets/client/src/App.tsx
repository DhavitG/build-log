import { useEffect, useRef, useState } from "react";

function App() {
  const [socket, setSocket] = useState<WebSocket>();
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket) return;

    const message = inputRef.current?.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..." />
      <button className="font-semibold text-3xl" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default App;
