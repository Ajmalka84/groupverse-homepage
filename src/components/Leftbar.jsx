

import React from "react";
import "./style.css";

function Leftbar() {
  return (
    <div className="h-screen py-3 pr-4 space-y-10 overflow-y-auto hide-scrollbar">
      <div className="top mt-7">
        <div className="menu p-1 border-x-2 shadow-slate-500 shadow-lg">

          <button className="flex items-center gap-4 p-4 w-full bg-orange-500 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span className="text-xl">My Feed</span>
          </button>


          <button className="flex items-center gap-4 p-4 w-full hover:bg-orange-200 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-signpost-2-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707z" />
            </svg>
            <span className="text-xl">My Post</span>
          </button>
          <button className="flex items-center gap-4 p-4 w-full hover:bg-orange-200 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-calendar-range-fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2h6z" />{" "}
            </svg>
            <span className="text-xl">My Team Post</span>
          </button>
          <button className="flex items-center gap-4 p-4 w-full hover:bg-orange-200 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />{" "}
              <path
                fill-rule="evenodd"
                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
              />{" "}
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />{" "}
            </svg>
            <span className="text-xl">My Follwing Post</span>
          </button>
          <button className="flex items-center gap-4 p-4 w-full hover:bg-orange-200 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-share-fill"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />{" "}
            </svg>
            <span className="text-xl">Shared Post</span>
          </button>
        </div>
      </div>
      <div className="middle text-md font-bold p-3 space-y-3 text-xl">
        <h3>Trending Topics of the Week</h3>
        <img
          src="./images/trending.png"
          alt="trending"
          className="w-56 h-52 rounded-xl border-2 border-gray-400 shadow-lg"
        />
      </div>
      <div className="bottom text-xl font-bold p-3 space-y-3">
        <h3>Top software for designers</h3>
        <div className="w-14 flex gap-3">
          <img src="./images/facebook.png" alt="facebook" />
          <img src="./images/instagram.png" alt="instagram" />
          <img src="./images/twitter.png" alt="twitter" />
          <img src="./images/linkedin.png" alt="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
