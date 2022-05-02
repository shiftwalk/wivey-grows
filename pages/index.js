import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
    
      <Header active={'home'} />
      
      <div className="w-full min-h-screen py-28 bg-green text-off-white flex items-center justify-center mb-[15vw] md:mb-[15vw] xl:mb-[12vw]">

        <div className="absolute bottom-0 left-0 top-auto z-0 -mb-6 md:-mb-12">
          <div className="w-[36vw] md:w-[25vw] xl:w-[22vw] max-w-[40vh] ml-[-10vw] md:ml-0">
            <ReactSVG 
              src="images/person.svg"
              beforeInjection={(svg) => {
                svg.setAttribute('style', 'width: 100%', 'height: auto')
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-[30vw] top-auto z-0 -mb-6 md:-mb-20 hidden md:block">
          <div className="w-[36vw] md:w-[15vw] xl:w-[12vw] max-w-[30vh] ml-[-10vw] md:ml-0">
            <ReactSVG 
              src="images/sunflower.svg"
              beforeInjection={(svg) => {
                svg.setAttribute('style', 'width: 100%', 'height: auto')
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 top-auto z-0 -mb-6 md:-mb-12">
          <div className="w-[55vw] md:w-[40vw] xl:w-[33vw] max-w-[50vh] mr-[0] md:mr-0">
            <ReactSVG 
              src="images/bench.svg"
              beforeInjection={(svg) => {
                svg.setAttribute('style', 'width: 100%', 'height: auto')
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 top-auto z-0 -mb-6 md:-mb-12 mr-[43vw] md:mr-[33vw] xl:mr-[25vw]">
          <div className="w-[20vw] md:w-[15vw] xl:w-[13vw] max-w-[220px] mr-[0] md:mr-0">
            <ReactSVG 
              src="images/hamper.svg"
              beforeInjection={(svg) => {
                svg.setAttribute('style', 'width: 100%', 'height: auto')
              }}
            />
          </div>
        </div>

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

              <h1 className="text-[12vw] md:text-[10vw] xl:text-[8vw] 2xl:text-[130px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 uppercase font-display inline-block">Wivey Grows</h1>
            </div>
            <p className="text-xl md:text-[23px] xl:text-[27px] leading-snug md:leading-snug xl:leading-snug max-w-[780px] 2xl:max-w-[880px] mx-auto">Wivey Grows is a grassroots project run by locals. Our mission is to provide the opportunity, space and support for all ages and abilities to grow, eat, learn, create and play in a nurtured and shared haven.</p>
          </div>

          <div className="flex space-x-5 justify-center">
            <Link href="/about">
              <a className="block font-display bg-orange hover:bg-off-black px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none">About Us</a>
            </Link>
            <Link href="/get-involved">
              <a className="block font-display bg-green-light hover:bg-off-black px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none">Get Involved</a>
            </Link>
          </div>
        </div>
      </div>
      <Container>
        <article className="mb-[10vw] flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h2 className="text-[11vw] md:text-[6.5vw] xl:text-[6vw] 2xl:text-[95px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 uppercase font-display text-pink">A True<br/>Community</h2>

            <Link href="/calendar">
              <a className="inline-block font-display bg-yellow hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-8 md:mb-0">Our Calendar</a>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xl md:text-2xl xl:text-3xl w-11/12 md:w-10/12">Langley House is our beautiful 11-acre home! There are meadows to enjoy, flower and vegetable patches to build, a lake to explore, an orchard to re-establish, a sensory garden to bring back to life, trees &amp; willow in abundance for green woodwork, spaces for eco and horticultural therapy and a cob pizza oven to build!</p>
          </div>
        </article>
      </Container>

      <div className="w-full">
        <Footer />
      </div>
    </Layout>
  )
}
