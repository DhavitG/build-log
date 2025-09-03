import { useEffect, useRef, useState } from "react";

function App() {
  const [messages, setMessages] = useState(["hi there", "hello"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket | null>(null);

  function sendMessage() {
    if (!wsRef.current) return;

    const message = inputRef.current?.value;
    if (!message) return;

    wsRef.current.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message: message,
        },
      })
    );

    if (inputRef.current) inputRef.current.value = "";
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      // Join a default room
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "general",
          },
        })
      );
    };

    ws.onmessage = (e) => {
      setMessages((m) => [...m, e.data]);
    };

    console.log(messages);
    wsRef.current = ws;
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col justify-between">
      <div className="h-[95vh]">
        {messages.map((message, i) => (
          <div className="m-8" key={i}>
            <span className="bg-white text-black rounded p-4">{message}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-white p-4 flex mb-2">
        <input ref={inputRef} type="text" className="flex-1 border p-2 mr-2" />
        <button
          className="bg-black text-white cursor-pointer p-2"
          onClick={sendMessage}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default App;
