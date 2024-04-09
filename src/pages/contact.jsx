import Layout from'@theme/Layout';
export default function Example() {
    return (
        <Layout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="mailto:collaborate@example.com">
                          collaborate@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-2345</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Press</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="mailto:press@example.com">
                          press@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-3456</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="mailto:careers@example.com">
                          careers@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-4567</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a className="font-semibold text-indigo-600" href="mailto:hello@example.com">
                          hello@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-5678</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
                </p>
              </div>
            
              <div className='w-[700px] ml-24'>
              <iframe
                title="Google Maps"
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/sport-gps/">hiking gps</a>
              </iframe>
            </div>
              </div>
            </div>
          </div>
        </div>
   
      </Layout>
    )
  }
  