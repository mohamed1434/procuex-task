"use client";
import { sideNavItems } from "@/constants";
import React, { createContext, useContext, useState } from "react";

// Create the context
const SidenavContext = createContext();

// Create a custom hook for using the context
export function useSidenav() {
  return useContext(SidenavContext);
}

// Create a provider component that will wrap your application
export function SidenavProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(sideNavItems[0]);
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);
  const [isModalHidden, setIsModalHidden] = useState(false);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  const toggleSideBar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const toggleModal = () => {
    setIsModalHidden(!isModalHidden);
  };

  return (
    <SidenavContext.Provider
      value={{
        selectedItem,
        selectItem,
        toggleSideBar,
        isSidebarHidden,
        isModalHidden,
        toggleModal,
      }}
    >
      {children}
    </SidenavContext.Provider>
  );
}
