import Layout from "@theme/Layout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Tweet from "../components/Tweet";
import { IoIosReturnRight } from "react-icons/io";
import PartnersMainPage from "./NewsOnHomePage";
import { news } from "../../content/HomeNews";
import { FaNewspaper } from "react-icons/fa";
export default function Example() {
  return (
    <Layout>
      {/* FIRST CONTAINER HERE */}
      <div className="h-auto gradient-bg-light">
        <div className="flex flex-col justify-center items-center pt-12">
          <img 
            className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[50%] xl:max-w-[50%]" 
            src="img/realise-logo.png" 
            alt="REALISE" 
          />
        </div>
        <div className="extra-black-space"></div>
      </div>












      {/* RIGHT AND LEFT CONTAINER HERE */}
      <div className="lg:flex lg:justify-center lg:px-[200px] flex-wrap py-12">
        <div className="md:w-2/3 md:px-24 px-5">
          <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none mx-auto">
            Located in Concordia University in the beautiful city of Montréal,{" "}
            the <b>RE</b>search on <b>A</b>naLytics and <b>I</b>ntelligence for{" "}
            <b>S</b>oftware <b>E</b>ngineering Lab is a research group that focuses on studying and developing techniques to help software engineers build better software.

            Overall, we use data analytics and artificial intelligence techniques to improve practices related to software maintenance and evolution. We work on the following software engineering areas:
           
            <ul className="list-disc ml-5">
              <li>Software Performance Testing</li>
              <li>Open-Source Software Development and Dependency Management</li>
              <li>Software Development Assistants</li>
              <li>Maintenance and Reliability of Artificial Intelligence-Based Systems</li>
            </ul>

            This website is a hub for our research activities, publications, and news. We are always looking for new collaborations and partnerships. If you are interested in working with us, please contact us.

          </p>
        </div>

        <div className="md:w-1/3 px-7">
          <Tweet />
        </div>
        <div className=" mt-16 relative md:mx-28 mx-5">
          <span className="my-4 relative text-left mb-12 hover:scale-105 duration-150">
              <div className="flex justify-center gap-2">
                <h2>Latest News</h2>
              </div>
            </span>
          {news.map((item, index) => (
            <div
              className="my-4 relative text-left mb-12 hover:scale-105 duration-150"
              key={index}
            >
              <div className="flex items-start gap-3">
                <div>
                  <FaNewspaper size={25} />
                </div>
                <div className="text-sm">
                  <a href={item.href}>
                    <h2>{item.title}</h2>
                  </a>
                </div>
              </div>
              <p className="ml-10">{item.description}</p>
            </div>
          ))}
          <span className="my-4 relative text-left mb-12 hover:scale-105 duration-150">
            <div className="flex justify-center gap-2">
              <h1>Our Partners</h1>
            </div>
          </span>
          <PartnersMainPage />
        </div>
      </div>
    </Layout>
  );
}
