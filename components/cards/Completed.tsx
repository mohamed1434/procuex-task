import { cardsItems } from "@/constants";
import React from "react";

const Completed = () => {
  const { completedRfqs } = cardsItems;
  return (
    <div className="bg-gradient-to-r from-[#E5E9FF] to-[#E6FCFF] md:w-[25rem] w-full h-[6.4rem] flex flex-col justify-center rounded-lg shadow-lg gap-4">
      <h1 className="text-[12px] text-[#1993FB] px-4">Total RFQ Requests</h1>

      <div className="flex justify-between px-4">
        <h1 className="text-[26px] font-bold">{completedRfqs}</h1>
        <img src="../images/correct.svg" className="object-cover w-10" />
      </div>
    </div>
  );
};

export default Completed;
