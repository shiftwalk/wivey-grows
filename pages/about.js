import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import { ReactSVG } from 'react-svg'
import Hero from '@/components/hero'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />

      <Header active={'about'} />

      <Hero heading="Our mission" />

      <Container>
        <div className="relative">
          <article className="mb-[10vw] overflow-hidden pt-2">
            <div className="flex flex-wrap md:-mx-10 xl:items-center mb-[13vw]">
              <div className="w-full md:w-1/2 md:px-10 mb-8 md:mb-0">
                <div className="relative">
                  <div className="w-full h-full bg-green absolute inset-0 rounded-2xl rotate-[2.5deg] scale-[1.01] z-0"></div>
                  <img src="https://placedog.net/720/450" alt="CHANGE ME" className="w-full rounded-2xl relative z-10" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:px-10">
                <p className="text-xl md:text-2xl xl:text-3xl w-11/12 md:w-10/12 mb-8">Wivey Grows is a project set up to enable the community to grow together. All are welcome to come, dig, build, plant, eat, share &amp; learn alongside a regular group of gardeners, facilitating the regeneration of this incredible local space.</p>

                <Link href="/get-involved"><a className="inline-block font-display bg-pink hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-8 md:mb-0">Get Involved</a></Link>
              </div>
            </div>
            
            <div className="w-[30vw] md:w-[16vw] xl:w-[30vw] mx-auto text-center md:mb-[2vw] xl:mb-[2vw]">
              <ReactSVG
                src="images/sunflower.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute('style', 'width: 100%', 'height: auto')
                }}
              />
            </div>

            <blockquote className="mb-[15vw] xl:mb-[12vw]">
              <p className="text-[9vw] md:text-[6.5vw] xl:text-[6vw] 2xl:text-[100px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 font-display text-green-dark text-center w-11/12 mx-auto">“The <span className="text-green-light">regeneration of spaces</span> where the interaction between <span className="text-green-light">nature and people</span> can honour the needs of both”</p>
            </blockquote>

            <div className="grid grid-cols-12 gap-8 md:gap-16 xl:gap-28 mb-[20vw] xl:mb-[12vw]">
            {[...Array(6)].map((e, i) => ( 
              <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4" key={i}>
                <span className="rounded-full w-12 md:w-16 xl:w-[72px] h-12 md:h-16 xl:h-[72px] bg-pink flex items-center justify-center mx-auto mb-6">
                  <span className="block font-display leading-none md:leading-none xl:leading-none uppercase text-off-white text-2xl md:text-3xl xl:text-4xl">0{i + 1}</span>
                </span>

                <p className="text-lg md:text-xl xl:text-2xl text-center px-[3%]">To engender respect and understanding of our relationship with and duty of care for the natural world and one another</p>
              </div>
            ))}
            </div>

            <div className="flex flex-wrap mb-[10vw] md:mb-[7vw]">
              <div className="w-full md:w-1/2">
                <h2 className="text-[11vw] md:text-[6.5vw] xl:text-[6vw] 2xl:text-[95px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 uppercase font-display text-pink">Our<br/>Growers</h2>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xl md:text-2xl xl:text-3xl w-11/12 md:w-10/12">Quisque sagittis turpis vel massa posuere pellentesque in condimentum mi. Sed sagittis tortor tellus, sit amet rhoncus nunc fringilla ut. Nullam facilisis dignissim tempus. Cras eget mauris eget enim ultrices vulputate.</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8 md:gap-12 xl:gap-16">
            {[...Array(8)].map((e, i) => ( 
              <div className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3" key={i}>
                <img src="https://placedog.net/550/720" alt="CHANGE ME" className={`w-full rounded-2xl relative z-10 border-[7px] mb-4 md:mb-6 ${ (i % 2) == 0 ? 'border-green-dark' : 'border-green-light' }`} />

                <h3 className="text-2xl md:text-[3vw] 2xl:text-[44px] leading-none md:leading-none xl:leading-none 2xl:leading-none text-pink font-display text-center uppercase">Rosie<br/>Riley</h3>
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
