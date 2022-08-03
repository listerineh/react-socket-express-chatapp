import { useState, useEffect } from "react";
import io from "socket.io-client";
import Form from "./components/Form";
import Listing from "./components/Listing";

const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const reciveMessage = (msg) => setMessages([...messages, msg]);
    socket.on("message", reciveMessage);

    return () => socket.off("message", reciveMessage);
  }, [messages]);

  return (
    <div className="h-screen text-white">
      <Listing messages={messages} />
      <Form
        socket={socket}
        message={message}
        setMessage={setMessage}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}

export default App;
