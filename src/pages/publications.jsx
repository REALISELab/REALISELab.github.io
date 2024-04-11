import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "@theme/Layout";
import { FaGithub, FaRegFilePdf } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { LuPresentation } from "react-icons/lu";

const Example = () => {
  const publications = [
    {
      id: 1,
      title: "The role of library versions in Developer-ChatGPT conversations",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      datetime: "2024-01-29",
      authors: "D. Costa, R. Raj",
    },
    {
      id: 2,
      title: "Predicting the Impact of Crashes Across Release Channels",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      datetime: "2024-01-29",
      authors: "D. Costa, S. Mujahid, C. Castelluccio",
    },
    {
      id: 3,
      title:
        "Predicting the First Response Latency of Maintainers and Contributors in Pull Requests",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      datetime: "2023-11-13",
      authors: "S. Khatoonabadi, A. Abdellatif, D. Costa, E. Shihab",
      pdfPathHref: "https://arxiv.org/pdf/2311.07786.pdf",
    },
    {
      id: 4,
      title: "Dependency Practices for Vulnerability Mitigation",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      datetime: "2023-11-13",
      authors: "A. Javan Jafar, D. Costa, A. Abdellatif, E. Shihab",
      pdfPathHref: "https://arxiv.org/pdf/2310.07847.pdf",
    },
  ];

  return (
    <Layout>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our publications
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Publications made by REALISE Lab
            </p>
          </div>

          <div className="mx-auto mt-10  max-w-2xl  border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none flex-col justfify-center items-center ">
            {publications.map((publication) => (
              <article
                key={publication.id}
                className="flex max-w-4xl flex-col items-start justify-between mx-auto mb-10 hover:scale-105 duration-300"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={publication.datetime}
                    className="text-gray-500"
                  >
                    {publication.dateTime}
                  </time>
                </div>
                <div className="group relative w-full">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <div className="text-2xl">
                      <span className="absolute inset-0" />
                      {publication.title}
                    </div>
                  </h3>
                  <h5>Authors: {publication.authors}</h5>
                  <div className="flex justify-end items-center gap-3 w-full mb-3">
                  {publication.pdfPathHref ? (
                      <a
                        className="flex justify-center items-center hover:scale-105 duration-300"
                        href={publication.pdfPathHref}
                      >
                        <FaRegFilePdf size={20} /> <span>PDF</span>
                      </a>
                    ) : null}
                    <a
                      className="flex justify-center items-center hover:scale-105 duration-300"
                      href={publication.pdfPathHref}
                    >
                     <GoDatabase size={20} /> <span>Database</span>
                    </a>
                    <a
                      className="flex justify-center items-center hover:scale-105 duration-300"
                      href={publication.pdfPathHref}
                    >
                      <FaGithub size={20} /> <span>Github</span>
                    </a>
                    <a
                      className="flex justify-center items-center hover:scale-105 duration-300"
                      href={publication.pdfPathHref}
                    >
                      <LuPresentation size={20} /> <span>Presentation   </span>
                    </a>
                    
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Example;
