import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Hero from '@/components/hero'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'

const query = `{
  "contact": *[_type == "contact"][0]{
    email,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    instagramUrl,
    facebookUrl,
    donationUrl,
    donationImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    stayInTheLoopImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    }
  }
}`

const pageService = new SanityPageService(query)

export default function GetInvolved(initialData) {
  const { data: { contact } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Get Involved" />

      <Header active={'get-involved'} />

      <Hero heading="Get Involved" />

      <Container>
        <div className="relative">
          <article className="mb-[10vw] overflow-hidden pt-3">
            <div className="flex flex-wrap md:-mx-10 mb-[10vw]">
              <div className="w-full md:w-1/2 md:px-10 md:pt-8 order-2 md:order-1">
                <p className="text-xl md:text-2xl xl:text-3xl mb-10 md:mb-12 xl:mb-16">Wivey Grows is a project set up to enable the community to grow together.</p>

                <div className="mb-4 md:mb-10 xl:mb-12">
                  <span className="block uppercase text-lg md:text-xl xl:text-2xl">Email us</span>
                  <a href={`mailto:${contact.email}`} className="block uppercase text-pink hover:text-off-black text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-display underline break-words">info@wiveygrows.net</a>
                </div>

                <div className="mb-4 md:mb-10 xl:mb-12">
                  <span className="block uppercase text-lg md:text-xl xl:text-2xl">Instagram</span>
                  <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="block uppercase text-pink hover:text-off-black text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-display underline break-words">@wiveygrows</a>
                </div>

                <div className="mb-4 md:mb-10 xl:mb-12">
                  <span className="block uppercase text-lg md:text-xl xl:text-2xl">Facebook</span>
                  <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer" className="block uppercase text-pink hover:text-off-black text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-display underline break-words">wiveygrows</a>
                </div>
              </div>

              <div className="w-full md:w-1/2 md:px-10 order-1 md:order-2 mb-12 md:mb-0">
                <div className="relative w-full md:w-11/12">
                  <div className="w-full h-full bg-green absolute inset-0 rounded-2xl rotate-[2.5deg] scale-[1.01] z-0"></div>
                  <Image
                    image={contact.heroImage}
                    widthOverride={700}
                    className="w-full rounded-2xl relative z-10"
                  />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex flex-wrap md:-mx-10">
                <div className="w-full md:w-1/2 md:px-10 text-center mb-12 md:mb-0">
                  <div className="relative mb-8 p-[2px]">
                    <div className="w-full h-full bg-green absolute inset-0 rounded-2xl rotate-[2.5deg] z-0"></div>

                    <Image
                      image={contact.donationImage}
                      widthOverride={700}
                      className="w-full rounded-2xl relative z-10"
                    />
                  </div>
                  <h3 className="text-3xl md:text-[3vw] 2xl:text-[44px] leading-none md:leading-none xl:leading-none 2xl:leading-none text-pink font-display text-center uppercase">Help Us</h3>

                  <a href={contact.donationUrl} target="_blank" rel="noopener noreferrer" className="inline-block mx-auto text-center font-display bg-pink hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none">Make A Donation</a>
                </div>

                <div className="w-full md:w-1/2 md:px-10 text-center">
                  <div className="relative mb-8 p-[2px]">
                    <div className="w-full h-full bg-green-light absolute inset-0 rounded-2xl rotate-[2.5deg] z-0"></div>
                    <Image
                      image={contact.stayInTheLoopImage}
                      widthOverride={700}
                      className="w-full rounded-2xl relative z-10"
                    />
                  </div>
                  <h3 className="text-3xl md:text-[3vw] 2xl:text-[44px] leading-none md:leading-none xl:leading-none 2xl:leading-none text-pink font-display text-center uppercase">Stay In The Loop</h3>

                  <a href="#" className="inline-block mx-auto text-center font-display bg-off-black hover:bg-pink text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none">Get Updates</a>
                </div>
              </div>
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
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}