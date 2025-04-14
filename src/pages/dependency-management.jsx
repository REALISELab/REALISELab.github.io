import React from "react";
import Layout from "@theme/Layout";
import PublicationsIteration from "../components/PublicationsIteration";
const projectDetail1 = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-full md:w-1/3 flex justify-center mx-auto px-3 my-11">
          <img
            src="https://penntoday.upenn.edu/sites/default/files/2020-03/iStock-486570435%20%281%29.jpg"
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
        <p className="mx-auto text-gray-700 text-lg w-full text-center my-10 flex justify-center px-5">
          
          


        </p>
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
