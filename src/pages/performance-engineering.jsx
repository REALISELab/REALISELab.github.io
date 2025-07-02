import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";

const projectDetail = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 3000); // delay image loading by 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      <div className="w-full">
        <div className="w-full md:w-1/3 flex justify-center mx-auto px-3 my-11">
          {showImage ? (
            <img
              src="img/performance_engineering.jpg"
              alt=""
              className="rounded-xl w-full h-full"
            />
          ) : (
            <div className="rounded-xl w-full h-full flex flex-col items-center justify-center text-gray-400 text-xl font-medium space-y-4">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Waiting is annoying, we know......</span>
              </div>
              <div>Waiting is annoying, we know......</div>
            </div>
          )}
        </div>
        <div className="w-full mx-auto">
          <span className=" text-2xl font-bold flex justify-center ">
            {" "}
            Perofrmance Engineering{" "}
          </span>
        </div>
        <div className="w-full max-w-3xl mx-auto px-5">
          <p className="relative mt-6 text-justify text-lg leading-8 text-gray-600">

            Performance is critical in today’s software systems—especially when user experience and retention are on the line. Companies invest heavily in performance testing and monitoring, yet issues still slip through: slow response times, frustrated users, and expensive firefighting measures, which boils down to negative business impact. At REALISE Lab, we focus on identifying these challenges early and designing methods to ensure systems stay fast, scalable, and reliable under pressure. We did this by engaging in academic and industrial collaborations.
            <ul className="list-disc pl-5">
              <li>We provided a tool that leverages static analysis to identify bad practices from a benchmarking used in performance testing.</li>
              <li>We proposed an approach for detecting performance regressions early by propagating component-level anomalies across the architectural model.</li>
              <li>We collaborated with Mozilla to provide a dataset of performance measurements, alerts, and bugs extracted from the Mozilla systems. We believe that this dataset will help researchers and professionals in different performance related areas.</li>
            </ul>
          </p>

        </div>

        <div className=" w-full ">
          <span className=" text-2xl font-bold flex justify-center text-gray-500 ">
            Related Publications:{" "}
          </span>
        </div>
      </div>
      <div className="w-1/2 flex justify-center mx-auto">
        <PublicationsIteration project={"performance-engineering"} all={false} />
      </div>
    </Layout>
  );
};

export default projectDetail;
