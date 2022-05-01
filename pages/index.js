import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
    
      <Header active={'home'} />
      
      <div className="w-full min-h-screen py-28 bg-green text-off-white flex items-center justify-center mb-[10vw]">
        <div className="w-10/12 text-center">
          <div className="mb-10">
            <h1 className="text-[12vw] md:text-[10vw] xl:text-[8vw] 2xl:text-[130px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 uppercase font-display">Wivey Grows</h1>
            <p className="text-xl md:text-2xl xl:text-3xl max-w-[980px] mx-auto">Wivey Grows is a grassroots project run by locals. Our mission is to provide the opportunity, space and support for all ages and abilities to grow, eat, learn, create and play in a nurtured and shared haven.</p>
          </div>

          <div className="flex space-x-5 justify-center">
            <Link href="/">
              <a className="block font-display bg-orange px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none">About Us</a>
            </Link>
            <Link href="/">
            <a className="block font-display bg-green-light px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none">Get Involved</a>
            </Link>
          </div>
        </div>
      </div>
      <Container>
        <article className="mb-[10vw] flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h2 className="text-[11vw] md:text-[6.5vw] xl:text-[6vw] 2xl:text-[95px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 md:mb-6 uppercase font-display text-pink">A True<br/>Community</h2>

            <a className="inline-block font-display bg-yellow text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-8 md:mb-0">Our Calendar</a>
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
