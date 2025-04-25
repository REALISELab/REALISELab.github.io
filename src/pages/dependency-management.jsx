import React from "react";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";
const projectDetail1 = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-full md:w-1/3 flex justify-center mx-auto px-3 my-11">
          <img
            src="img/software_supply_chain.jpg"
            alt=""
            className="rounded-xl w-full h-full"
          />
        </div>
        <div className="w-full mx-auto">
          <span className=" text-2xl font-bold flex justify-center ">
            {" "}
            Dependency Management{" "}
          </span>
        </div>
        {/* <p className="mx-auto text-gray-700 text-lg w-full text-center my-10 flex justify-center px-5">
          
        </p> */}

        {/* === Project Card Starts Here === */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 my-10 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Leveraging the Community to Support Open-Source Library Maintainers
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
          Modern software relies heavily on open-source libraries, yet safely managing changes within these libraries remains challenging. 
          Maintainers often lack constructive feedback or actionable guidance from their users to effectively evolve their projects. 
          This project aims to address this gap by bridging the communication between maintainers and their users, 
          fostering mutual support within the open-source community. 
          By providing practical insights and useful tools, 
          our ongoing work enables maintainers to proactively manage change and prevent issues before they impact users. 
          Ultimately, this enhances software reliability, security, and maintainability: delivering direct value to businesses, developers, and supporting broader technological innovation.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Research Focus:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 text-justify">
            <li>How can we support open-source maintainers in better managing their software?</li>
            <li>How can information from software users help maintainers improve their software?</li>
            <li>Can tests from one software help make other software safer?</li>
            <li>Can looking at how people use software predict future problems?</li>
            
          </ul>

          <div className="flex flex-wrap items-center gap-8 mt-6">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mr-2">Contacts:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="/teamInfo/rachna" className="text-blue-600 hover:underline">Rachna Raj</a>,{" "}
                <a href="/teamInfo/diego" className="text-blue-600 hover:underline">Dr. Diego Costa</a>
              </p>
            </div>

            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mr-2">Status:</h3>
              <p className="text-gray-700 dark:text-gray-300">Ongoing</p>
            </div>
          </div>
        </div>

        {/* === Project Card Ends Here === */}

        {/* === Project Card Starts Here === */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 my-10 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Reducing Risks in Open-Source Software Through Continuous Monitoring
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
            Open-source components are now integral to nearly every modern
            software system. However, their dynamic and decentralized nature
            makes them a frequent source of vulnerabilities and operational
            risks. Without ongoing visibility into these components and their
            updates, organizations remain exposed to security flaws,
            compatibility issues, and compliance challenges. This project
            focuses on developing scalable techniques for the continuous
            monitoring of open-source software and its supply chain. Our goal is
            to help developers and organizations stay ahead of threats by
            detecting risky changes early, improving transparency, and enabling
            smarter dependency decisions. These efforts directly contribute to
            building more secure, stable, and trustworthy software systems
            across the industry.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">
            Research Focus:
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 text-justify">
            <li>
              How can we automatically track and evaluate risks in open-source
              components?
            </li>
            <li>
              What techniques can detect problematic changes in libraries before
              they are adopted?
            </li>
            <li>
              Can we build systems that alert developers about vulnerabilities or
              outdated dependencies in real-time?
            </li>
            <li>
              How can we assess the trustworthiness of software supply chain
              over time?
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-8 mt-6">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mr-2">
                Contacts:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <a
                  href="/teamInfo/kawsar"
                  className="text-blue-600 hover:underline"
                >
                  Kawsar Ahmed Bhuiyan
                </a>
                ,{" "}
                <a
                  href="/teamInfo/diego"
                  className="text-blue-600 hover:underline"
                >
                  Dr. Diego Costa
                </a>
              </p>
            </div>

            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mr-2">
                Status:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Ongoing</p>
            </div>
          </div>
        </div>

        {/* === Project Card Ends Here === */}

        <div className=" w-full ">
          <span className=" text-2xl font-bold flex justify-center text-gray-500 ">
            Related Publications:{" "}
          </span>
        </div>
      </div>
      <div className="w-1/2 flex justify-center mx-auto">
        <PublicationsIteration project={"dependency-management"} all={false} />
      </div>
    </Layout>
  );
};

export default projectDetail1;
