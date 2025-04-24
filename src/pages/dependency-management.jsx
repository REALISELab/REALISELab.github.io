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
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 my-10 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Leveraging the Community to Support Open-Source Library Maintainers
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            Modern software systems rely extensively on open-source libraries. However, managing dependencies and avoiding breaking changes is a persistent challenge. This project focuses on minimizing risks associated with dependency evolution by providing maintainers with actionable insights and automated tools. Our goal is to enhance reliability, security, and maintainability across the open source software supply chain—an impact critical to both industry and open-source ecosystems.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Research Focus:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 text-justify">
            <li>How can analyzing usage-patterns from dependents drive proactive, high-impact maintenance strategies?</li>
            <li>How can dependent test suites be leveraged to automatically generate tests to enhance library testing?</li>
            <li>Can simulating a library release with ecosystem data effectively predict and prevent breaking changes?</li>
            <li>How can automation support maintainers in improving software reliability?</li>
          </ul>

          {/* Contacts and Status in the same row */}
          <div className="flex flex-wrap items-center gap-8 mt-6">
            {/* Contacts */}
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 mr-2">Contacts:</h3>
              <p className="text-gray-700">
                <a href="/teamInfo/rachna" className="text-blue-600 hover:underline">Rachna Raj</a>,{" "}
                <a href="/teamInfo/diego" className="text-blue-600 hover:underline">Dr. Diego Costa</a>
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 mr-2">Status:</h3>
              <p className="text-gray-700">Ongoing</p>
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
