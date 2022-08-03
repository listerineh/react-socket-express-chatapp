const Listing = ({ messages }) => {
  const formatedDate = (date) => {
    const splittedDate = date.split(":");
    var hours = Number(splittedDate[0]);
    var minutes = Number(splittedDate[1]);

    var newformat = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${newformat}`;
  };

  return (
    <div className="bg-indigo-100 h-5/6 overflow-y-scroll scroll-smooth">
      <div className="flow-root p-5">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.from.startsWith("me") ? "float-right" : "float-left"
            } bg-white w-1/2 text-black rounded-lg shadow py-2 px-3 m-2 break-words`}
          >
            <span className="text-sm text-indigo-600">{message.from}</span>:
            <br />
            {message.body}
            <br />
            <div className="text-right text-indigo-800 font-semibold text-xs">
              {formatedDate(message.time)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
