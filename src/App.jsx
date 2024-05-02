import Layout from "./layouts";
import TypesProvider from "views/Contexts/TypesContext";
import SectionProvider from "views/Contexts/SectionContext";

const App = () => {
  return (
    <>
      <TypesProvider>
        <SectionProvider>
          <Layout />
        </SectionProvider>
      </TypesProvider>
    </>
  );
};

export default App;
