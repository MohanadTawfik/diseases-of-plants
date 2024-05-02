import { useContext } from "react";
import { TypesContext } from "views/Contexts/TypesContext";
import { SectionContext } from "views/Contexts/SectionContext";
import { DataDiseases } from "views/variables/DataDiseases";

const SidebarTab = () => {
  const selectedType = useContext(TypesContext);
  const selectedSection = useContext(SectionContext);

  return (
    <div className="ml-4 mr-4 box-border rounded-lg bg-white p-1 text-[14px] [box-shadow:0_0_0px_1px_rgba(0,_0,_0,_0.06)] dark:bg-neutral-800">
      <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
        {DataDiseases.map((item, index) => {
          return (
            <li key={index} className="basis shrink grow">
              <button
                onClick={() => {
                  selectedType.setType(item);
                  selectedSection.setSection(item.data[0]);
                }}
                className={`h-full w-full cursor-pointer items-center justify-center rounded-lg border-[none] p-3 text-center [transition:all_.15s_ease-in-out]     
                      ${
                        (item === selectedType.type ? true : false)
                          ? "bg-neutral-100 text-blue-500 dark:bg-neutral-900 dark:text-white"
                          : "bg-white text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      } 
              `}
              >
                {item.type}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarTab;
