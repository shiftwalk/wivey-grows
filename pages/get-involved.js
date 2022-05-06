import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Hero from '@/components/hero'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'
import { ReactSVG } from 'react-svg'

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
    becomeAWiveyGrowerText,
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
          <article className="mb-[10vw] pt-3 md:w-10/12 mx-auto">
            <div className="w-full flex flex-wrap mb-8 md:mb-[8vw] lg:-mx-10 relative">
              <div className="w-full md:w-9/12 lg:px-10">
                <h2 className="text-[10vw] md:text-[6.2vw] xl:text-[5.25vw] 2xl:text-[85px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 uppercase font-display text-pink">Become A<br/>Wivey Grower</h2>

                <div className=" w-full md:max-w-[55vw] lg:max-w-[45vw] xl:max-w-[40vw] 2xl:max-w-[780px] mb-8 md:mb-12 content content--fancy--small">
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={contact.becomeAWiveyGrowerText} />
                </div>
              </div>

              <div className="lg:flex-1 relative">
                <a href="http://bttr.im/bm7b6" target="_blank" rel="noreferrer noopener" className="block text-center font-display bg-pink hover:bg-off-black text-off-white px-6 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 lg:mb-6 focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4">Become a Wivey Grower</a>

                <a href="https://app.betterimpact.com/Login/LoginNoSearch/?agencyGuid=e7f8b012-8f7d-400d-a399-6255d119f17d" target="_blank" rel="noreferrer noopener" className="block text-center font-display bg-off-black hover:bg-pink text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-8 md:mb-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-off-black ring-offset-off-white ring-offset-4">Wivey Grower Login</a>

                <div className="absolute bottom-0 right-0 top-auto z-0 mb-[10%] hidden lg:block">
                  <div className="w-[20vw] md:w-[15vw] xl:w-[20vw] max-w-[300px] mr-[0] md:mr-0">
                    <ReactSVG
                      src="images/hamper.svg"
                      beforeInjection={(svg) => {
                        svg.setAttribute('style', 'width: 100%', 'height: auto')
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:-mx-10 mb-[10vw]">
              <div className="w-full md:w-1/2 md:px-10 md:pt-8 order-2 md:order-1">

                <div className="mb-4 md:mb-10 xl:mb-12">
                  <span className="block uppercase text-lg md:text-xl xl:text-2xl">Email us</span>
                  <a href={`mailto:${contact.email}`} className="inline-block uppercase text-pink hover:text-off-black text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-display underline break-words focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4">info@wiveygrows.net</a>
                </div>

                <div className="mb-4 md:mb-10 xl:mb-12">
                  <span className="block uppercase text-lg md:text-xl xl:text-2xl">Instagram</span>
                  <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-block uppercase text-pink hover:text-off-black text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-display underline break-words focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4">@wiveygrows</a>
                </div>

                <div className="mb-4 md:mb-10 xl:mb-12">
                  <span className="block uppercase text-lg md:text-xl xl:text-2xl">Facebook</span>
                  <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-block uppercase text-pink hover:text-off-black text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-display underline break-words focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4">wiveygrows</a>
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

                  <a href="https://www.stewardship.org.uk/pages/wiveygrows" target="_blank" rel="noopener noreferrer" className="inline-block mx-auto text-center font-display bg-pink hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4">Make A Donation</a>
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

                  <a href="https://wiveycares.us20.list-manage.com/subscribe?u=5f56eb825ed21a0b7f53393e7&id=50725394d5" target="_blank" rel="noopener noreferrer" className="inline-block mx-auto text-center font-display bg-off-black hover:bg-pink text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-off-black ring-offset-off-white ring-offset-4">Get Updates</a>
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
