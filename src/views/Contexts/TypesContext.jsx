import { createContext, useState } from "react";
import { DataDiseases } from "views/variables/DataDiseases";

export const TypesContext = createContext({});

export default function TypesProvider({ children }) {
  const [type, setType] = useState(DataDiseases[0]);

  return (
    <TypesContext.Provider value={{ type, setType }}>
      {children}
    </TypesContext.Provider>
  );
}
