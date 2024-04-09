import React from "react";
import "tailwindcss/tailwind.css";
import Layout from'@theme/Layout';

const Example = () => {
  const publications = [
    {
      id: 1,
      title: 'The role of library versions in Developer-ChatGPT conversations',
      description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      datetime: '2024-01-29',
      authors: 'D. Costa, R. Raj',
      pdfPathHref: 'publications/the-role-of library-versions-in-Developer-ChatGPT-conversations.pdf',
    },
    {
      id: 2,
      title: 'Predicting the Impact of Crashes Across Release Channels',
      description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      datetime: '2024-01-29',
      authors: 'D. Costa, S. Mujahid, C. Castelluccio',
      pdfPathHref: 'publications/Predicting-the-Impact-of-Crashes-Across-Release-Channels.pdf',
    },
    {
      id: 3,
      title: 'Predicting the First Response Latency of Maintainers and Contributors in Pull Requests',
      description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      datetime: '2023-11-13',
      authors: 'S. Khatoonabadi, A. Abdellatif, D. Costa, E. Shihab',
      pdfPathHref: 'https://arxiv.org/pdf/2311.07786.pdf',
    },
    {
      id: 4,
      title: 'Dependency Practices for Vulnerability Mitigation',
      description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      datetime: '2023-11-13',
      authors: 'A. Javan Jafar, D. Costa, A. Abdellatif, E. Shihab',
      pdfPathHref: 'https://arxiv.org/pdf/2310.07847.pdf',
    },
  ];

  return (
    <Layout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our publications</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Publications made by REALISE Lab
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {publications.map((publication) => (
              <article key={publication.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={publication.datetime} className="text-gray-500">
                    {publication.dateTime}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={publication.pdfPathHref}>
                      <span className="absolute inset-0" />
                      {publication.title}
                    </a>
                  </h3>
                  <h5>Authors: {publication.authors}</h5>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{publication.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Example;
