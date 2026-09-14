import SideNavigation from "./components/SideNav.jsx";
import { useState } from "react";
import Home from "./components/Pages/Home.jsx";
import Events from "./components/Pages/Events.jsx";
import NotFoundPage from "./components/Pages/NotFoundPage.jsx";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-col sm:flex-row gap-1 min-h-screen h-full">
      <SideNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
