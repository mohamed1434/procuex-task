"use client";
import React, { createContext, useContext, useState } from "react";
import { specifications } from "@/constants";

const TemplateContext = createContext();

export function useTemplate() {
  return useContext(TemplateContext);
}

export function TemplateProvider({ children }) {
  const [templateData, setTemplateData] = useState(specifications);

  const deleteSection = (id, key) => {
    const updatedData = JSON.parse(JSON.stringify(templateData));

    const deleteObjects = (data, parentKey) => {
      data.objects = data.objects.filter(
        (object) => object.parentKey !== parentKey
      );
      data.subSections
        .filter((subSection) => subSection.parentKey === parentKey)
        .forEach((subSection) => deleteObjects(data, subSection.key));
    };

    deleteObjects(updatedData.data, key);

    updatedData.data.subSections = updatedData.data.subSections.filter(
      (subSection) => subSection.parentKey !== key
    );

    updatedData.data.sections = updatedData.data.sections.filter(
      (section) => section.key !== key
    );

    setTemplateData(updatedData);
  };

  const deleteSubSection = (id, key) => {
    const updatedData = JSON.parse(JSON.stringify(templateData));
    const deleteObjects = (data, parentKey) => {
      data.objects = data.objects.filter(
        (object) => object.parentKey !== parentKey
      );
      data.subSections
        .filter((subSection) => subSection.parentKey === parentKey)
        .forEach((subSection) => deleteObjects(data, subSection.key));
    };

    deleteObjects(updatedData.data, key);

    updatedData.data.subSections = updatedData.data.subSections.filter(
      (subSection) => subSection.key !== key
    );
    setTemplateData(updatedData);
  };

  const deleteObjects = (id, key) => {
    const updatedData = JSON.parse(JSON.stringify(templateData));
    updatedData.data.objects = updatedData.data.objects.filter(
      (object) => object.key !== key
    );
    setTemplateData(updatedData);
  };

  return (
    <TemplateContext.Provider
      value={{
        templateData,
        setTemplateData,
        deleteSection,
        deleteSubSection,
        deleteObjects,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
}
