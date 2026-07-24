import React, { useMemo, useState } from "react";
import { DefaultPublications } from "../../content/Publications";
import PublicationCard from "./PublicationCard";
import {
  FACETS,
  applyFilters,
  emptySelection,
  facetOptionsFor,
  groupByYearDesc,
} from "./publicationsFilter";

// How many venue options to show before the "Show all" expander.
const VENUE_COLLAPSED_COUNT = 8;

function FacetGroup({ facet, options, selected, onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const collapsible =
    facet.key === "venueShort" && options.length > VENUE_COLLAPSED_COUNT;
  const visible =
    collapsible && !expanded ? options.slice(0, VENUE_COLLAPSED_COUNT) : options;

  return (
    <div className="mb-6 lg:mb-8">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
        {facet.label}
      </h4>
      <ul className="list-none p-0 m-0 space-y-1">
        {visible.map(({ value, label, count }) => {
          const isSelected = selected.includes(value);
          const disabled = count === 0 && !isSelected;
          return (
            <li key={value} className="m-0">
              <label
                className={`flex items-center gap-2 text-sm rounded px-1 py-0.5 ${
                  disabled
                    ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                    : "text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <input
                  type="checkbox"
                  className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:bg-gray-800"
                  checked={isSelected}
                  disabled={disabled}
                  onChange={() => onToggle(facet.key, value)}
                />
                <span className="flex-1">{label}</span>
                <span className="tabular-nums text-xs text-gray-500 dark:text-gray-400">
                  {count}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
      {collapsible && (
        <button
          type="button"
          className="mt-2 text-xs text-blue-600 dark:text-blue-400 bg-transparent border-0 p-0 cursor-pointer hover:underline"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "Show fewer" : `Show all (${options.length})`}
        </button>
      )}
    </div>
  );
}

export default function PublicationsBrowser() {
  const [selection, setSelection] = useState(emptySelection);
  const [showCitation, setShowCitation] = useState({});

  const toggleValue = (facetKey, value) =>
    setSelection((prev) => {
      const current = prev[facetKey];
      return {
        ...prev,
        [facetKey]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });

  const results = useMemo(
    () => applyFilters(DefaultPublications, selection),
    [selection]
  );

  const facetOptions = useMemo(
    () =>
      FACETS.map((facet) => ({
        facet,
        options: facetOptionsFor(DefaultPublications, selection, facet),
      })),
    [selection]
  );

  const byYear = useMemo(() => groupByYearDesc(results), [results]);

  const activeCount = Object.values(selection).reduce((n, v) => n + v.length, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="lg:w-64 lg:shrink-0">
        <div className="lg:sticky lg:top-24 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 m-0">
              Filters
            </h3>
            {activeCount > 0 && (
              <button
                type="button"
                className="text-xs text-blue-600 dark:text-blue-400 bg-transparent border-0 p-0 cursor-pointer hover:underline"
                onClick={() => setSelection(emptySelection())}
              >
                Clear all
              </button>
            )}
          </div>
          {facetOptions.map(({ facet, options }) => (
            <FacetGroup
              key={facet.key}
              facet={facet}
              options={options}
              selected={selection[facet.key]}
              onToggle={toggleValue}
            />
          ))}
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {results.length === DefaultPublications.length
            ? `${results.length} publications`
            : `${results.length} of ${DefaultPublications.length} publications`}
        </p>

        {results.length === 0 && (
          <p className="text-gray-600 dark:text-gray-400">
            No publications match these filters.
          </p>
        )}

        {byYear.map(([year, pubs]) => (
          <section key={year}>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">
              {year}
            </h2>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              {pubs.map((pub) => {
                const id = `${pub.year}-${pub.title}`;
                return (
                  <PublicationCard
                    key={id}
                    pub={pub}
                    showCitation={showCitation[id]}
                    onToggleCitation={() =>
                      setShowCitation((prev) => ({ ...prev, [id]: !prev[id] }))
                    }
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
