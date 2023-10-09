import { sideNavItems } from "@/constants";
import { useSidenav } from "@/context/SideNavContext";
import { useState } from "react";
import Link from "next/link";

const Sidenav = () => {
  const { selectedItem, selectItem, isSidebarHidden } = useSidenav();
  console.log(isSidebarHidden)
  return (
    <>
    <aside className={` ${isSidebarHidden ? "" : "fixed h-full top-0 left-0 z-50 md:sticky"}  `}>


      {/**h-screen */}
      <div className={`sticky left-0 top-0 z-50 flex h-screen w-full flex-col
       overflow-auto dark:border-gray-300 border-r-[1px]
        bg-[#F7FCFF] ${isSidebarHidden ? "max-md:hidden" : "block z-50"} `}>
        <div className="flex w-full items-center justify-center p-6 gap-2">
          <img src="../images/logo.svg" className="object-cover w-32" />
          <div className="bg-[#E9EDF2] rounded-lg cursor-pointer">
            <img src="../images/dots.svg" className="object-cover w-7" />
          </div>
        </div>

        <div className="flex flex-col w-full gap-2 p-4 items-center">
          {sideNavItems.map((item) => (
            <div className="flex w-full items-center justify-start">
              {item.name !== "Dashboard" && item.name !== "Templates" ? (
                <div
                  key={item.name}
                  className={`flex gap-1 justify-between w-full py-2 px-1 cursor-pointer ${
                    selectedItem === item
                      ? "border-l-4 border-blue-200 bg-gradient-to-r from-[#EBF7FF]"
                      : ""
                  }`}
                  onClick={() => selectItem(item)}
                >
                  <div className="flex gap-1 items-center">
                    <img src={item.icon} className="object-cover w-4 h-4" />
                    <Link className="text-[12px]" href={item.to}>
                      {item.name}
                    </Link>
                  </div>
                  <img
                    src="../images/strokeDown.svg"
                    className="object-cover w-6"
                  />
                </div>
              ) : (
                <div
                  key={item.name}
                  className={`flex gap-1 w-full cursor-pointer py-2 px-1 ${
                    selectedItem === item
                      ? "border-l-4 border-blue-200 bg-gradient-to-r from-[#EBF7FF]"
                      : ""
                  }`}
                  onClick={() => selectItem(item)}
                >
                  <div className="flex gap-1 items-center">
                    {item.icon && (
                      <img src={item.icon} className="object-cover w-5 h-5" />
                    )}
                    <Link className="text-[12px]" href={item.to}>
                      {item.name}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      </aside>
    </>
  );
};

export default Sidenav;
