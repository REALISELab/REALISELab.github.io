import React from "react";
import Layout from "@theme/Layout";
import { LuPresentation } from "react-icons/lu";
import { FaGithub, FaRegFilePdf } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
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
];
const projectDetail1 = () => {
  return (
    <Layout>
      <div className="w-[700px] h-[400px] flex justify-center mx-auto my-11">
        <img
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          alt=""
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="w-[900px] mx-auto">
        <span className=" text-2xl font-bold flex justify-center ">
          {" "}
          Boost your conversion rate{" "}
        </span>
      </div>
      <span className="mx-auto text-gray-700 text-lg w-[900px] my-10">
        Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae
        illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem
        placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
      </span>
      <div className="w-[900px] ">
        <span className=" text-2xl font-bold flex justify-center text-gray-500 ">
          Related Publications:{" "}
        </span>
      </div>
      <div className="mx-auto  max-w-2xl border-t border-gray-200 pt-3   lg:mx-0 lg:max-w-none flex-col justfify-center items-center ">
        {publications.map((publication) => (
          <article
            key={publication.id}
            className="flex max-w-4xl flex-col items-start justify-between mx-auto mb-10 hover:scale-105 duration-300"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={publication.datetime} className="text-gray-500">
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
                  <LuPresentation size={20} /> <span>Presentation </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default projectDetail1;
