import React from "react";
import "tailwindcss/tailwind.css";
import "../css/custom.css";
import { partners } from "../../content/Partners";
import { useColorMode } from "@docusaurus/theme-common";  // Docusaurus hook!

const PartnersMainPage = () => {
  const { colorMode } = useColorMode();  // 'light' or 'dark'

  return (
    <div className="mx-auto flex justify-center w-full">
      <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 w-full lg:grid-cols-3">
        {partners.map((partner) => (



          <article
            key={partner.name}
            className="flex w-full flex-col items-center justify-between"
          >
            <div className="group relative w-full h-48 flex items-center justify-center rounded-xl transition hover:shadow-md dark:bg-gray-200">
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full flex items-center justify-center"
              >
                <img
                  className="max-h-32 max-w-[90%] object-contain"
                  src={partner.imagePath}
                  alt={partner.name}
                />
              </a>
            </div>
          </article>




        ))}
      </div>
    </div>
  );
};

export default PartnersMainPage;
