import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import Carousel from '@/components/carousel'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    heroHeading,
    heroText,
    communityText,
    galleryVideo {
      asset-> {
        ...
      }
    },
    imageGallery[] {
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
    galleryImage {
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
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "contact": *[_type == "contact"][0]{
    email
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home, contact } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title={home.title} />
    
      <Header active={'home'} />
      
      <div className="w-full min-h-screen py-28 bg-green text-off-white flex items-center justify-center mb-[15vw] md:mb-[15vw] xl:mb-[12vw]">
        <div className="absolute bottom-0 left-[0] md:left-0 xl:left-[0] top-auto z-[1] -mb-6 xl:-mb-5 block">
          <div className="w-[28vw] md:w-[20vw] xl:w-[23vw] 2xl:w-[20vw] max-w-[28vh] ml-[-10vw] md:ml-[5vw] xl:ml-[5vw]">
            <ReactSVG 
              src="images/sunflower.svg"
              beforeInjection={(svg) => {
                svg.setAttribute('style', 'width: 100%', 'height: auto')
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-[0] md:left-0 xl:left-[0] top-auto z-0 -mb-8 xl:-mb-12 block">
          <div className="w-[30vw] md:w-[20vw] xl:w-[23vw] 2xl:w-[20vw] max-w-[28vh] ml-[10vw] md:ml-[17vw] xl:ml-[17vw] rotate-45">
            <ReactSVG 
              src="images/flowers.svg"
              beforeInjection={(svg) => {
                svg.setAttribute('style', 'width: 100%', 'height: auto')
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 top-auto z-0 -mb-6 md:-mb-12">
          <div className="w-[45vw] md:w-[40vw] xl:w-[33vw] max-w-[50vh] mr-[0] md:mr-0">
            <ReactSVG 
              src="images/bench.svg"
              beforeInjection={(svg) => {
                svg.setAttribute('style', 'width: 100%', 'height: auto')
              }}
            />
          </div>
        </div>

        {/* <div className="absolute bottom-0 right-0 top-auto z-0 -mb-6 md:-mb-12 mr-[43vw] md:mr-[33vw] xl:mr-[25vw]">
          <div className="w-[20vw] md:w-[15vw] xl:w-[13vw] max-w-[220px] mr-[0] md:mr-0">
            <ReactSVG 
              src="images/hamper.svg"
              beforeInjection={(svg) => {
                svg.setAttribute('style', 'width: 100%', 'height: auto')
              }}
            />
          </div>
        </div> */}

        <div className="w-10/12 text-center relative z-10">
          <div className="mb-10">
            <div className="relative inline-block">
              <div className="hidden lg:block absolute bottom-0 right-0 z-0 md:mb-[10%] xl:mb-[10%] mr-[-15%]">
                <div className="md:w-[23vw] lg:w-[20vw] max-w-[240px]">
                  <ReactSVG 
                    src="images/tools.svg"
                    beforeInjection={(svg) => {
                      svg.setAttribute('style', 'width: 100%')
                    }}
                  />
                </div>
              </div>

              <h1 className="text-[12vw] md:text-[10vw] xl:text-[8vw] 2xl:text-[130px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 uppercase font-display inline-block">{home.heroHeading}</h1>
            </div>
            <p className="text-[17px] md:text-[20px] lg:text-[22px] xl:text-[26px] leading-snug md:leading-snug xl:leading-snug max-w-[650px] 2xl:max-w-[880px] mx-auto">{home.heroText}</p>
          </div>

          <div className="flex space-x-3 md:space-x-5 justify-center">
            <Link href="/about">
              <a className="block font-display bg-orange hover:bg-off-black px-5 md:px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-orange ring-offset-green ring-offset-4">About Us</a>
            </Link>
            <Link href="/get-involved">
              <a className="block font-display bg-green-light hover:bg-off-black px-5 md:px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-green-light ring-offset-green ring-offset-4">Get Involved</a>
            </Link>
          </div>
        </div>
      </div>
      <Container>
        <article className="mb-[10vw] flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h2 className="text-[11vw] md:text-[6.5vw] xl:text-[6vw] 2xl:text-[95px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 uppercase font-display text-pink">A True<br/>Community</h2>

            <Link href="/calendar">
              <a className="inline-block font-display bg-yellow hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-8 md:mb-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-yellow ring-offset-off-white ring-offset-4">Our Calendar</a>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] leading-snug md:leading-snug xl:leading-snug w-11/12 md:w-10/12">{home.communityText}</p>
          </div>
        </article>
      </Container>

      <Carousel slides={home.imageGallery} video={home.galleryVideo.asset.url} videoImage={home.galleryImage} />

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