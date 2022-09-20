import { useState } from "react";
import { CogIcon } from "@heroicons/react/outline";

const Topnav = ({ userId, theme, handleThemeSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-1/6 bg-indigo-800 dark:bg-indigo-900 flex text-center items-center justify-center">
      <div className="flow-root p-5 w-full">
        <div className="float-left text-white sm:text-4xl text-xl">
          Socket ChatApp
        </div>
        <div className="float-right">
          <div className="flex space-x-3">
            <button
              onClick={handleOpenDropdown}
              className="text-white text-lg p-2 "
            >
              <CogIcon className="block h-6 w-6" aria-hidden="true" />
            </button>
            <div
              className={`${
                !isOpen ? "hidden" : "absolute right-3 top-20"
              } w-44 font-normal rounded divide-y divide-gray-100 shadow bg-indigo-500 `}
            >
              <ul className="py-1 font-thin text-white">
                <li className="block text-md py-2 px-4 hover:bg-indigo-400">
                  Logged as: <span className="uppercase">{userId}</span>
                </li>
                <li className="block py-2 px-4 hover:bg-indigo-400">
                  <button
                    type="button"
                    onClick={handleThemeSwitch}
                    className="text-white text-lg p-2"
                  >
                    <div className="flex font-thin text-md">
                      <p>
                        Mode: <span className="uppercase">{theme}</span>
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-red-400 text-white uppercase"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
