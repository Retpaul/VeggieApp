import React from "react";
import { FaRegHeart } from "react-icons/fa6";


export default function page() {
  return (
    <div>
      <div>
        <img src="/product1.png" alt="" className="w-full h-[46%]" />
      </div>
      <div className="flex flex-col items-center  p-2 font-itim">
        <div className=" flex gap-7  mt-10">
          <p className="   text-2xl font-bold text-brand2 italic">Easy Vegan Fried Rice</p>
          <span className="text-xl font-bold"> 1hr15m</span>
        </div>
        <div className=" Justify-items-center  text-center p-12   font-itim  font-bold">
         <p>
            Easy, 10-ingredient vegan fried rice that’s loaded with vegetables,
            crispy baked tofu, and tons of flavor! A healthy, satisfying
            plant-based side dish or entrée.
            </p>
        
        </div>
        <div className="flex gap-10 justify-evenly  ">
            
        <h1>&#8358; 2500.00 </h1>
        <FaRegHeart  />
        <button className="bg-[#d7d8d4] shadow-xl rounded-md w-32 font-itim text-xl h-8"> Add to Cart</button>
        </div>
        


        
      </div>
      <div>

      </div>
    </div>
  );
}
