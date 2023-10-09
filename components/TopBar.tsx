import { useSidenav } from "@/context/SideNavContext";

const TopBar = () => {
  const { toggleSideBar } = useSidenav();
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

        <div className="flex gap-2 items-center">
          {/* <h1 className="text-[14px]">Avatar</h1> */}
          <img src="../images/profile.svg" className="object-cover w-8 h-8" />

          <div className="flex flex-row items-center gap-1">
            <h1 className="text-[14px]">XYZ Electronics</h1>
            <p className="rotate-90">{`>`}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default TopBar;
