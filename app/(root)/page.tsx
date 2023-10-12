"use client";
import HelloModal from "@/components/Modals/HelloModal";
import Completed from "@/components/cards/Completed";
import Pending from "@/components/cards/Pending";
import Total from "@/components/cards/Total";
import { tableItems } from "@/constants";
import { useSidenav } from "@/context/SideNavContext";
import { formatDate } from "@/utils";

export default function Home() {
  const { rfqs } = tableItems;
  const { isModalHidden, toggleModal } = useSidenav();
  return (
    <>
      <div className="w-full flex flex-col gap-2 ">
        {" "}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h1 className="mt-10 text-[22px] font-semibold">XYZ Electronics</h1>

          <button
            onClick={toggleModal}
            className="bg-blue-500 p-2 rounded-lg text-white  hover:bg-blue-600 cursor-pointer duration-200"
          >
            Modal
          </button>
        </div>
        
        <div className="flex w-full gap-4 items-center justify-center md:flex-row flex-col">
          <Total />
          <Completed />
          <Pending />
        </div>
        <h1 className="mt-12 font-light">My Recent RFQs</h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-black text-[12px] font-light rounded-lg">
            <thead className="text-black text-[12px] font-light uppercase bg-[#F2F9FF]">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-lg">
                  #
                </th>
                <th scope="col" className="px-2 py-3">
                  Request Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Country of Supply
                </th>
                <th scope="col" className="px-2 py-3">
                  Category
                </th>
                <th scope="col" className="px-2 py-3">
                  Sub Category
                </th>
                <th scope="col" className="px-2 py-3">
                  Opening Date
                </th>
                <th scope="col" className="px-2 py-3">
                  Closing Date
                </th>
                <th scope="col" className="px-2 py-3">
                  Review Date
                </th>
                <th scope="col" className="px-2 py-3 rounded-lg">
                  Selection Date
                </th>
              </tr>
            </thead>
            <tbody>
              {rfqs.map((rfq, index) => (
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {index + 1}
                  </th>
                  <td className="px-2 py-2 ">{rfq.name}</td>
                  <td className="px-2 py-2 ">{rfq.supplyCountry.name}</td>
                  <td className="px-2 py-2 ">{rfq.category.name}</td>
                  <td className="px-2 py-2 ">{rfq.subCategory.name}</td>
                  <td className="px-2 py-2 ">{formatDate(rfq.openingDate)}</td>
                  <td className="px-2 py-2 ">{formatDate(rfq.closingDate)}</td>
                  <td className="px-2 py-2 ">{formatDate(rfq.reviewDate)}</td>
                  <td className="px-2 py-2 ">
                    {formatDate(rfq.selectionDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalHidden && <HelloModal />}
    </>
  );
}
