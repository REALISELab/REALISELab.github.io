import React from "react";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";

const projectDetail1 = () => {
  return (
<Layout>
      <div className="w-full">
        <div className="w-full md:w-1/3 flex justify-center mx-auto px-3 my-11">
          <img
            src="img/ai4se.png"
            alt=""
            className="rounded-xl w-3/4 h-3/4"
          />
        </div>
        <div className="w-full mx-auto">
          <span className=" text-2xl font-bold flex justify-center ">
          {" "}
          AI for Automating Software Engineering Tasks{" "}
          </span>
        </div>
        
        {/* === Project Card Starts Here === */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 my-10 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Democratizing Repository Automation with Cost-Efficient Open-Source LLMs
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
            <h3>TL;DR:</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
              Watch a short video pitch of our project (3 minutes): 
              </p>
              <div className="mb-6 flex justify-center">
              <video
                controls
                className="w-3/4 rounded-lg shadow-inner"
                poster="/videos/Gens_pitch_thumb.jpg" /* optional thumbnail */
              >
                <source src="/videos/Gens_pitch.mp4" type="video/mp4" />
                {/* <source src="/videos/demo.webm" type="video/webm" /> */}
                Your browser does not support the <code>video</code> element.
              </video>
            </div>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
          Large language models (LLMs) have shown proficiency in several software engineering tasks such as code summarization, test case generation and code review automation. 
          However, most popular benchmarks focus on limited contexts—often a single file or method—while repository-level challenges introduce new complexities. 
          Managing extensive codebases means dealing with input context limits and maintaining a clear understanding of how interrelated files and components work together. 
          Moreover, the most effective current solutions rely on closed-source LLMs that may incur significant recurring costs, raise privacy concerns with proprietary data shared via APIs, 
          and have high energy consumption, all of which inhibit broader industrial adoption.

          To tackle these issues, we research the application of smaller, open-source LLMs by finding approaches to reduce the search space required to pinpoint relevant contexts within repositories. 
          We explore agentic workflows that decompose complex tasks into manageable parts, enabling specialized LLM-based agents to handle multi-turn interactions and efficient tool-calling functions. 
          Alongside this, we investigate and mitigate challenges unique to smaller models, such as ensuring reliable instruction-following and generating structured outputs—areas that remain 
          underexplored but are critical for practical deployment.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">Research Focus:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 text-justify">
            <li>How do different code representations impact the accuracy of retrieval techniques in long-context understanding?</li>
            <li>How do different code search strategies influence smaller LLMs’ ability to find information in large contexts? </li>
            <li>How does integrating agentic workflows and external software engineering tools affect the performance and context understanding of smaller open-source LLMs in repository-level tasks?</li>      
          </ul>

          <div className="flex flex-wrap items-center gap-8 mt-6">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mr-2">Contacts:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="/teamInfo/genevieve" className="text-blue-600 hover:underline">Genevieve Caumartin</a>{" "}
              </p>
            </div>

            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mr-2">Status:</h3>
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
      <PublicationsIteration project={"ai4se"} all={false}/>
      </div>
    </Layout>
  );
};

export default projectDetail1;
