interface RFQData {
  data: {
    sections: Section[];
    subSections: Section[];
    objects: Object[];
  };
}

interface SectionPr {
  data: {
    id: string;
    rfqId: string;
    key: string;
    parentKey: string | null;
    name: string;
    description: string;
  };
  sectionNumber: number;
}

interface SubSectionPr {
  data: {
    id: string;
    rfqId: string;
    key: string;
    parentKey: string | null;
    name: string;
    description: string;
  };
  subSectionNumber: number;
}

interface ObjectPr {
  data: {
    id: string;
    rfqId: string;
    key: string;
    parentKey: string;
    name: string;
    description: string;
    isRequired: boolean;
    isAlternativeAllowed: boolean;
  };
  objectNumber: number;
}
