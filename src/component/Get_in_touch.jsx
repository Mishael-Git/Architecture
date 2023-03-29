import React from "react";
import { ImTwitter } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsPinterest, BsGithub } from "react-icons/bs";
import { TfiGoogle } from "react-icons/tfi";
function Get_in_touch() {
  return (
    <div className="flex flex-col items-center bg-[url('/public/Shipping.jpg')] bg-no-repeat bg-cover">
      <div>
        <h1 class="text-3xl font-thin">GET IN TOUCH</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          modi veniam quaerat commodi dolor assumenda maiores aperiam officia
          quis saepe amet repellendus quisquam alias{" "}
        </p>
        <p>
          ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi
          veniam quaerat
        </p>
      </div>
      <div className="flex space-x-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <ImTwitter size={30} key={index} />
          ))}
        {/* <  FaFacebookF  size={30}/>
        <BsPinterest  size={30}/>
        <TfiGoogle  size={30}/>
        <BsGithub  size={30}/> */}
      </div>
    </div>
  );
}

export default Get_in_touch;
