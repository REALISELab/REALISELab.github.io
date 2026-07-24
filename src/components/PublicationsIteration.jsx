import React, { useState } from "react";
import { DefaultPublications } from "../../content/Publications";
import PublicationCard from "./PublicationCard";

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
                  <PublicationCard
                    key={innerIndex}
                    pub={pub}
                    showCitation={showTextAreas[uniqueId]}
                    onToggleCitation={() => toggleTextArea(uniqueId)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
