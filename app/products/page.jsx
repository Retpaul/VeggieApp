import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const categoryProducts = [
  {
    img: "/products/product1.png",
    price: "2500",
    name: "Easy Vegan Fried Rice",
  },
  {
    img: "/products/product2.png",
    price: "2000",
    name: "Classic Potato Salad",
  },
  {
    img: "/products/product3.png",
    price: "1000",
    name: "Super Green Smoothie",
  },
  {
    img: "/products/product4.png",
    price: "500",
    name: "Nutty Snack"
  },
];

export default function Product() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <div className="font-fuschan flex items-center justify-evenly">
          <p className="text-3xl">
            Good <span className="text-brand2">{`Morning !!!`}</span>
          </p>
          <Image src="/confetti.png" width={70} height={70} />
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="flex items-center justify-center shadow-lg w-fit p-1 rounded-full">
            <IoSearchOutline size={30} className="px-1" />
            <input
              type="text"
              className="outline-none bg-transparent h-full p-3 w-60 placeholder:text-xs placeholder:font-semibold placeholder:text-brand/50 "
              placeholder="Search your veggie delight"
            />
          </div>
        </div>
      </div>

      <div>
        <p className=" flex justify-between p-5 font-semibold font-itim text-2xl">
          <span>Featured</span>
          <span className="text-brand2">See More</span>
        </p>
        <div className="grid grid-cols-2 gap-14 place-items-center p-5">
          {categoryProducts.map((product, idx) => (
            <div className="bg-brand2/50 shadow-md shadow-lime-900  w-[119px] h-[112px] relative rounded-xl" key={idx}>
              <Image
                src={product.img}
                width={70}
                height={70}
                className="absolute -top-7 right-6"
                alt={product.name}
              />
              <div className="mt-7 p-2 font-itim text-center font-semibold">
                <p>{product.name}</p>
                <p> &#8358; {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
