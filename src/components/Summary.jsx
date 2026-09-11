import { CircleAlert } from "lucide-react";
import data from "../data.json";
import RegData from "../regData.json";

export default function Summary() {
  const RegTotal = RegData.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.registrations;
  }, 0);

  const RegFunds = Number(RegTotal * 50);
  const summaryDetails = [
    {
      title: "Total Events",
      value: data.length,
    },
    {
      title: "Active Speakers",
      value: data.length,
    },
    {
      title: "Total Registrations",
      value: RegTotal,
    },
    {
      title: "Total Revenue",
      value: `$${RegFunds}`,
    },
  ];
  return (
    <div>
      <h1 className="text-[22px]">Welcome! here’s your summary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
        {summaryDetails.map((detail) => (
          <div
            key={detail.title}
            className="flex flex-col mt-3 p-4 border border-gray-100 rounded-md w-full sm:w-60"
          >
            <div className="flex items-center gap-1">
              <h2 className="text-[#64748B] font-semibold ">{detail.title}</h2>
              <CircleAlert color="#64748B" size={12} />
            </div>
            <p className="text-[20px] font-semibold text-gray-700">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
