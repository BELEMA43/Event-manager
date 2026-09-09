import { PanelLeft } from "lucide-react";
import Summary from "./Summary";
import RegisterRecord from "./Registration";

const MainContent = () => {
  return (
    <div className="flex-1">
      <div className="mt-3 ml-1">
        <PanelLeft
          color="#64748B"
          size={19}
          cursor="pointer"
          className="hidden sm:flex"
        />
      </div>
      <div className="flex flex-col gap-3 p-6.25 pt-1">
        <Summary />
        <div>
          <h1>Event Registrations per month</h1>
          <RegisterRecord />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
