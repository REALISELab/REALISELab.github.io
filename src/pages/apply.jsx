import React from "react";
import "tailwindcss/tailwind.css";
import Layout from'@theme/Layout';
import "../css/custom.css";
const features = [
    { name: 'Resume', description: 'some desc' },
    { name: 'Cover Letter', description: 'some desc' },
    { name: 'Dimensions', description: '15" x 3.75" x .75"' },
 
 
  ]
  
  export default function Example() {
    return (
      <Layout>

      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            src="img/team.jpg"
            alt=""
            className="h-[500px] w-full object-cover object-center "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
  
        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl gradient">Join the Team And Apply Now</h2>
            <p className="mt-4 text-gray-500">
             send the requirements bellow on our email 
             lab@gmail.com
            </p>
          </div>
  
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </Layout>
    )
  }
  