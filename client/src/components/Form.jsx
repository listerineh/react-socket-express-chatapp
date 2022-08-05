import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

const Form = ({ socket, message, setMessage, messages, setMessages }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);

    const date = new Date();
    const newMessage = {
      body: message,
      from: "me",
      time: `${date.getHours()}:${date.getMinutes()}`,
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <div className="flex h-1/6 text-center items-center justify-center bg-gray-50 dark:bg-zinc-700">
      <form onSubmit={handleSubmit} className="w-full px-10">
        <div className="relative">
          <input
            type="search"
            id="search"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="block py-4 pl-8 w-full text-sm text-gray-900 dark:text-gray-50 bg-white dark:bg-black rounded-lg border border-gray-300 dark:border-zinc-700"
            placeholder="Message"
            autoComplete="off"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2"
          >
            <ChevronDoubleRightIcon
              className="block h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
