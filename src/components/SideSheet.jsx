import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  TextAlignEnd,
  House,
  CalendarDays,
  UserStar,
  Bell,
  MessageCircle,
  Settings,
  SquareText,
} from "lucide-react";

import companyLogo from "../assets/Company logo.png";
import { Link } from "react-router-dom";

export default function SheetDemo() {
  const side_details = [
    {
      name: "Home",
      icon: <House color="#ADA9BB" strokeWidth={1.75} size={20} />,
      link: "/",
    },
    {
      name: "Events",
      icon: <CalendarDays color="#ADA9BB" strokeWidth={1.75} size={20} />,
      link: "/events",
    },
    {
      name: "Speakers",
      icon: <UserStar color="#ADA9BB" strokeWidth={1.75} size={20} />,
      link: "/",
    },
    {
      name: "Reports",
      icon: <SquareText color="#ADA9BB" strokeWidth={1.75} size={20} />,
      link: "/",
    },
    {
      name: "Notifications",
      icon: <Bell color="#ADA9BB" strokeWidth={1.75} size={20} />,

      link: "/",
    },
    {
      name: "Messages",
      icon: <MessageCircle color="#ADA9BB" strokeWidth={1.75} size={20} />,
      link: "/",
    },
    {
      name: "Settings",
      icon: <Settings color="#ADA9BB" strokeWidth={1.75} size={20} />,
      link: "/",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger
        render={
          <TextAlignEnd
            color="#64748B"
            size={30}
            hoverColor="#9486FF"
            cursor="pointer"
          />
        }
      />
      <SheetContent>
        <SheetHeader>
          <Link to={"/"} className="w-60 h-auto">
            <img src={companyLogo} alt="Constellation Logo" />
          </Link>
        </SheetHeader>
        <nav>
          {side_details.map((detail) => (
            <Link
              to={detail.link}
              className={`group p-2 gap-4 items-center flex hover:bg-[#FCF7FF] cursor-pointer`}
              key={detail.name}
            >
              <div hoverColor="#9486FF">{detail.icon}</div>
              <div className="text-[#334155] group-hover:text-[#6152d6] text-[15px] font-inter">
                {detail.name}
              </div>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
