import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FaGithub, FaRegFilePdf, FaPlay, FaBook } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { tools } from "../../content/Tools";

const FILTERS = ["All", "Tool", "Dataset"];
const FILTER_LABELS = { All: "All", Tool: "Tools", Dataset: "Datasets" };

function ExternalLink({ href, icon, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-sm hover:scale-105 duration-300"
    >
      {icon} <span>{label}</span>
    </a>
  );
}

function ToolCard({ tool }) {
  const image = useBaseUrl(tool.image || "");
  // Primary call to action: hosted demo, then detail page, then (for datasets) the download.
  const datasetIsPrimary =
    !tool.tryLink && !tool.detailsPage && tool.type === "Dataset" && Boolean(tool.datasetLink);
  const tryHref = tool.tryLink || tool.detailsPage || (datasetIsPrimary ? tool.datasetLink : "");
  const tryIsExternal = Boolean(tool.tryLink) || datasetIsPrimary;
  const tryLabel = datasetIsPrimary ? "Get the dataset" : "Try it";
  const TryIcon = datasetIsPrimary ? GoDatabase : FaPlay;

  const title = tool.detailsPage ? (
    <Link to={tool.detailsPage} className="text-gray-900 dark:text-white hover:underline">
      {tool.name}
    </Link>
  ) : (
    tool.name
  );

  return (
    <article className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition p-6">
      {tool.image && (
        <img
          src={image}
          alt={tool.name}
          className="mb-4 h-40 w-full rounded-lg object-cover"
        />
      )}

      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            tool.type === "Dataset"
              ? "bg-emerald-100 text-emerald-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {tool.type}
        </span>
        {(tool.tags || []).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs text-gray-600 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
        {tool.description}
      </p>

      {tool.paper && tool.paper.title && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="font-semibold">Reference paper: </span>
          {tool.paper.url ? (
            <a href={tool.paper.url} target="_blank" rel="noopener noreferrer">
              {tool.paper.title}
            </a>
          ) : (
            tool.paper.title
          )}
          {tool.paper.venue && <span> ({tool.paper.venue})</span>}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 mt-auto">
        {tryHref &&
          (tryIsExternal ? (
            <a
              href={tryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 hover:text-white hover:no-underline"
            >
              <TryIcon size={14} /> {tryLabel}
            </a>
          ) : (
            <Link
              to={tryHref}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 hover:text-white hover:no-underline"
            >
              <TryIcon size={14} /> {tryLabel}
            </Link>
          ))}
        <ExternalLink href={tool.githubLink} icon={<FaGithub size={18} />} label="GitHub" />
        {!datasetIsPrimary && (
          <ExternalLink href={tool.datasetLink} icon={<GoDatabase size={18} />} label="Dataset" />
        )}
        <ExternalLink href={tool.docsLink} icon={<FaBook size={16} />} label="Docs" />
        <ExternalLink
          href={tool.paper && tool.paper.url}
          icon={<FaRegFilePdf size={18} />}
          label="Paper"
        />
      </div>
    </article>
  );
}

export default function Tools() {
  const [filter, setFilter] = useState("All");
  const visible = tools.filter((t) => filter === "All" || t.type === filter);

  return (
    <Layout title="Tools & Datasets">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:mx-0 px-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Tools &amp; Datasets
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Tools and datasets developed at REALISE Lab. Try them online,
              install them locally, or reuse our data in your own research.
            </p>
          </div>

          <div className="mt-10 flex gap-2 px-4 lg:px-0">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium cursor-pointer transition ${
                  filter === f
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-transparent border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {FILTER_LABELS[f]}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-gray-200 pt-10 lg:grid-cols-3">
            {visible.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
