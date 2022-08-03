import { useState, useEffect } from "react";
import io from "socket.io-client";
import Form from "./components/Form";
import Listing from "./components/Listing";
import "./App.css";

const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const reciveMessage = (message) => console.log(message);

    socket.on("message", reciveMessage);

    return () => socket.off("message", reciveMessage);
  }, []);

  return (
    <div className="App">
      <Form socket={socket} message={message} setMessage={setMessage} />
      <Listing />
    </div>
  );
}

export default App;
