import { RiAccountPinCircleFill } from "react-icons/ri";
import { PiBasketDuotone } from "react-icons/pi";
import { FaWallet } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiBookmarkAlt } from "react-icons/bi";

const profileLinks = [
  {
    icons: <RiAccountPinCircleFill />,
    title: "Account",
  },
  {
    icons: <PiBasketDuotone />,
    title: "Orders",
  },
  {
    icons: <FaWallet />,
    title: "Wallet",
  },
  {
    icons: <BiBookmarkAlt />,
    title: "Privacy Policy",
  },
  {
    icons: <BsFillQuestionCircleFill />,
    title: "Support",
  },
];
export default function Profile() {
  return (
    <div className="relative">
      <div className="flex justify-between">
        <div className="absolute h-[239px] w-16 rounded-[26px] bg-[#797652] -top-10 -left-10" />

        <div className=" absolute -right-20 -top-7 h-[70px] rounded-[30px] bg-[#797652] w-32 "/>
      </div>

      <div className="w-fit flex flex-col gap-5 font-itim justify-center ml-8 pt- ">
        {profileLinks.map((item, idx) => (
          <div className="flex gap-2 " key={idx}>
            <span className="text-3xl text-gray-600">{item.icons}</span>
            <div className="text-3xl space-y-3">
              <span>{item.title}</span>
              <hr className="bg-black w-28" />
            </div>
          </div>
        ))}
        <div className="absolute border px-16 py-52 h-[52px] rounded-2xl bg-brand2/50"/>
      </div>
    </div>
  );
}
