import React from "react";
import { FaGithub, FaRegFilePdf, FaQuoteLeft, FaCopy } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { LuPresentation } from "react-icons/lu";

export default function PublicationCard({ pub, showCitation, onToggleCitation }) {
  return (
    <article className="flex max-w-4xl flex-col items-start justify-between mx-auto ">
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
            <LuPresentation size={20} /> <span>Presentation </span>
          </a>
        )}
        {pub.videoLink && (
          <a
            className="flex justify-center items-center hover:scale-105 duration-300"
            href={pub.videoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuPresentation size={20} /> <span>Video </span>
          </a>
        )}
        {pub.replicationPackageLink && (
          <a
            className="flex justify-center items-center hover:scale-105 duration-300"
            href={pub.replicationPackageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoDatabase size={20} /> <span>Replication package </span>
          </a>
        )}
        {pub.citation && (
          <div
            className="flex justify-center items-center hover:scale-105 duration-300 text-[#868fa9] cursor-pointer"
            onClick={onToggleCitation}
          >
            <FaQuoteLeft />
            <span>BibTex</span>
          </div>
        )}
      </div>
      {pub.citation && showCitation && (
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
}
