// Tools and datasets developed by REALISE Lab.
// Each entry is rendered as a card on /tools.
//
// Fields:
//   slug         unique id (also used for the detail page path, if any)
//   name         display name
//   type         "Tool" | "Dataset"
//   description  one or two sentences
//   tags         optional list of topics (e.g., "dependency-management", "se4ai")
//   tryLink      optional external link where people can try it (HF Space, Streamlit, web app, ...)
//   githubLink   optional source repository
//   datasetLink  optional dataset download (Zenodo, HF Datasets, ...)
//   docsLink     optional external documentation
//   detailsPage  optional internal page with usage/install instructions (e.g., "/tools/<slug>"),
//                created by copying src/pages/tools/_example-tool.mdx to src/pages/tools/<slug>.mdx
//                (files starting with "_" are not published)
//   paper        optional reference paper: { title, venue, url }
//   image        optional thumbnail under static/ (e.g., "img/tools/<slug>.png")

export const tools = [
  {
    slug: "ossbridge",
    name: "OSSBridge",
    type: "Tool",
    description:
      "Community-based analytics for open-source library maintainers: see how the projects that depend on your library actually use its API, and how well your test suite covers the API methods your community relies on.",
    tags: ["dependency-management"],
    tryLink: "https://huggingface.co/spaces/rachna1508/ossbridge",
    githubLink: "",
    datasetLink: "",
    docsLink: "",
    detailsPage: "",
    paper: {
      title: "Towards Supporting Open Source Library Maintainers with Community-Based Analytics",
      venue: "ICSE 2026",
      url: "https://arxiv.org/abs/2510.15794",
    },
    image: "",
  },
  {
    slug: "github-file-history",
    name: "GitHub File History",
    type: "Tool",
    description:
      "Track how the files, directories, and file extensions of a GitHub repository evolve over time, using data from the GitHub API.",
    tags: ["mining-repositories"],
    tryLink: "https://andrehora.github.io/file-history/",
    githubLink: "https://github.com/andrehora/file-history",
    datasetLink: "",
    docsLink: "",
    detailsPage: "",
    paper: {
      title: "What's Inside a GitHub Repository? An Empirical Study on the Contents of 10K Projects",
      venue: "ICSME 2026, NIER track",
      url: "https://arxiv.org/abs/2605.16701",
    },
    image: "",
  },
];
