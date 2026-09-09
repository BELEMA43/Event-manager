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
} from "lucide-react";

import companyLogo from "../assets/Company logo.png";
import logo from "../assets/Logomark.png";

export default function SideNavigation({ isOpen, setIsOpen }) {
  const side_details = [
    {
      name: "Home",
      icon: <House color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <House color="#000" />,
    },
    {
      name: "Events",
      icon: <CalendarDays color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <CalendarDays color="#000" />,
    },
    {
      name: "Speakers",
      icon: <UserStar color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <UserStar color="#000" />,
    },
    {
      name: "Reports",
      icon: <SquareText color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <SquareText color="#000" />,
    },
    {
      name: "Notifications",
      icon: <Bell color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <Bell color="#000" />,
    },
    {
      name: "Messages",
      icon: <MessageCircle color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <MessageCircle color="#000" />,
    },
    {
      name: "Settings",
      icon: <Settings color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <Settings color="#000" />,
    },
    {
      name: "Collapse",
      icon: <ChevronsLeft color="#ADA9BB" strokeWidth={1.75} size={20} />,
      icon_main: <ChevronsRight color="#000" strokeWidth={1.25} />,
    },
  ];
  return (
    <div
      className={` w-full h-auto border border-gray-100 sticky sm:p-2 gap-2 flex flex-col ${isOpen ? "sm:max-w-60" : "sm:max-w-16"}`}
    >
      <div className="hidden sm:flex mb-3 mt-1.5">
        <img
          src={companyLogo}
          alt="Constellation Logo"
          className={`${isOpen ? "flex" : "hidden"}`}
        />
        <img
          src={logo}
          alt="Constellation Logo"
          className={`${isOpen ? "hidden" : "flex"}`}
        />
      </div>

      <div className="flex p-4 justify-between sm:hidden">
        <div className="">
          <img
            src={companyLogo}
            alt="Constellation Logo"
            className="w-full h-full image-render-pixelated"
          />
        </div>
        <TextAlignEnd
          color="#64748B"
          size={30}
          hoverColor="#9486FF"
          cursor="pointer"
        />
      </div>

      <div className="hidden md:block">
        {side_details.map((detail) => (
          <div
            className={`group p-2 gap-4 items-center ${isOpen ? "flex" : "hidden"} hover:bg-[#FCF7FF] cursor-pointer`}
            key={detail.name}
          >
            <div hoverColor="#9486FF">{detail.icon}</div>
            <div className="text-[#334155] group-hover:text-[#6152d6] text-[15px] font-inter">
              {detail.name}
            </div>
          </div>
        ))}
        {side_details.map((detail) => (
          <div
            className={`justify-center gap-2 items-center mt-2  ${isOpen ? "hidden" : "flex"}`}
            key={detail.name}
          >
            <div>{detail.icon_main}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
