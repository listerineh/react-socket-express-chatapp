import { MoonIcon, SunIcon } from "@heroicons/react/outline";

const Topnav = ({ userId, theme, handleThemeSwitch }) => {
  return (
    <div className="h-1/6 bg-indigo-800 dark:bg-indigo-900">
      <div className="flow-root p-5">
        <div className="float-left pt-3">User: {userId}</div>
        <div className="float-right">
          <button
            type="button"
            onClick={handleThemeSwitch}
            className="p-2 md:mt-2 text-white text-lg hover:animate-pulse"
          >
            {theme === "light" ? (
              <SunIcon
                className="block h-6 w-6 hover:text-yellow-300"
                aria-hidden="true"
              />
            ) : (
              <MoonIcon
                className="block h-6 w-6 hover:text-gray-400"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
