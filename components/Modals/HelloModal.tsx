"use client";
import { useSidenav } from "@/context/SideNavContext";
import React from "react";

const HelloModal = () => {
  const { toggleModal } = useSidenav();
  const handleBackDropClick = () => {
    toggleModal();
  };
  return (
    <>
      <div
        onClick={handleBackDropClick}
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-10 `}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg z-50">
          <h2 className="text-2xl font-semibold z-">Hello, Modal!</h2>
          <p className="text-gray-700 mt-2">This is your modal content.</p>
          <button
            onClick={toggleModal}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default HelloModal;
