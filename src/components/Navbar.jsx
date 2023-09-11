import React, { useState } from "react";

function Navbar({show, setshow}) {
 
  return (
    <div className="flex items-center justify-between p-4 z-0">
      <div className="flex items-center gap-3 font-bold">
        <a href="/feed">
          <img className="w-10 h-10" src="./images/logo.png" alt="user" />
        </a>
        <a href="/feed">
          <h3 className="font-normal">Grupverse</h3>
        </a>
        <h4>❤️ 0</h4>
        <h4>Hello, ajmalka84</h4>
      </div>
      <div className="text-lg space-x-10">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Help</a>
      </div>
      <div className="flex gap-6">
        <input type="text" className="border-2 border-black rounded-3xl px-2" />
        <button
          type="submit"
          class="p-1 focus:outline-none focus:shadow-outline"
        >
          <img className="w-8" src="./postsymbols/search.png" alt="" />
        </button>
        <div className="flex items-center hover:cursor-pointer">
          <img className="w-7 h-7" src="./postsymbols/mike.png" alt="" />
        </div>
      </div>
      <div className="flex items-center hover:cursor-pointer">
        <img className="w-7 h-7" src="./postsymbols/notification.png" alt="" />
      </div>
      <div className="flex items-center hover:cursor-pointer" onClick={()=> !show ? setshow(true) : setshow(false)}>
        <img className="w-8 " src="./images/account.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
