"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiDiscordFill } from "react-icons/ri";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function page() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className=" bg-[#CFD0CB] h-dvh">
      <div className="shadow-xl rounded-b-[30px]    h-[35vh]  font-itim  bg-[#D9D9D9]">
        <div className="flex justify-center items-center h-4/5 ">
          <img src="/tree.png" alt="" className="" />
        </div>
        <div className="flex justify-evenly  h-1/5 ">
          <div className="h-full flex flex-col justify-between">
            <button
              className="text-2xl text-black text-bold light"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            {isLogin && <hr className="bg-brand2 h-1 w-full" />}
          </div>
          <div className="h-full flex flex-col justify-between">
            <button
              className="font-itim text-2xl text-slate-800"
              onClick={() => setIsLogin(false)}
            >
              {" "}
              Sign Up
            </button>
            {!isLogin && <hr className="bg-brand2 h-1 w-full" />}
          </div>
        </div>
      </div>

      <div className="p-16 flex flex-col justify-evenly h-[62vh] ">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
