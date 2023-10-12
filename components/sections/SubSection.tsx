import React, { ChangeEvent, useState } from "react";
import Objects from "./Objects";
import { specifications } from "@/constants";
import { useTemplate } from "@/context/TemplateContext";

const SubSection = ({ data, subSectionNumber }: SubSectionPr) => {
  const [isActive, setIsActive] = useState(false);
  const { setTemplateData, templateData, deleteSubSection } = useTemplate();

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    const updatedData = { ...templateData };

    const subSectionToUpdate = updatedData.data.subSections.find(
      (subSection: ITEM) => subSection.key === data.key
    );

    if (subSectionToUpdate) {
      subSectionToUpdate.name = newName;

      setTemplateData(updatedData);
    }
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newDesc = event.target.value;

    const updatedData = { ...templateData };

    const subSectionToUpdate = updatedData.data.subSections.find(
      (subSection: ITEM) => subSection.key === data.key
    );

    if (subSectionToUpdate) {
      subSectionToUpdate.description = newDesc;

      setTemplateData(updatedData);
    }
  };

  const objectsCounters: { [subSectionKey: string]: number } = {};
  return (
    <div
      className={`mb-5 border border-[#c9c6v655] rounded-md w-full duration-500 group ${
        isActive ? "is-active bg-white" : ""
      }`}
    >
      <div className="flex flex-col">
        <div className="flex bg-[#1993FB] rounded-t-md px-2 pb-1 pt-1 items-center">
          <div
            className={`w-full text-[12px] duration-500 text-white ${
              isActive ? "font-bold" : ""
            }`}
          >
            Sub Section {subSectionNumber}
          </div>
          <div
            className={`text-xl rotate-90 duration-500 cursor-pointer ${
              isActive ? "rotate-[270deg]" : ""
            }`}
            onClick={handleToggleActive}
          >
            {`>`}
          </div>

          <img
              src="../images/trash.svg"
              alt="Delete"
              className="object-cover w-5 h-5 cursor-pointer ml-2"
              onClick={() => deleteSubSection(data.id, data.key)}
            />

        </div>

        <div className="w-full p-4">
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block py-2 px-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-[#E8EAED] appearance-none dark:text-black dark:border-[#E8EAED] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              name="name"
              value={data.name}
              onChange={handleNameChange}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Name
            </label>
          </div>
        </div>

        <div
          className={`w-full px-4  overflow-hidden max-h-0 duration-500 ${
            isActive ? "max-h-full visible py-2" : "invisible py-0"
          }`}
        >
          <div className="relative p-2">
            <textarea
              // type="text"
              rows={2}
              id="floating_outlined"
              className="block py-2 px-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-[#E8EAED] appearance-none dark:text-black dark:border-[#E8EAED] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              name="description"
              value={data.description}
              onChange={handleDescriptionChange}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Description
            </label>
          </div>

          <div className="w-full pl-6">
            <h1 className="text-[12px] py-6">Objects</h1>

            {templateData.data.objects.map((object, index: number) => {
              if (objectsCounters[object.parentKey] === undefined) {
                // Initialize the counter for this section if it doesn't exist
                objectsCounters[object.parentKey] = 1;
              } else {
                // Increment the counter for this section
                objectsCounters[object.parentKey]++;
              }

              if (data.key === object.parentKey) {
                return (
                  <Objects
                    key={index}
                    data={object}
                    objectNumber={objectsCounters[object.parentKey]}
                  />
                );
              } else {
                return null;
              }
            })}

            <button
              className="border border-[#1993FB] px-6 py-2 rounded-lg text-[#1993FB]
           text-[12px] hover:border-[#62b6ff] hover:text-[#62b6ff] duration-200"
            >
              + Objects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
