import React from "react";

const Topnav = ({ userId }) => {
  return (
    <div className="h-1/6 bg-indigo-800">
      <div className="flow-root">
        <div className="float-left">User: {userId}</div>
      </div>
    </div>
  );
};

export default Topnav;
