import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MyModal } from "@/components/shared/MyModal";
import Profile from "@/components/Profile";
export default function layout({ children }) {
  return (
    <div className="flex flex-col p-8 justify-between h-dvh">
      <div className="flex  justify-between">
        <IoIosMenu size={30} />
        <CgShoppingCart size={30} />
      </div>
      <main className="">{children}</main>

      <div className="flex w-full justify-between px-10 items-center">
        <IoMdHome size={40} className="text-brand2" />
        <FaHeart size={30} />
        <MyModal
          className="h-full bg-[#CFD0CB]"
          trigger={<IoIosContact size={35} />}
          content={<Profile />}
        />
      </div>
    </div>
  );
}
