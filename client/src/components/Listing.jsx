import { useEffect, useRef } from "react";

const Listing = ({ messages }) => {
  const messagesEndRef = useRef(null);
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="bg-indigo-100 dark:bg-zinc-900 h-4/6 overflow-auto scroll-smooth">
      <div className="flow-root p-5">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.from.startsWith("server")
                ? "float-left bg-indigo-300 dark:bg-indigo-400 w-1/2 text-white"
                : message.from.startsWith("me")
                ? "float-right bg-white dark:bg-black w-1/2 text-black dark:text-white"
                : "float-left bg-white dark:bg-black w-1/2 text-black dark:text-white"
            }  rounded-lg shadow py-2 px-3 m-2 break-words`}
          >
            <div className="text-sm text-indigo-600">{message.from}</div>
            <div className="">{message.body}</div>
            <div className="text-right text-indigo-800 font-semibold text-xs">
              {formatedDate(message.time)}
            </div>
          </div>
        ))}
      </div>

      <div ref={messagesEndRef} />
    </div>
  );
};

export default Listing;
