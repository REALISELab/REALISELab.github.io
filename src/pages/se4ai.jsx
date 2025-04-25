import React from "react";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";

const projectDetail1 = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-full md:w-1/3 flex justify-center mx-auto px-3 my-11">
          <img
            src="img/se4ai.png"
            alt="Bias Mitigation"
            className="rounded-xl w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-bold text-center">
            Bias Mitigation in Machine Learning-Based Systems
          </h1>
        </div>

        {/* Main Description */}
        <div className="mx-auto text-gray-700 text-lg w-full text-left my-10 px-5 max-w-4xl leading-relaxed">
          <p className="mb-6">
            Machine learning models are increasingly used in high-stakes decision making, from credit approvals to criminal justice; however, they often produce biased outcomes that can disproportionately impact marginalized groups. While many bias mitigation techniques have been proposed, there remains little practical guidance on selecting the appropriate methods, how to use them, understanding their limitations, and anticipating their trade-offs.
          </p>
          <p className="mb-6">
            This project conducts a large-scale evaluation of ten state-of-the-art bias mitigation methods across diverse real-life datasets, models, and fairness metrics. By systematically analyzing the impact and robustness of these methods under real-world conditions, we aim to support practitioners in making informed and responsible choices when applying fairness interventions.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Research Questions:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                How effective are bias mitigation techniques at reducing unfair outcomes across different datasets and demographic groups?
              </li>
              <li>
                What is the impact of bias mitigation techniques on machine learning model performance, and how significant are the trade-offs when improving fairness?
              </li>
              <li>
                Which bias mitigation techniques are most likely to produce favorable outcomes, where both fairness and performance improve?
              </li>
              <li>
                How robust are bias mitigation techniques when the data distribution shifts (data drift) and when applied across model variants through fine-tuning?
              </li>
            </ul>
          </div>
        </div>

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
