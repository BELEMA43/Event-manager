import {
  House,
  CalendarDays,
  UserStar,
  Bell,
  MessageCircle,
  Settings,
  SquareText,
  ChevronsLeft,
  ChevronsRight,
  TextAlignEnd,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";
import companyLogo from "../assets/Company logo.png";
import logo from "../assets/Logomark.png";

export default function SideNavigation({ isOpen, setIsOpen }) {
  const [toogle, setToogle] = useState(false);

  const side_details = [
    {
      name: "Home",
      icon: <House color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <House color="#64748B" strokeWidth={1.6} size={20} />,
      link: "/",
    },
    {
      name: "Events",
      icon: <CalendarDays color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <CalendarDays color="#64748B" strokeWidth={1.6} size={20} />,
      link: "/events",
    },
    {
      name: "Speakers",
      icon: <UserStar color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <UserStar color="#64748B" strokeWidth={1.6} size={20} />,
      link: "/",
    },
    {
      name: "Reports",
      icon: <SquareText color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <SquareText color="#64748B" strokeWidth={1.6} size={20} />,
      link: "/",
    },
    {
      name: "Notifications",
      icon: <Bell color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <Bell color="#64748B" strokeWidth={1.6} size={20} />,
      link: "/",
    },
    {
      name: "Messages",
      icon: <MessageCircle color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <MessageCircle color="#64748B" strokeWidth={1.6} size={20} />,
      link: "/",
    },
    {
      name: "Settings",
      icon: <Settings color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <Settings color="#64748B" strokeWidth={1.6} size={20} />,
      link: "/",
    },
    {
      name: "Collapse",
      icon: <ChevronsLeft color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <ChevronsRight color="#64748B" strokeWidth={1.6} size={20} />,
      link: "/",
    },
  ];
  return (
    <div
      className={` w-full h-auto border border-gray-100 sticky sm:p-2 gap-2 flex flex-col transition-all duration-300 ease-in-out ${isOpen ? "sm:max-w-60" : "sm:max-w-16"}`}
    >
      <Link to={"/"} className="hidden sm:flex sm:gap-3 pl-3 mb-3 mt-1.5">
        <img
          src={companyLogo}
          alt="Constellation Logo"
          className={`${isOpen ? "flex" : "hidden"} `}
        />
        <img
          src={logo}
          alt="Constellation Logo"
          className={`${isOpen ? "hidden" : "flex"} `}
        />
      </Link>

      <div className="flex p-4 justify-between sm:hidden">
        <Link className="" to={"/"}>
          <img
            src={companyLogo}
            alt="Constellation Logo"
            className="w-full h-full image-render-pixelated"
          />
        </Link>
        <TextAlignEnd
          color="#64748B"
          size={30}
          hoverColor="#9486FF"
          cursor="pointer"
          className={toogle ? `hidden` : `block`}
          onClick={() => {
            setToogle(!toogle);
            setIsOpen(isOpen === true);
          }}
        />

        <X
          color="#64748B"
          size={30}
          hoverColor="#9486FF"
          cursor="pointer"
          className={toogle ? `block` : `hidden`}
          onClick={() => setToogle(!toogle)}
        />
      </div>

      <nav
        className={toogle ? `flex flex-col` : `hidden md:block`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {side_details.map((detail) => (
          <Link
            to={detail.link}
            className={`group p-2 gap-4 items-center ${isOpen ? "flex" : "hidden"} hover:bg-[#FCF7FF] cursor-pointer`}
            key={detail.name}
          >
            <div hoverColor="#9486FF">{detail.icon}</div>
            <div className="text-[#334155] group-hover:text-[#6152d6] text-[15px] font-inter">
              {detail.name}
            </div>
          </Link>
        ))}
        {side_details.map((detail) => (
          <div
            className={`justify-center gap-2 items-center mt-2  ${isOpen ? "hidden" : "flex"}`}
            key={detail.name}
          >
            <div>{detail.icon_main}</div>
          </div>
        ))}
      </nav>
    </div>
  );
}
