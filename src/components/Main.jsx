import Layout from "@theme/Layout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Tweet from "../components/Tweet";
import { IoIosReturnRight } from "react-icons/io";
import PartnersMainPage from "./PartnersOnHomePage";
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
      <div className="lg:flex lg:justify-center lg:px-[200px] flex-wrap py-12">

        <div className="w-full flex flex-col md:flex-row md:justify-between mx-auto px-8">
          <div className="md:w-[60%]">
            <p className="relative mt-6 text-justify text-lg leading-8 text-gray-600">
              <span className="text-gray-600">
                Welcome to the <b>RE</b>search on <b>A</b>na<b>L</b>ytics and <b>I</b>ntelligence for {" "} 
                <b>S</b>oftware <b>E</b>ngineering (REALISE) Lab!
              </span>
              <br />
              We are a dynamic and inclusive research group 
              at Concordia University, located in the vibrant city of Montréal.
              At REALISE, our mission is to help engineers build better software. We leverage the power of 
              data analytics and artificial intelligence to enhance software maintenance and evolution practices. 

              <span className="text-gray-600">
                Our current research focuses on:
                <ul className="list-disc ml-5">
                  <li><b>Software Performance Testing</b></li>
                  <li><b>Open-Source Software Development and Dependency Management</b></li>
                  <li><b>Software Development Assistants</b></li>
                  <li><b>Maintenance and Reliability of AI-Based Systems</b></li>
                </ul>
              </span>

              Montréal, Canada’s second-largest city, is known for its innovation, culture, and academic excellence. 
              Concordia University is one of the top 100 universities under 50 years and has an exceptional Software Engineering program, currently ranked  <a href="https://csrankings.org/#/fromyear/2014/toyear/2024/index?soft&world" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">5th in the world</a>.

              We warmly welcome collaborations and partnerships. If you’d like to work with us, please <a href="/contact" className="text-blue-500 underline">get in touch</a>.
              <br/>
              For prospective graduate students, Concordia offers a strong research environment in Software Engineering. If you’re interested in joining our lab, please read the <a href="/apply" className="text-blue-500 underline">application instructions</a>.
            </p>
          </div>

          <div className="md:w-[38%] flex justify-end">
            <Tweet />
          </div>
        </div>

        <span className="block max-w-4xl mx-auto mt-4 mb-1 md:mt-8 md:mb-2 lg:mt-12 lg:mb-4 xl:mt-16 xl:mb-6 text-left hover:scale-105 duration-150">
          <div className="flex justify-center gap-2">
            <h2>Meet the Team</h2>
          </div>
        </span>
        <div className="flex justify-center my-4 px-8">
          <img
            src="img/group_picture.jpg"
            alt="Group Picture"
            className="w-full px- rounded-lg shadow-lg"
            onClick={() => window.location.href = '/team'}
          />
        </div>
        <div className="mt-16 relative mx-auto px-8">
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
