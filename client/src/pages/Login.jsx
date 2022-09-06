import { useState } from "react";

const Login = ({ socket, logged, setLogged }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleRegister = () => {
    setRegister(!register);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      socket.emit("register", { user: user, password: password });
    } else {
      socket.emit("login", { user: user, password: password });
      socket.on("login", function (finded) {
        setLogged(finded);
      });
    }

    setUser("");
    setPassword("");
  };

  return (
    <div className="grid h-screen place-items-center bg-gray-50 dark:bg-zinc-900 text-black dark:text-white px-5">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Socket Chat App</h1>
        <h1 className="text-2xl font-semibold text-indigo-500 mt-2">
          {register ? "Register page" : "Login page"}
        </h1>
        <form
          className="grid grid-flow-row mt-5 bg-indigo-500 px-5 py-7 rounded-xl gap-2"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-3 gap-4">
            <label htmlFor="user" className="text-right py-1">
              User
            </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              name="user"
              id="user"
              required
              placeholder="Enter your username"
              className="col-span-2 rounded-md p-1 pl-2 text-black placeholder:text-sm"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label htmlFor="password" className="text-right py-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              required
              placeholder="Enter your password"
              className="col-span-2 rounded-md p-1 pl-2 text-black placeholder:text-sm"
            />
          </div>
          <button className="mt-5 uppercase bg-indigo-700 rounded-xl p-2 text-xl font-bold hover:bg-indigo-800 transition-all">
            {register ? "Register" : "Login"}
          </button>
        </form>
        <button
          type="submit"
          className="text-indigo-500 mt-5 hover:text-indigo-400"
          onClick={handleRegister}
        >
          {register ? "Go to login!" : "Register now!"}
        </button>
      </div>
    </div>
  );
};

export default Login;
