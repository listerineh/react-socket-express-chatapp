const Form = ({ socket, message, setMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);

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
