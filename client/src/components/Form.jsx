const Form = ({ socket, message, setMessage, messages, setMessages }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);

    const newMessage = {
      body: message,
      from: "me",
    };

    setMessages([newMessage, ...messages]);
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Form;
