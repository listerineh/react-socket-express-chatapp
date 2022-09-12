import { useState } from "react";
import { MoonIcon, SunIcon, UserIcon } from "@heroicons/react/outline";

const Topnav = ({ userId, theme, handleThemeSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-1/6 bg-indigo-800 dark:bg-indigo-900 flex text-center items-center justify-center">
      <div className="flow-root p-5 w-full">
        <div className="float-left text-white sm:text-4xl text-xl">
          Socket ChatApp
        </div>
        <div className="float-right">
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handleThemeSwitch}
              className={`text-white text-lg p-2 ${
                theme === "light"
                  ? "hover:text-yellow-300 hover:border-yellow-300"
                  : "hover:text-gray-400 hover:border-gray-400"
              }`}
            >
              {theme === "light" ? (
                <SunIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MoonIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
