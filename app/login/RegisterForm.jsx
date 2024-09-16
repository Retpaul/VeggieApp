"use client";
import { FcGoogle } from "react-icons/fc";
import { RiDiscordFill } from "react-icons/ri";

export default function RegisterForm() {
  return (
    <>
      <form action="" className="  flex flex-col gap-8">
        <div className="flex flex-col ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="outline-none h-10 bg-inherit border-b-2 border-black"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="outline-none h-10 bg-inherit border-b-2 border-black"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="confirmPassword"> Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="outline-none h-10 bg-inherit border-b-2 border-black"
          />
        </div>
       
      </form>

      <div className="flex flex-col justify-between items-center gap-2">
        <button className=" font-itim rounded-full bg-[#D9D9D9] w-4/5 h-14 shadow mt-10 text-2xl">
          Login
        </button>
        <span>or</span>

        <div className=" flex justify-center  gap-12 h-32 ml-5 items-center ">
          <FcGoogle className="size-14" />

          <RiDiscordFill className="size-16 text-blue-400/50" />
        </div>
      </div>
    </>
  );
}
