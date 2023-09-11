import { useState } from "react";
import Feeds from "./components/Feeds";
import Footer from "./components/Footer";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

function App() {
  const [show, setshow] = useState(false)
  return (
    <div className="App overflow-hidden">
      <Navbar show={show} setshow={setshow} />
      {
       show && (
        <div className="p-1 z-50 fixed top-14 right-5 bg-white">
          <ul className="border-2 border-gray-200 rounded-lg">
            <li className="p-2 font-bold border-b-2 border-gray-400 rounded-sm hover:bg-gray-300 cursor-pointer">
              User profile
            </li>
            <li className="p-2 font-bold border-b-2 border-gray-400 rounded-sm  hover:bg-gray-300 cursor-pointer">
              Messages
            </li>
            <li className="p-2 font-bold border-b-2 border-gray-400 rounded-sm  hover:bg-gray-300 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="p-2 font-bold border-b-2 border-gray-400 rounded-sm  hover:bg-gray-300 cursor-pointer">
              Privacy policy{" "}
            </li>
            <li className="p-2 font-bold border-b-2 border-gray-400 rounded-sm  hover:bg-gray-300 cursor-pointer">
              Settings
            </li>
            <li className="p-2 font-bold border-b-2 border-gray-400 rounded-sm  hover:bg-gray-300 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
      <div className="flex justify-between">
        <Leftbar />
        <Feeds />
        <Rightbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
