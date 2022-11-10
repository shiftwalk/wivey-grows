import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Hero from '@/components/hero'
import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'

const query = `{
  "radio": *[_type == "radio"] | order(date desc) {
    title,
    image {
      asset -> {
        ...
      }
    },
    publishedDate,
    content,
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function RadioIndex(initialData) {
  const { data: { radio }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="The Wivey Grows Radio Show" />

      <Header active={'radio'} />

      <Hero heading="The Wivey Grows Radio Show" thin />

      <Container>
        <div className="relative">
          <article className="mb-[10vw]">
            <div className="w-full flex flex-wrap mb-12 md:mb-24 lg:mb-20">
              <div className="w-full lg:w-9/12">
                <div className=" w-full md:max-w-[75vw] lg:max-w-[55vw] xl:max-w-[55vw] 2xl:max-w-[900px] mb-8 md:mb-12 content content--fancy--small">
                  <p>Brand new for Wivey Grows and 10Radio - Sunday 30th October @ 11am sees a brand new 10Radio show broadcast by your host Wiveygrower. Tune in live on 105.3FM (in the 10 parishes area), <a href="http://10radio.org/" target="_blank" rel="noreferrer noopener">10Radio.org</a> on the internet (click the Listen Now link at the bottom of the page), through the 10Radio app (which you can purchase from your app store) or via many internet radio player apps or internet radio websites to hear the following features and more...</p>

                  <ul>
                    <li>• A Gardening, Nature and Wildlife Themed Music Playlist</li>
                    <li>• Interviews with the Wivey Grows Steering Group, Team Leads and Volunteers.</li>
                    <li>• Wivey Grows Project Updates</li>
                    <li>• Updates from the Vegetable Garden</li>
                    <li>• Updates from My Patio (For Small Space Gardeners)</li>
                    <li>• Updates from Team Flowers</li>
                    <li>• Seasonal Growing Advice</li>
                    <li>• Recipe Ideas for Your Seasonal Produce</li>
                    <li>• Weekly Weather Outlook</li>
                    <li>• Weekly Wivey Grows Session Information</li>
                    <li>• Upcoming Wivey Grows Event Information</li>
                    <li>• Rich Talks Nature</li>
                    <li>• Information on How to Get Involved with Wivey Grows</li>
                    <li>• And other Features you want to hear.</li>
                  </ul>

                  <p>You can also follow the Wivey Grows Radio Show and Wivey Grows Facebook pages for regular updates.</p>

                  <p>You can contact the show at <a href="mailto:wiveygrower@10radio.org" target="_blank" rel="noopener noreferrer">wiveygrower@10radio.org</a> if you have any suggestions of features we could add to the show or <a href="mailto:studio@10Radio.org" target="_blank" rel="noopener noreferrer">studio@10Radio.org</a> if you would like to contact the show live during the broadcast.</p>

                  <p>Once the shows have been broadcast live, they will be available here (added below) so that you can listen to them at your leisure if you are unable to listen live.</p>
                </div>
              </div>

              <div className="lg:flex-1">
                <Link href="/get-involved">
                  <a className="block text-center font-display bg-pink hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-5 focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4">Get Involved</a>
                </Link>

                <Link href="/about">
                  <a className="block text-center font-display bg-off-black hover:bg-pink text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-8 md:mb-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-off-black ring-offset-off-white ring-offset-4">Our Mission</a>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-10 md:grid-cols-12 gap-8 md:gap-12 xl:gap-20 ">
            {radio.map((e, i) => {
              let d = new Date(e.publishedDate);
              let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
              let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
              let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

              return (
                <Link href={`/radio/${e.slug.current}`}>
                  <a className="col-span-10 md:col-span-6 lg:col-span-4 xl:col-span-4 px-6 text-center group focus-visible:border-none focus-visible:outline-none block w-full" key={i}>
                    <div className="relative mb-2 md:mb-6">
                      <div className={`absolute rounded-2xl inset-0 scale-[1.01] ${ (i % 2) == 0 ? 'bg-green-dark rotate-3' : 'bg-green-light -rotate-3' }`}></div>

                      <Image
                        image={e.image}
                        widthOverride={700}
                        className="w-full rounded-2xl relative z-10 mb-4 md:mb-6"
                      />
                    </div>

                    <span className="text-lg md:text-xl xl:text-2xl text-center block mb-1 md:mb-2">{`${da} ${mo} ${ye}`}</span>
                    <h3 className="text-3xl md:text-[3vw] 2xl:text-[44px] leading-none md:leading-none xl:leading-none 2xl:leading-none text-pink font-display text-center uppercase group-hover:text-off-black group-focus-visible:outline-none group-focus-visible:border-none group-focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4 mb-2 md:mb-3">{e.title}</h3>
                  </a>
                </Link>
                )
              })}
            </div>
          </article>
        </div>
      </Container>

      <div className="w-full">
        <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}