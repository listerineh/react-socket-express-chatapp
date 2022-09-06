import { useState, useEffect } from "react";
import io from "socket.io-client";
import Home from "./pages/Home";
import Login from "./pages/Login";

const socket = io("http://localhost:4000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const [logged, setLogged] = useState(false);

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const reciveConnection = (userId) => {
      setUserId(userId);
    };
    socket.on("connection", reciveConnection);

    return () => socket.off("connection", reciveConnection);
  }, []);

  useEffect(() => {
    const reciveMessage = (msg) => setMessages([...messages, msg]);
    socket.on("message", reciveMessage);

    return () => socket.off("message", reciveMessage);
  }, [messages]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return logged ? (
    <Home
      userId={userId}
      theme={theme}
      handleThemeSwitch={handleThemeSwitch}
      socket={socket}
      message={message}
      setMessage={setMessage}
      messages={messages}
      setMessages={setMessages}
    />
  ) : (
    <Login socket={socket} logged={logged} setLogged={setLogged} />
  );
}

export default App;
