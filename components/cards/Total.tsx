import { cardsItems } from "@/constants";

const Total = () => {
  const { totalRfqs } = cardsItems;
  return (
    <div className="bg-gradient-to-r from-[#E5F3FF] to-[#FFE6F2] w-full h-[6.4rem] flex flex-col justify-center rounded-lg shadow-lg gap-4 md:w-[25rem]">
      <h1 className="text-[12px] text-[#1993FB] px-4">Total RFQ Requests</h1>

      <div className="flex justify-between px-4">
        <h1 className="text-[26px] font-bold">{totalRfqs}</h1>
        <img src="../images/pencil.svg" className="object-cover w-10" />
      </div>
    </div>
  );
};

export default Total;
