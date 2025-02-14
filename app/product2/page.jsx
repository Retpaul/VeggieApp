import React from "react";

import { FaRegHeart } from "react-icons/fa6";
export default function page() {
  return (
    <div>
      <div>
        <img src="/product2.png" alt="" className="w-full h-[46%]" />
      </div>
      <div className="flex flex-col items-center  p-2 font-itim">
        <div className=" flex gap-7  mt-10">
          <p className="   text-2xl font-bold text-brand2 italic">
            Classic Potato Salad{" "}
          </p>
          <span className="text-xl font-bold"> 2hr00m</span>
        </div>
        <div>
          <div className=" Justify-items-center  text-center p-12  font-fuschan   font-bold">
            <p>
              This classic recipe for potato salad with hard-boiled eggs is a
              direct inspiration of what I loved to eat at one of my first food
              industry jobs working for a small grocery store.
            </p>
          </div>
          <div className="flex gap-10 justify-evenly  h-20">
            <h1>&#8358; 2000.00 </h1>
           <FaRegHeart />

            <button className="bg-[#d7d8d4] shadow-xl rounded-md w-32 font-itim text-xl h-8">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
