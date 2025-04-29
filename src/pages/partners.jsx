import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "@theme/Layout";
import "../css/custom.css";
import { partners } from "../../content/Partners";
import { useColorMode } from "@docusaurus/theme-common"; // keep this import

const PartnersContent = () => {
  const { colorMode } = useColorMode();  // Now safe: inside Layout!

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:mx-0 px-4">
          <h1>Our partners</h1>
          <p className="mt-8 text-lg leading-8 text-gray-600 break-words">
            REALISE Lab collaborates with leading partners in order to deliver
            well-curated research
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0 border" />
                    <img
                      className="mx-auto"
                      src={colorMode === 'dark' ? partner.imagePathDark : partner.imagePathLight}
                      alt={partner.name}
                    />
                    <h5>{partner.name}</h5>
                  </a>
                </h3>
                <h5>Collaboration topics:</h5>
                <p>{partner.collaboration_topics}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <Layout>
      <PartnersContent />
    </Layout>
  );
};

export default Partners;
