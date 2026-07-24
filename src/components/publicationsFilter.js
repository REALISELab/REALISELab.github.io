// Pure filtering/faceting logic for the publications browser.
// Kept free of JSX so it can be exercised directly in Node.

export const TOPIC_LABELS = {
  "dependency-management": "Dependency Management",
  "performance-engineering": "Performance Engineering",
  "mining-repositories": "Mining Repositories",
  "ai4se": "AI for SE",
  "se4ai": "SE for AI",
  "security": "Security",
  "program-analysis": "Program Analysis",
  "human-factors": "Human Factors",
  "chatbots": "Chatbots",
  "human-activity-recognition": "Human Activity Recognition",
};

export const FACETS = [
  { key: "type", label: "Type", values: (p) => [p.type] },
  { key: "venueShort", label: "Venue", values: (p) => [p.venueShort] },
  { key: "topics", label: "Topic", values: (p) => p.topics || [] },
];

export const emptySelection = () => ({ type: [], venueShort: [], topics: [] });

const matchesFacet = (pub, facet, selected) =>
  // OR within a facet; an empty selection matches everything
  selected.length === 0 || facet.values(pub).some((v) => selected.includes(v));

// AND across facets, OR within — optionally ignoring one facet, which is what
// makes counts contextual (a facet's options aren't narrowed by its own picks).
export const applyFilters = (pubs, selection, exceptKey) =>
  pubs.filter((pub) =>
    FACETS.every(
      (f) => f.key === exceptKey || matchesFacet(pub, f, selection[f.key])
    )
  );

export const facetOptionsFor = (pubs, selection, facet) => {
  const pool = applyFilters(pubs, selection, facet.key);
  const counts = {};
  const universe = new Set();
  pubs.forEach((p) => facet.values(p).forEach((v) => v && universe.add(v)));
  pool.forEach((p) =>
    facet.values(p).forEach((v) => {
      if (v) counts[v] = (counts[v] || 0) + 1;
    })
  );
  return [...universe]
    .map((value) => ({
      value,
      label: facet.key === "topics" ? TOPIC_LABELS[value] || value : value,
      count: counts[value] || 0,
    }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
};

export const groupByYearDesc = (pubs) => {
  const grouped = pubs.reduce((acc, pub) => {
    (acc[pub.year] = acc[pub.year] || []).push(pub);
    return acc;
  }, {});
  return Object.keys(grouped)
    .sort((a, b) => b - a)
    .map((year) => [year, grouped[year]]);
};
