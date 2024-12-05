import React, { useState } from "react"; 
import { FaGithub, FaRegFilePdf, FaQuoteLeft, FaCopy } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { LuPresentation } from "react-icons/lu";
import { DefaultPublications } from "../../content/Publications";

export default function PublicationsIteration({ project, year, all }) {
  const [showTextAreas, setShowTextAreas] = useState({});

  const toggleTextArea = (id) => {
    setShowTextAreas((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const groupPublicationsByYearAndType = (publications) => {
    return publications.reduce((acc, publication) => {
      const { year, type } = publication;
      if (!acc[year]) {
        acc[year] = {};
      }
      if (!acc[year][type]) {
        acc[year][type] = [publication];
      } else {
        acc[year][type].push(publication);
      }
      return acc;
    }, {});
  };

  const filteredPublications = DefaultPublications.filter((publication) => {
    const projectMatch = project ? publication.project === project : true;
    const yearMatch = year ? publication.year === year : true;
    return projectMatch && yearMatch;
  });

  const groupedPublications = groupPublicationsByYearAndType(filteredPublications);

  // Sort the years in descending order
  const sortedYears = Object.keys(groupedPublications).sort((a, b) => b - a);

  return (
    <div className="mx-auto max-w-2xl border-t border-gray-200 pt-4 lg:mx-0 lg:max-w-none flex-col justify-center items-center">
      {sortedYears.map((year) => (
        <div key={year}>
          {Object.keys(groupedPublications[year]).map((type) => (
            <div key={type}>
              {groupedPublications[year][type].map((pub, innerIndex) => {
                const uniqueId = `${year}0${innerIndex}0${type}`;
                return (
                  <article
                    key={innerIndex}
                    className="flex max-w-4xl flex-col items-start justify-between mx-auto "
                  >
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={pub.datetime} className="text-gray-500">
                        {pub.dateTime}
                      </time>
                    </div>
                    <div className="group relative w-full">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 mb-2">
                        <div className="text-2xl">
                          <span className="absolute inset-0" />
                          {pub.title}
                        </div>
                      </h3>
                      <h5 style={{ display: "inline" }}>Authors:</h5>
                      <p style={{ display: "inline" }}> {pub.authors}</p>
                      <br />
                      <h5 style={{ display: "inline" }}>Venue:</h5>
                      <p style={{ display: "inline" }}> {pub.venue}</p>
                    </div>
                    <div className="flex justify-start items-center gap-3 w-full mb-8">
                      {pub.pdfPathHref && (
                        <a
                          href={pub.pdfPathHref}
                          className="flex justify-center items-center hover:scale-105 duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaRegFilePdf size={20} /> <span>PDF</span>
                        </a>
                      )}
                      {pub.datasetLink && (
                        <a
                          className="flex justify-center items-center hover:scale-105 duration-300"
                          href={pub.datasetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GoDatabase size={20} /> <span>Dataset</span>
                        </a>
                      )}
                      {pub.githubLink && (
                        <a
                          className="flex justify-center items-center hover:scale-105 duration-300"
                          href={pub.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub size={20} /> <span>Github</span>
                        </a>
                      )}
                      {pub.presentationLink && (
                        <a
                          className="flex justify-center items-center hover:scale-105 duration-300"
                          href={pub.presentationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LuPresentation size={20} />{" "}
                          <span>Presentation </span>
                        </a>
                      )}
                      {pub.videoLink && (
                        <a
                          className="flex justify-center items-center hover:scale-105 duration-300"
                          href={pub.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LuPresentation size={20} />{" "}
                          <span>Video </span>
                        </a>
                      )}
                      {pub.replicationPackageLink && (
                        <a
                          className="flex justify-center items-center hover:scale-105 duration-300"
                          href={pub.replicationPackageLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GoDatabase size={20} />{" "}
                          <span>Replication package </span>
                        </a>
                      )}
                      {pub.citation && (
                        <div
                          className="flex justify-center items-center hover:scale-105 duration-300 text-[#868fa9] cursor-pointer"
                          onClick={() => toggleTextArea(uniqueId)}
                        >
                          <FaQuoteLeft />
                          <span>BibTex</span>
                        </div>
                      )}
                    </div>
                    {pub.citation && showTextAreas[uniqueId] && (
                      <div className="relative w-full pop-down">
                        <textarea
                          className="rounded-[7px] bg-gray-200 border-0 w-full p-2"
                          rows={4}
                          cols={50}
                          value={pub.citation}
                          readOnly
                        />
                        <button
                          className="absolute top-2 right-6 bg-transparent text-gray-600 p-2 rounded-md hover:text-gray-800 focus:outline-none opacity-20"
                          onClick={() => navigator.clipboard.writeText(pub.citation)}
                          title="Copy to clipboard"
                        >
                          <FaCopy />
                        </button>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
