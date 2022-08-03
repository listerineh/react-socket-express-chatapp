const Listing = ({ messages }) => {
  return (
    <div className="bg-indigo-100 h-5/6 overflow-y-scroll scroll-smooth">
      <div className="flow-root p-5">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.from.startsWith("me") ? "float-right" : "float-left"
            } bg-white w-1/2 text-black rounded-lg shadow p-2 m-2 break-words`}
          >
            <span className="text-sm text-indigo-600">{message.from}</span>:
            <br />
            {message.body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
