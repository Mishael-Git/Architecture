import React from "react";
import { ImHome3 } from "react-icons/im";
function Navbar() {
  return (
    <div className="flex  flex-col md:flex-row items-center justify-between px-5">
      <div className="flex flex-col  md:flex-row   items-center md:space-x-3 sm:space-y-3">
        <div className="bg-[#226089] rounded-full px-3 py-3">
          <ImHome3 size={30} className="text-white" />
        </div>
        <h1 class="text-2xl text-[#226089]">ARCHITECTURE</h1>
      </div>
      <div className="flex flex-row items-center space-x-5">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>SERVICE</p>
        <p>PROJECTS</p>
        <p>BLOG</p>
        <p>CONTACTS</p>
      </div>
    </div>
  );
}

export default Navbar;
