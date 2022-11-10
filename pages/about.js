import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { ReactSVG } from 'react-svg'
import Hero from '@/components/hero'
import Link from 'next/link'
import Carousel from '@/components/carousel'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'

const query = `{
  "about": *[_type == "about"][0]{
    title,
    heroHeading,
    introText,
    introImageGallery[] {
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
    quote,
    ethosPoints[],
    ourGrowersText,
    ourSponsorsText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "contact": *[_type == "contact"][0]{
    email
  },
  "growers": *[_type == "growers"] | order(order, asc) {
    firstName,
    lastName,
    image {
      asset -> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    }
  },
  "sponsors": *[_type == "sponsors"] | order(order, asc) {
    name,
    text,
    image {
      asset -> {
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

export default function About(initialData) {
  const { data: { about, contact, growers, sponsors } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title={about.title} />

      <Header active={'about'} />

      <Hero heading={about.heroHeading} />

      <Container>
        <div className="relative">
          <article className="mb-[10vw] overflow-hidden pt-5 px-3 md:px-3 xl:px-4">
            <div className="flex flex-wrap md:-mx-10 xl:items-center mb-[13vw]">
              <div className="w-full md:w-1/2 md:px-10 mb-8 md:mb-0">
                <Carousel single slides={about.introImageGallery} />
              </div>
              <div className="w-full md:w-1/2 md:px-10">
                <p className="text-xl md:text-[20px] lg:text-[22px] xl:text-[26px] leading-snug md:leading-snug xl:leading-snug w-11/12 md:w-10/12 mb-8">{about.introText}</p>

                <Link href="/get-involved"><a className="inline-block font-display bg-pink hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-8 md:mb-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4">Get Involved</a></Link>
              </div>
            </div>
            
            <div className="w-[30vw] md:w-[16vw] xl:w-[13vw] mx-auto text-center md:mb-[2vw] xl:mb-[2vw] mb-8">
              <ReactSVG
                src="images/sunflower.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute('style', 'width: 100%', 'height: auto')
                }}
              />
            </div>

            <blockquote className="mb-[15vw] xl:mb-[12vw]">
              <p className="text-[9vw] md:text-[6.5vw] xl:text-[6vw] 2xl:text-[100px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 font-display text-green-dark text-center w-11/12 mx-auto quote">“{about.quote}”</p>
            </blockquote>

            <div className="grid grid-cols-10 md:grid-cols-12 gap-8 md:gap-16 xl:gap-28 mb-[20vw] xl:mb-[12vw]">
              {about.ethosPoints.map((e, i) => {
                let color = 'bg-[#7C6B58]'
                if (i == 0) { color = 'bg-orange' }
                if (i == 1) { color = 'bg-yellow' }
                if (i == 2) { color = 'bg-green' }
                if (i == 3) { color = 'bg-green-light' }
                if (i == 4) { color = 'bg-pink' }
                return (
                <div className="col-span-10 md:col-span-6 lg:col-span-4 xl:col-span-4" key={i}>
                  <span className={`rounded-full w-12 md:w-16 xl:w-[72px] h-12 md:h-16 xl:h-[72px] flex items-center justify-center mx-auto mb-6 ${color}`}>
                    <span className="block font-display leading-none md:leading-none xl:leading-none uppercase text-off-white text-2xl md:text-3xl xl:text-4xl">0{i + 1}</span>
                  </span>

                  <p className="text-lg md:text-xl xl:text-2xl text-center px-[3%]">{e}</p>
                </div>
                )
              })}
            </div>

            <div className="flex flex-wrap mb-[10vw] md:mb-[7vw]">
              <div className="w-full md:w-1/2">
                <h2 className="text-[11vw] md:text-[6.5vw] xl:text-[6vw] 2xl:text-[95px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 uppercase font-display text-pink">Our<br/>Growers</h2>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xl md:text-2xl xl:text-3xl w-11/12 md:w-10/12">{about.ourGrowersText}</p>
              </div>
            </div>

            <div className="grid grid-cols-10 md:grid-cols-12 gap-8 md:gap-12 xl:gap-16 mb-[10vw] md:mb-[7vw]">
              {growers.map((e, i) => ( 
                <div className="col-span-5 md:col-span-4 lg:col-span-4 xl:col-span-3" key={i}>

                  <div className="h-[200px] md:h-[33vw] xl:h-[25vw] mb-4 md:mb-6">
                    <Image
                      image={e.image}
                      layout="fill"
                      fill
                      noRound
                      widthOverride={700}
                      className={`w-full h-full rounded-2xl relative z-10 border-[7px] ${ (i % 2) == 0 ? 'border-green-dark' : 'border-green-light' }`}
                    /> 
                  </div>

                  <h3 className="text-2xl md:text-[3vw] 2xl:text-[44px] leading-none md:leading-none xl:leading-none 2xl:leading-none text-pink font-display text-center uppercase">{e.firstName}<br/>{e.lastName}</h3>
                </div>
              ))}
            </div>



            <div className="flex flex-wrap mb-[10vw] md:mb-[7vw]">
              <div className="w-full md:w-1/2">
                <h2 className="text-[11vw] md:text-[6.5vw] xl:text-[6vw] 2xl:text-[95px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 uppercase font-display text-pink">Sponsors<br/>&amp; Donors</h2>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xl md:text-2xl xl:text-3xl w-11/12 md:w-10/12">{about.ourSponsorsText}</p>
              </div>
            </div>

            <div className="grid grid-cols-10 md:grid-cols-12 gap-8 md:gap-12 xl:gap-16">
              {sponsors.map((e, i) => ( 
                <div className="col-span-10 md:col-span-6 lg:col-span-4 xl:col-span-4" key={i}>

                  <div className="h-[250px] md:h-[25vw] xl:h-[25vw] mb-4 md:mb-6">
                    <Image
                      image={e.image}
                      layout="fill"
                      fill
                      noRound
                      widthOverride={700}
                      className={`w-full h-full rounded-2xl relative z-10 border-[7px] ${ (i % 2) == 0 ? 'border-green-dark' : 'border-green-light' }`}
                    /> 
                  </div>

                  <h3 className="text-2xl md:text-[3vw] 2xl:text-[44px] leading-none md:leading-none xl:leading-none 2xl:leading-none text-pink font-display text-center uppercase">{e.name}</h3>

                  <div className="content text-center w-full xl:w-9/12 mx-auto">
                    <p className="text-base md:text-lg 2xl:text-xl">{e.text}</p>
                  </div>
                </div>
              ))}
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