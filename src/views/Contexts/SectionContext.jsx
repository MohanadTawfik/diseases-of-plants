import { createContext, useState } from "react";
import { DataDiseases } from "views/variables/DataDiseases";

export const SectionContext = createContext({});

export default function SectionProvider({ children }) {
  const [section, setSection] = useState(DataDiseases[0].data[0]);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}
