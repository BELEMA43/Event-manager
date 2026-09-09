import SideNavigation from "./components/SideNav.jsx";
import MainContent from "./components/MainContent.jsx";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-col sm:flex-row gap-1 h-screen">
      <SideNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainContent />
    </div>
  );
}
