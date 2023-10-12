import { ChangeEvent, useState } from "react";
import SubSection from "./SubSection";
import { specifications } from "@/constants";
import { useTemplate } from "@/context/TemplateContext";

const Sections = ({ data, sectionNumber }: SectionPr) => {
  const [isActive, setIsActive] = useState(false);
  const { setTemplateData, templateData, deleteSection } = useTemplate();

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    // Create a copy of the data from the context
    const updatedData = { ...templateData };

    // Find the section by its key and update its name
    const sectionToUpdate = updatedData.data.sections.find(
      (section: ITEM) => section.key === data.key
    );

    if (sectionToUpdate) {
      sectionToUpdate.name = newName;

      // Update the context with the updated data
      setTemplateData(updatedData);
    }
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newDesc = event.target.value;

    const updatedData = { ...templateData };

    const sectionToUpdate = updatedData.data.sections.find(
      (section: ITEM) => section.key === data.key
    );

    if (sectionToUpdate) {
      sectionToUpdate.description = newDesc;

      setTemplateData(updatedData);
    }
  };

  const sectionCounters: { [sectionKey: string]: number } = {};

  return (
    <>
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
              Section {sectionNumber}
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
              onClick={() => deleteSection(data.id, data.key)}
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
                value={data.name} //use the state from contextAPI
                onChange={handleNameChange} //upadte the Name
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Section Name
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

            <div className="w-full pl-16">
              <h1 className="text-[12px] py-6">Sub Section</h1>
              {templateData.data.subSections.map((subSection, index: number) => {
                if (sectionCounters[subSection.parentKey] === undefined) {
                  // Initialize the counter for this section if it doesn't exist
                  sectionCounters[subSection.parentKey] = 1;
                } else {
                  // Increment the counter for this section
                  sectionCounters[subSection.parentKey]++;
                }

                if (data.key === subSection.parentKey) {
                  return (
                    <SubSection
                      key={index}
                      data={subSection}
                      subSectionNumber={sectionCounters[subSection.parentKey]}
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
                + Sub Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
