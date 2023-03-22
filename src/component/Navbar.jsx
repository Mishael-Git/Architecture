import React from "react";
import {AiOutlineMenu} from "react-icons/ai";
import { ImHome3 } from "react-icons/im";
function Navbar() {
  return (
    <div className="flex  flex-col md:flex-row items-center justify-between px-5">
      <div className="flex flex-col  md:flex-row   items-center md:space-x-3 sm:space-y-3">
        <div className="bg-[#226089] rounded-full px-3 py-3">
          <ImHome3 size={30} className="text-white cursor-pointer" />
        </div>
        <h1 class="text-2xl text-[#226089] cursor-pointer">ARCHITECTURE</h1>
      </div>
      <div>
        <div className="md:hidden ">
          <AiOutlineMenu size={30} className="cursor-pointer"/>
        </div>
        <ul className="flex flex-row sm:flex-col md:flex-row hidden md:flex items-center space-x-5 ">
          <li>
          <p class="text-lg cursor-pointer border border-r border-l border-t border-b">HOME</p>
          </li>
          <li>
          <p class="text-lg cursor-pointer">ABOUT</p>
          </li>
          <li>
          <p class="text-lg cursor-pointer">SERVICE</p>
          </li>
          <li>
          <p class="text-lg cursor-pointer">PROJECTS</p>
          </li>
          <li>
          <p class="text-lg cursor-pointer">BLOG</p>
          </li>
          <li>
          <p class="text-lg cursor-pointer">CONTACTS</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
