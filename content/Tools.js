// Tools and datasets developed by REALISE Lab.
// Each entry is rendered as a card on /tools.
//
// Fields:
//   slug         unique id (also used for the detail page path, if any)
//   name         display name
//   type         "Tool" | "Benchmark" | "Dataset"
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
  {
    slug: "mozilla-performance-dataset",
    name: "Mozilla Performance Measurements and Alerts",
    type: "Dataset",
    description:
      "One year (May 2023 to May 2024) of Mozilla's performance testing data: 5,655 performance time series, 17,989 performance alerts, and annotations of the resulting bugs, as CSV files with the scripts used to collect them (CC BY 4.0).",
    tags: ["performance-engineering"],
    tryLink: "",
    githubLink: "",
    datasetLink: "https://doi.org/10.5281/zenodo.14642238",
    docsLink: "",
    detailsPage: "",
    paper: {
      title: "A Dataset of Performance Measurements and Alerts from Mozilla (Data Artifact)",
      venue: "ICPE 2025",
      url: "https://arxiv.org/abs/2503.16332",
    },
    image: "",
  },
  {
    slug: "spotjmhbugs",
    name: "SpotJMHBugs",
    type: "Tool",
    description:
      "A SpotBugs plugin that statically detects bad practices in JMH (Java Microbenchmark Harness) benchmarks, such as unused returned computations, accumulation inside loops, final primitive inputs, per-invocation fixtures, and zero forks.",
    tags: ["performance-engineering"],
    tryLink: "",
    githubLink: "https://github.com/DiegoEliasCosta/spotjmhbugs",
    datasetLink: "",
    docsLink: "",
    detailsPage: "/tools/spotjmhbugs",
    paper: {
      title: "What's Wrong With My Benchmark Results? Studying Bad Practices in JMH Benchmarks",
      venue: "IEEE TSE 2019",
      url: "https://asgaard.ece.ualberta.ca/papers/Journal/TSE_2019_Costa_Whats_Wrong_With_My_Benchmark_Results_Studying_Bad_Practices_in_JMH_Benchmarks.pdf",
    },
    image: "",
  },
  {
    slug: "collectionsbench",
    name: "CollectionsBench",
    type: "Benchmark",
    description:
      "A JMH benchmark suite for comparing Java collection libraries (JDK, Fastutil, Guava, Koloboke, HPPC, Eclipse Collections, Trove, and more) on lists, sets, and maps under a common set of workloads.",
    tags: ["performance-engineering"],
    tryLink: "",
    githubLink: "https://github.com/DiegoEliasCosta/CollectionsBench",
    datasetLink: "",
    docsLink: "",
    detailsPage: "/tools/collectionsbench",
    paper: {
      title: "Empirical Study of Usage and Performance of Java Collections",
      venue: "ICPE 2017",
      url: "https://doi.org/10.1145/3030207.3030221",
    },
    image: "",
  },
];
