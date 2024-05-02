import Sidebar from "components/sidebar";
import React from "react";
import Content from "views/Content";
import Footer from "components/footer/Footer";

import DefaultImg from "assets/img/default.png";
import Doc_Dark from "assets/img/docs-dark@30.1a9f8cbf.avif";
import Doc_tyni from "assets/img/docs-dark@tinypng.1bbe175e.png";
import Docs from "assets/img/docs@30.8b9a76a2.avif";
import Docs_Tyni from "assets/img/docs@tinypng.d9e4dcdc.png";

export default function Layout() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
        <div className="flex w-[108rem] flex-none justify-end">
          <picture>
            <source srcSet={Docs} type="image/avif" />
            <img
              src={Docs_Tyni}
              alt=""
              className="w-[71.75rem] max-w-none flex-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source srcSet={Doc_Dark} type="image/avif" />
            <img
              src={Doc_tyni}
              alt=""
              className="hidden w-[90rem] max-w-none flex-none dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>

      <div className="flex h-screen overflow-x-hidden bg-white text-sm text-neutral-600 dark:bg-neutral-900 dark:text-white">
        <div className="flex h-full flex-grow flex-col overflow-x-hidden">
          <div className="!z-100 sticky top-0 flex w-full flex-col border-b border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-800 dark:text-white">
            <div className="flex w-full items-center">
              <div className="flex items-center text-3xl text-neutral-900 dark:text-white">
                <img
                  src={DefaultImg}
                  className="mr-4 w-12 rounded-full"
                  alt="bacterial"
                />
                <h4 className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-2xl font-bold text-transparent">
                  Plants Diseases
                </h4>
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="ms-auto block inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-full">
            <div className="relative flex flex-grow dark:bg-neutral-900">
              <Sidebar open={open} />

              <div className="h-full flex-grow overflow-y-auto bg-neutral-100 p-2 md:pr-2 dark:bg-neutral-700/25">
                <div className="mx-auto mb-auto">
                  <Content />
                </div>
                <div className="p-3">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
