import React from "react";

function TeamList({ id, name, img , userstat }) {
  return (
    <div className="w-full p-3">
      <div className="flex items-center justify-between h-16">
        <img
          src={img === "" ? "./images/account.png" : userstat ? `./users/${img}` : `./teams/${img}`}
          alt=""
          className="w-16 rounded-lg"
        />
        <h3 className="font-semibold p-2">{name}</h3>
        <button className="bg-orange-600 text-white font-semibold w-20 h-8 rounded-lg">
          join
        </button>
      </div>
    </div>
  );
}

export default TeamList;
