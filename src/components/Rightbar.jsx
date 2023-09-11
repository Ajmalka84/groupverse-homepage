import React from "react";
import Top from "./Top";
import './style.css';
function Rightbar() {
  return (
    <div className="text-xl font-bold space-y-12 p-5 h-screen overflow-auto hide-scrollbar ">
      <div className="space-y-3 flex flex-col items-center ">
        <h1>Top Teams of the week</h1>
        <div className="teams border-y-2 border-gray-500 shadow-3xl rounded-lg">
          <Top />
        </div>
      </div>
      <div className="space-y-3 flex flex-col items-center ">
        <h1>Top Global users of the week</h1>
        <div className="users w-full border-y-2 border-gray-500 shadow-3xl rounded-lg">
          <Top user={true} />
        </div>
      </div>
      <div className="space-y-3 flex flex-col items-center">
        <h1>Top Local users of the week</h1>
        <div className="teams">
          <div className="w-56 h-72 shadow-lg border-2 border-gray-400 text-center">
            <h3 className="shadow-lg border-2 border-gray-400">
              AJMALKA84: 242
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
