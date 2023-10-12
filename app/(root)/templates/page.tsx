"use client";
import Sections from "@/components/sections/Sections";
import { specifications } from "@/constants";
import { useTemplate } from "@/context/TemplateContext";
import React, { useState } from "react";

const page = () => {
  const { templateData } = useTemplate();
  const handleSaveButton = () => {
    console.log(templateData);
  };
  return (
    <div className="w-full flex flex-col">
      <h1>Templates</h1>
      <div className="list">
        {templateData.data.sections.map((item: ITEM, index: number) => (
          <Sections key={index} data={item} sectionNumber={index + 1} />
        ))}
        <div className="flex flex-col items-start gap-4">
          <button
            className="border border-[#1993FB] px-6 py-2 rounded-lg text-[#1993FB]
           text-[12px] hover:border-[#62b6ff] hover:text-[#62b6ff] duration-200"
          >
            + Section
          </button>

          <div className="flex flex-col gap-2 md:gap-0 justify-between items-cente w-full md:flex-row pb-6">
            <button className="px-16 py-2 bg-[#E5E7EB] text-[12px] rounded-lg hover:bg-[#c9c9c9] duration-200">
              Reset
            </button>
            <button
              onClick={handleSaveButton}
              className="px-24 py-2 bg-[#1993FB] text-white text-[12px] rounded-lg hover:opacity-75 duration-200"
            >
              Save and Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
