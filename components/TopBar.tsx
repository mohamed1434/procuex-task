"use client";
import { useSidenav } from "@/context/SideNavContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TopBar = () => {
  const { toggleSideBar, toggleModal } = useSidenav();
  const [showDropDown, setShowDropDown] = useState(false);
  const { push } = useRouter();

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="top-0 z-30 flex w-full items-center justify-between px-4 py-3">
      {/* <div className="flex w-full items-center justify-between bg-red-500"> */}
      <div className="hidden md:block w-40">
        <div className="flex p-2 rounded-md border border-gray-200 overflow-hidden items-center bg-white gap-2">
          <img
            src="../images/magnify.svg"
            alt="Icon"
            className="object-cover w-4"
          />
          <input
            placeholder="Search"
            type="text"
            className="w-full outline-none text-[12px]"
          />
        </div>
      </div>

      {/**SIDE BAR HANDLER BUTTON */}
      <div
        className="top-0 left-0 block z-50 fixed md:hidden"
        onClick={toggleSideBar}
      >
        <img
          src="../images/hamMenu.svg"
          alt="SideNav Toggler"
          className="object-cover w-6 h-6"
        />
      </div>

      <div className="flex w-[14rem] justify-between">
        <div className="flex flex-row items-center gap-1">
          <h1 className="text-[14px]">English</h1>
          <p className="rotate-90">{`>`}</p>
        </div>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900"
              onClick={handleShowDropDown}
            >
              XYZ Electronics
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className={`absolute right-0 z-10 mt-2 w-56 ${
              showDropDown ? "" : "hidden"
            } rounded-md bg-white shadow-lg`}
          >
            <div className="py-1" role="none">
              <p className="text-gray-700 block px-4 py-2 text-sm">
                XYZ Electronics
              </p>
              <button
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-200 duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default TopBar;
