import Layout from "@theme/Layout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Tweet from "../components/Tweet";
export default function Example() {
  return (
    <Layout>
      {/* FIRST CONTAINER HERE */}
      <div className="bg-gray-900 w-screen h-[420px] shadow-xl">
        <div className="flex flex-col justify-center items-center pt-12">
          <img className="w-[150px]" src="img/logo.png" alt="REALISE" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl gradient ">
            REsearch on AnaLytics and Intelligence for Software Engineering lab
          </h1>
        </div>
      </div>

      {/* RIGHT AND LEFT CONTAINER HERE */}
      <div className=" w-screen flex justify-center  px-[200px] flex-wrap">
        <div className="w-2/3 px-24 h-screen">
          <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none ">
            Located in Concordia University in the beautiful city of Montréal,{" "}
            <b>RE</b>search on <b>A</b>naLytics and <b>I</b>ntelligence for{" "}
            <b>S</b>oftware <b>E</b>ngineering lab is located in the middle of
            the vibrant downtown. From dependency management to performance
            engineering and building robust AI solutions, we tackle a wide range
            of research topics in aim to enhance software for everyone
          </p>
        </div>
        
        <div className="w-1/3 ">
          <span className="text-white text-lg">
           <Tweet/>
          </span>
        </div>

      </div>
      {/* <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 ">
        <div className="max-w-8xl pb-24 sm:pb-32 flex justify-center items-center flex-wrap lg:py-20 -ml-24">
          <div className=" lg:px-0 lg:pt-4 w-[950px]">
            <div className="mx-5 max-w-2xl">
              <div className="max-w-2xl">
                <img
                  className="h-[100px] w-[100px] -mt-28"
                  src="img/logo.png?color=indigo&shade=600"
                  alt="REALISE"
                />
                <div className="mt-24 sm:mt-32 lg:mt-16 mb-10">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 ">
                      REALISE s area of focus
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Take a look</span>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </a>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl gradient">
                      Exploring the Frontiers of Technology :
                      Our Lab's Journey
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none ">
                      Located in Concordia University in the beautiful city of Montréal, <b>RE</b>search on <b>A</b>naLytics and <b>I</b>ntelligence for <b>S</b>oftware <b>E</b>ngineering
                      lab is located in the middle of the vibrant downtown. From dependency management to performance engineering and
                      building robust AI solutions, we tackle a wide range of research topics in aim to enhance software for everyone
                    </p>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-md lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 mx-auto"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl mx-auto ">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))] w-fit ">
                <div 
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-24 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5 ">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            Tweets by REALISE
                          </div>
                         
                        </div>
                      </div>
                      <div className="px-6 pr-10 pb-14 pt-6 "><Tweet/></div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div> */}
    </Layout>
  );
}
