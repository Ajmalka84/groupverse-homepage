import React, { useState } from "react";

function Post({ id, userimg, username, teamimg, teamname, title, img }) {
  const [like, setlike] = useState(0);
  const [unlike, setunlike] = useState(0);
  const [comment, setcomment] = useState(false);
  const [share, setshare] = useState(0);
  return (
    <div className="border-2 shadow-xl shadow-red-200 rounded-2xl">
      <div className="top p-3">
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <img
              className="w-14 border-2 border-gray-400 rounded-full"
              src={`./users/${userimg}`}
              alt="userimg"
            />
            <span>{username}</span>
          </div>
          <div className="flex items-center">
            <img
              className="w-14 border-2 border-gray-400 rounded-full"
              src={`./teams/${teamimg}`}
              alt="teamimg"
            />
            <span>{teamname}</span>
          </div>
        </div>
      </div>
      <div className="middle font-bold p-3 space-y-2">
        <h4>{title}</h4>
        <img className="w-full rounded-lg" src={`./posts/${img}`} alt="img" />
      </div>
      <div className="bottom flex items-center gap-5 p-3 justify-center">
        <div className="flex font-semibold gap-2 items-center text-xl">
          <img
            className="w-8 hover:cursor-pointer"
            src="./postsymbols/like.png"
            alt=""
            onClick={() => setlike(like + 1)}
          />
          <span>{like}</span>
        </div>
        <div className="flex font-semibold gap-2 items-center text-xl">
          <img
            className="w-8 hover:cursor-pointer"
            src="./postsymbols/unlike.png"
            alt=""
            onClick={() => setunlike(unlike + 1)}
          />
          <span>{unlike}</span>
        </div>
        <div className="flex font-semibold gap-2 items-center text-xl">
          <img
            className="w-8 hover:cursor-pointer"
            src="./postsymbols/message.png"
            alt=""
            onClick={() => !comment ? setcomment(true) : setcomment(false)}
          />
          <span>{comment.length}</span>
        </div>
        <div className="flex font-semibold gap-2 items-center text-xl">
          <img className="w-8" src="./postsymbols/link.png" alt="" />
          {/* <span>10</span> */}
        </div>
        <div className="flex font-semibold gap-2 items-center text-xl">
          <img className="w-8" src="./postsymbols/share.png" alt="" />
          <span>10</span>
        </div>
      </div>
      {
      comment && <div className="w-full p-3 rounded-lg">
        <div className="top flex items-center gap-3 justify-center">
            <input type="text" name="" id="" placeholder="enter comments..." className="rounded-lg px-2 w-full h-8 bg-gray-200" />
            <button className="bg-gray-200 p-2 rounded-xl">send</button>
        </div>
        <div className="bottom">
            <div className="flex gap-5 items-center p-3">
                <img className="w-7" src="./images/account.png" alt="" />
                <p>ajmalka84</p>
            </div>
            <p className="pl-12 font-bold text-lg">comment</p>
            <div className="flex p-3 pl-12">
               <img className="w-6 mr-1" src="./postsymbols/like.png" alt="" />
               <p className="mr-4">0</p>
               <img className="w-6 mr-1" src="./postsymbols/unlike.png" alt="" />
               <p className="mr-6">0</p>
               <p className="mr-6 font-bold">reply</p>
               <p className="mr-6 font-bold">delete</p>
            </div>

        </div>
        </div>
        }
    </div>
  );
}

export default Post;
