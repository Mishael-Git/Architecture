import React from "react";

function Build() {
  return (
    <div>
      <div className="w-full h-full  bg-[url('/public/Building.jpg')] bg-contain  bg-no-repeat bg-cover py-80 ">
        <div className="flex flex-col bg-no-repeat  items-center space-y-6 ">
          <h1 class="text-5xl font-extrabold text-white">WE BUILD</h1>
          <h1 class="text-5xl font-extrabold text-white">THE NEW WORLD!</h1>
          <p>LOREM IPSUM DOLOR SHT ADIPISCING ELIT</p>
          <button class="rounded-lg px-5 bg-[#fed615] hover:bg-black hover:text-white">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Build;
