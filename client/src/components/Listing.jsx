const Listing = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index}>
          <p>
            {message.from}: {message.body}
          </p>
        </div>
      ))}
    </>
  );
};

export default Listing;
