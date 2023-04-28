import React from "react";

export function HelloMe() {
  return (
    <>
      <div className=" uppercase flex items-center justify-between flex-col text-3xl flex-wrap z-20 w-full">
        <div className="flex flex-col lg:flex-row w-full items-center justify-center mx-auto">
        <p className="uppercase text-white ">Bonjour ! 👋 Je suis</p>
        <section className="animation ">
          <div>
            <div className="uppercase text-white ">Thibault Rossa</div>
          </div>
          <div>
            <div className="uppercase text-white ">Développeur Web</div>
          </div>
          <div>
            <div className="uppercase text-white ">Passionné</div>
          </div>
          <div>
            <div className="uppercase text-white ">Curieux</div>
          </div>
        </section>
        </div>
        <div className="flex flex-col items-center justify-center">
        <p className="text-xl space-y-2 md:w-[40vw] w-[60vw] text-white">
                Développeur Web, curieux et passioné par le développement web et
                l'intelligence artificielle.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
              >
                Read more
                <svg
                  className="w-6 h-6 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              </div>
      </div>
    </>
  );
}
