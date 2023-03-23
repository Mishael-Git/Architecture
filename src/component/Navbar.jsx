import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { ImHome3 } from "react-icons/im";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggle = () => setToggleNav((prev) => !prev);

  return (
    <div className="flex  flex-row  items-center justify-between px-5">
      <div className="flex flex-row    items-center md:space-x-3 sm:space-y-3">
        <div className="bg-[#226089] rounded-full px-3 py-3">
          <ImHome3 size={30} className="text-white cursor-pointer" />
        </div>
        <h1 class="text-2xl text-[#226089] cursor-pointer">ARCHITECTURE</h1>
      </div>
      <div>
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer"
        >
          {toggleNav ? (
            <VscChromeClose size={30} onClick={handleToggle} />
          ) : (
            <AiOutlineMenu size={30} onClick={handleToggle} />
          )}
        </div>
        <ul
          className={` flex-row sm:flex-col md:flex-row  md:flex  space-x-5  ${
            toggleNav ? "flex" : "hidden"
          } `}
        >
          <li>
            <p class="text-lg cursor-pointer hover:text-slate-400 border border-r border-l border-t border-b px-5">
              HOME
            </p>
          </li>
          <li>
            <p class="text-lg cursor-pointer hover:text-slate-400">ABOUT</p>
          </li>
          <li>
            <p class="text-lg cursor-pointer hover:text-slate-400">SERVICE</p>
          </li>
          <li>
            <p class="text-lg cursor-pointer hover:text-slate-400">PROJECTS</p>
          </li>
          <li>
            <p class="text-lg cursor-pointer hover:text-slate-400">BLOG</p>
          </li>
          <li>
            <p class="text-lg cursor-pointer hover:text-slate-400">CONTACTS</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
