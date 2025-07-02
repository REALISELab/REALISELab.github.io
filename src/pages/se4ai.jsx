import React from "react";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";

const projectDetail1 = () => {
  return (
    <Layout>
      <div className="w-full">
        {/* Image & Page Title */}
        <div className="w-full md:w-1/3 flex justify-center mx-auto px-3 my-11">
          <img
            src="img/se4ai.png"
            alt="Engineering Reliable AI Systems"
            className="rounded-xl w-full h-full"
          />
        </div>
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Engineering Reliable AI Systems
          </h1>
        </div>

        {/* === Project Card 1: Lifecycle & Maintenance === */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 my-10 border border-gray-200 dark:border-gray-700">
          {/* Card Title */}
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Exploring the Lifecycle and Maintenance Practices of Pre-Trained Models in Open-Source Software
          </h2>

          {/* Abstract */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
            Pre-trained models (PTMs) are becoming a common component in open-source software (OSS) development, yet their roles, maintenance practices, and lifecycle challenges remain underexplored. This report presents a plan for an exploratory study to investigate how PTMs are utilized, maintained, and tested in OSS projects, focusing on models hosted on platforms like Hugging Face and PyTorch Hub. We plan to explore how PTMs are used in open-source software projects and their related maintenance practices, by mining software repositories that use PTMs, and analyze their code-base, historical data, and reported issues. This study aims to provide actionable insights into improving the use and sustainability of PTM in open-source projects and a step towards a foundation for advancing software engineering practices in the context of model dependencies.
          </p>

          {/* Research Focus */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Research Focus:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Profiling key characteristics of PTMs (licensing, domains, size, architecture) used in open-source projects.</li>
            <li>Analyzing integration and usage patterns of PTMs, including roles in core functionality and loading strategies.</li>
            <li>Investigating the lifecycle and maintenance of PTMs: longevity, evolution, and update frequency.</li>
            <li>Assessing testing practices for PTM components: coverage analysis and test case evaluation.</li>
            <li>Examining issue trackers to uncover common challenges and support needs for PTM usage.</li>
          </ul>

          {/* Contacts & Status */}
          <div className="flex flex-wrap items-center gap-8 mt-6">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold mr-2 text-gray-800 dark:text-gray-100">
                Contacts:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="/teamInfo/matin" className="text-blue-600 hover:underline">Matin Koohjani</a>,{" "}
                <a href="/teamInfo/diego" className="text-blue-600 hover:underline">Prof. Diego Costa</a>
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold mr-2 text-gray-800 dark:text-gray-100">
                Status:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Ongoing</p>
            </div>
          </div>
        </div>
        {/* === End Card 1 === */}

        {/* === Project Card 2: Bias Mitigation === */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 my-10 border border-gray-200 dark:border-gray-700">
          {/* Card Title */}
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Bias Mitigation in Machine Learning-Based Systems
          </h2>

          {/* Description */}
          <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            <p className="mb-4">
              Machine learning models are increasingly used in high-stakes decision making, from credit approvals to criminal justice; however, they often produce biased outcomes that can disproportionately impact marginalized groups. While many bias mitigation techniques have been proposed, there remains little practical guidance on selecting the appropriate methods, how to use them, understanding their limitations, and anticipating their trade-offs.
            </p>
            <p>
              This project conducts a large-scale evaluation of ten state-of-the-art bias mitigation methods across diverse real-life datasets, models, and fairness metrics. By systematically analyzing the impact and robustness of these methods under real-world conditions, we aim to support practitioners in making informed and responsible choices when applying fairness interventions.
            </p>
          </div>

          {/* Research Focus */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Research Focus:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>How effective are bias mitigation techniques at reducing unfair outcomes across different datasets and demographic groups?</li>
            <li>What is the impact of bias mitigation techniques on machine learning model performance, and how significant are the trade-offs when improving fairness?</li>
            <li>Which bias mitigation techniques are most likely to produce favorable outcomes, where both fairness and performance improve?</li>
            <li>How robust are bias mitigation techniques when the data distribution shifts (data drift) and when applied across model variants through fine-tuning?</li>
          </ul>

          {/* Contacts & Status */}
          <div className="flex flex-wrap items-center gap-8 mt-6">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold mr-2 text-gray-800 dark:text-gray-100">
                Contacts:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="/teamInfo/zak" className="text-blue-600 hover:underline">Zakaria Laib</a>,{" "}
                <a href="/teamInfo/diego" className="text-blue-600 hover:underline">Prof. Diego Costa</a>
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold mr-2 text-gray-800 dark:text-gray-100">
                Status:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Ongoing</p>
            </div>
          </div>
        </div>
        {/* === End Card 2 === */}

        {/* Publications Section */}
        <div className="w-full mt-16">
          <span className="text-2xl font-bold flex justify-center text-gray-500">
            Related Publications:
          </span>
        </div>
        <div className="w-1/2 flex justify-center mx-auto mt-4">
          <PublicationsIteration project={"se4ai"} all={false} />
        </div>
      </div>
    </Layout>
  );
};

export default projectDetail1;
