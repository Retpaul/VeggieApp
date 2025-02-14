import React from "react";
import Image from "next/image";
import { PiDivideFill } from "react-icons/pi";
import { PiHandSwipeLeft } from "react-icons/pi";
import { IoChevronBack } from "react-icons/io5";

const categoryProducts = [
  {
    img: "/p1.png",
    price: "2500",
    name: "Easy Vegan Fried Rice",
    add: "-1 +",
  },
  {
    img: "/p2.png",
    price: "2000",
    name: "Classic Potato Salad",
    add: "-1 +",
  },
  {
    img: "/p3.png",
    price: "1000",
    name: "Super Green Smoothie",
    add: "-1 +",
  },
];

const cartProduct = [
  {
    title: "Subtotal",
    prices: "2500.00",
  },
  {
    title: "Delivery",
    prices: "2000.00",
  },
  {
    title: "Total",
    prices: "1000.00",
  },
];

export default function page() {
  return (
    <div className="  flex-col ">
      <IoChevronBack size={48} className="ml-4" />

      <div className="flex flex-col items-center gap-7 p-1">
        <div className="  text-2xl w-32 ">My Cart</div>
        <div className=" flex gap-2">
          <PiHandSwipeLeft />

          <p className="text-gray-400">Swipe right to delete item</p>
        </div>
      </div>

      <div className="grid  gap-4 place-items-center   p-7  ">
        {categoryProducts.map((product, idx) => (
          <div
            className=" shadow-md bg-[#d7d8d4] w-full h-[100px] relative rounded-xl flex p-5 gap-3 "
            key={idx}
          >
            <Image
              src={product.img}
              width={40}
              height={40}
              className=" w-30% rounded-full "
            />
            <div className=" w-[70%]">
              <div className=" font-itim text-center font-semibold  ">
                <p className=" text-brand text-xl italic">{product.name}</p>
                <div className="flex  justify-end p-2 gap-28">
                  <p className="ml-4"> &#8358; {product.price}</p>
                  <p className="shadow-inner w-30 bg-[#e0e0de] rounded-2xl">
                    {product.add}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-10  ml-5 mr-5 px-30 justify-center shadow-inner rounded-full bg-[#d7d8d4] items-center w-5/5 h-16 p-3">
        <PiDivideFill />
        Promo Code
        <button className="bg-brand2 items-center text-2xl rounded-md w-20 ">
          Apply
        </button>
      </div>

      <div className="flex flex-col gap-8 p-6 font-itim  border mt-10 text-2xl bg-[#e0e0de] h-[300px] rounded-t-3xl  shadow p5 ">
        <div className=" flex gap-7 justify-between">
          <h1>Subtotal</h1>
          <h2> &#8358; 2500.00</h2>
        </div>
        <div className=" flex gap-7 justify-between">
          <h1>Delivery</h1>
          <h2> &#8358; 2500.00</h2>
        </div>

        <div className=" flex gap-7 justify-between">
          <h1>Total</h1>
          <h2> &#8358; 2500.00</h2>
        </div>
        <div>
          <button className="text-3xl shadow-xl rounded-xl bg-[#cecdcd]  w-full font-bold ">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}
