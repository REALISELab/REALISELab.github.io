import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "@theme/Layout";
import "../css/custom.css";
import { partners, partnerCategories } from "../../content/Partners";

const PartnerCard = ({ partner }) => (
  <article className="flex max-w-xl flex-col items-start justify-between">
    <div className="group relative w-full h-48 rounded-xl transition hover:shadow-md dark:bg-gray-200 flex items-center justify-center">
      <a
        href={partner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full h-full">
        <img
          className="max-h-32 max-w-[90%] object-contain"
          src={partner.imagePath}
          alt={partner.name}
        />
      </a>
    </div>

    {/* Text content below the image frame */}
    <div className="mt-4 text-center w-full">
      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
        {partner.name}
      </h5>
      <h6 className="mt-2 text-sm font-semibold text-gray-700 dark:text-white">
        Collaboration topics:
      </h6>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {partner.collaboration_topics}
      </p>
    </div>
  </article>
);

const Partners = () => {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:mx-0 px-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our partners
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300 break-words">
              REALISE Lab collaborates with leading partners in order to deliver
              well-curated research
            </p>
          </div>

          {partnerCategories.map((category) => {
            const members = partners.filter((p) => p.category === category.key);
            if (members.length === 0) return null;
            return (
              <section key={category.key} className="mt-16">
                <h2 className="px-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
                <div className="mx-auto flex justify-center w-full">
                  <div className="mx-auto mt-6 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 w-full lg:grid-cols-3">
                    {members.map((partner) => (
                      <PartnerCard key={partner.name} partner={partner} />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
