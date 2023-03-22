import React from "react";
import { Build } from "../assets/img/Image";

function Welcome() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 class="text-[#226089] text-2xl">WELCOME</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          aliquid, inventore alias nostrum similique voluptates, dignissimos eum
          ipsa magnam rerum sequi unde quas optio omnis quia reprehe.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cumque
          voluptatem in accusamus adipisci odit facere ex soluta laudantium
          voluptatum nemo eveniet sint, aliquid tempore atque recusandae sunt
          alias omnis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          doloribus voluptate ullam modi nobis dolorem beatae dolorum, dolore
          totam similique alias officiis e?
        </p>
      </div>
      <div className="flex flex-row items-center justify-between ">
        <div className=" flex flex-col items-center px-8 ">
          <div className="w-36 h-36 ">
            <img src={Build}  className="w-full h-full rounded-full opacity-50"/>
          </div>
          <div className="">
          <h1 class="text-red-500 text-xl  font-extrabold">COMFORT</h1>
          </div>
        </div>

        <div className=" flex flex-col items-center px-8 ">
          <div className="w-36 h-36 ">
            <img src={Build}  className="w-full h-full rounded-full opacity-50"/>
          </div>
          <div className="">
          <h1 class="text-red-500 text-xl  font-extrabold">RELIABILITY</h1>
          </div>
        </div>

        <div className=" flex flex-col items-center px-8 ">
          <div className="w-36 h-36 ">
            <img src={Build}  className="w-full h-full rounded-full opacity-50"/>
          </div>
          <div className="">
          <h1 class="text-red-500 text-xl  font-extrabold">DESIGN</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
