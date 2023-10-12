import { useTemplate } from "@/context/TemplateContext";
import React, { ChangeEvent, useState } from "react";

const Objects = ({ data, objectNumber }: ObjectPr) => {
  const [isActive, setIsActive] = useState(false);
  const { setTemplateData, templateData, deleteObjects } = useTemplate();

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    const updatedData = { ...templateData };

    const objectToUpdate = updatedData.data.objects.find(
      (object: ITEM) => object.key === data.key
    );

    if (objectToUpdate) {
      objectToUpdate.name = newName;

      setTemplateData(updatedData);
    }
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newDesc = event.target.value;

    const updatedData = { ...templateData };

    const objectToUpdate = updatedData.data.objects.find(
      (object: ITEM) => object.key === data.key
    );

    if (objectToUpdate) {
      objectToUpdate.description = newDesc;

      setTemplateData(updatedData);
    }
  };

  const handleMandatoryChange = () => {
    const updatedData = { ...templateData };
    const objectToUpdate = updatedData.data.objects.find(
      (object: ITEM) => object.key === data.key
    );

    if (objectToUpdate) {
      objectToUpdate.isRequired = !objectToUpdate.isRequired;
      setTemplateData(updatedData);
    }
  };

  const handleAlternativeAllowedChange = () => {
    const updatedData = { ...templateData };
    const objectToUpdate = updatedData.data.objects.find(
      (object: ITEM) => object.key === data.key
    );

    if (objectToUpdate) {
      objectToUpdate.isAlternativeAllowed =
        !objectToUpdate.isAlternativeAllowed;
      setTemplateData(updatedData);
    }
  };

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
            Object {objectNumber}
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
            onClick={() => deleteObjects(data.id, data.key)}
          />
        </div>

        <div className="w-full p-4">
          <div className="flex flex-col border border-t-2 border-b-2 border-l-0 border-r-0 py-2 px-4 gap-4 md:flex-row">
            <div className="flex gap-2 items-center">
              <label className="text-[12px]">Mandatory</label>
              <input
                type="checkbox"
                checked={data.isRequired}
                onChange={handleMandatoryChange}
              />
            </div>
            <div className="flex gap-2 items-center">
              <label className="text-[12px]">Alternative Allowed</label>
              <input
                type="checkbox"
                checked={data.isAlternativeAllowed}
                onChange={handleAlternativeAllowedChange}
              />
            </div>
          </div>
        </div>

        <div
          className={`w-full px-4  overflow-hidden max-h-0 duration-500 ${
            isActive ? "max-h-full visible py-2" : "invisible py-0"
          }`}
        >
          <div className="relative p-2">
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

          <div className="relative p-2">
            <textarea
              rows={6}
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
        </div>
      </div>
    </div>
  );
};

export default Objects;
