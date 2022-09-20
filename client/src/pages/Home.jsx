import Topnav from "../components/Topnav";
import Listing from "../components/Listing";
import Form from "../components/Form";

const Home = ({
  userId,
  theme,
  handleThemeSwitch,
  socket,
  message,
  setMessage,
  messages,
  setMessages,
}) => {
  return (
    <div className="flex min-h-screen max-h-screen h-screen w-screen flex-col">
      <Topnav
        userId={userId}
        theme={theme}
        handleThemeSwitch={handleThemeSwitch}
      />
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
};

export default Home;
