import React from "react";
import Layout from "@theme/Layout";
const projectslist = [
  {
    id: 1,
    title: "Securing the Software Supply Chain",
    href: "/dependency-management",
    description:
      "How to reduce the risks of developing and reusing open source software components? ",
    imageUrl:
      "img/software_supply_chain.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 1,
    title: "Building the Future of Performance Testing Methods",
    href: "/performance-engineering",
    description:
      "How do we make our Performance Testing more agile?",
    imageUrl:
      "img/performance_engineering.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 1,
    title: "Reliably Engineering AI Systems",
    href: "/se4ai",
    description:
      "How do we ensure our AI systems are reliable, safe, and secure?",
    imageUrl:
      "img/se4ai.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 1,
    title: "AI for Software Engineering",
    href: "/ai4se",
    description:
      "How do we automate software engineering tasks?",
    imageUrl:
      "img/ai4se.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  // Add more projects here...
];

const projects = () => {
  return (
    <Layout>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1>
              Our Projects
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn more about our projects.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {projectslist.map((project) => (
              <article
                href={project.href}
                key={project.id}
                className="hover:scale-105 duration-300 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={project.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-lg font-bold leading-6 text-white mb-4">
                  <a href={project.href}>
                    <span className="mr-8 text-white">{project.title}</span>
                  </a>
                </div>
                <span className="text-gray-300 font-normal text-md">
                  {project.description}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projects;
