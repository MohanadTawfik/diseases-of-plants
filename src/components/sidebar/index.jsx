import { TypesContext } from "views/Contexts/TypesContext";
import SidebarTab from "./components/sidebarTabe";
import { useContext } from "react";
import { SectionContext } from "views/Contexts/SectionContext";
import DefaultImg from "assets/img/default.png";

const Sidebar = ({ open, onClose }) => {
  const selectedType = useContext(TypesContext);
  const selectedSection = useContext(SectionContext);

  return (
    <div
      className={`sm-none duration-175 linear !z-50 flex min-h-full flex-shrink-0 flex-col border-r border-neutral-200 bg-neutral-100 pb-5
     pt-5 shadow-2xl backdrop-blur-lg transition-all md:!z-50 lg:!z-50 lg:backdrop-blur-0 xl:!z-0 dark:border-neutral-800 dark:bg-neutral-700/25
    ${open ? " tranneutral-x-0 w-72" : "-tranneutral-x-96 w-0"}`}
    >
      <SidebarTab />

      <div className=" h-full overflow-y-auto">
        <div className="space-y-4 p-4 pb-10">
          {selectedType.type.data.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => selectedSection.setSection(item)}
                className={`flex w-full flex-col rounded-md bg-white p-3 dark:bg-neutral-800
              ${
                (selectedSection.section === item ? true : false)
                  ? "relative shadow-lg ring-2 ring-blue-500 focus:outline-none"
                  : "shadow"
              } 
                `}
              >
                <div className="flex w-full flex-col items-center font-medium capitalize text-neutral-900 xl:flex-row dark:text-white">
                  <img
                    src={DefaultImg}
                    className="mr-2 h-7 w-7 rounded-full"
                    alt="bacterial"
                  />
                  <p className="text-start">{item.disease}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
