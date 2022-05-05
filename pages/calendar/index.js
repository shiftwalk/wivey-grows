import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Hero from '@/components/hero'
import Link from 'next/link'
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "calendar": *[_type == "calendar"][0]{
    title,
    introText
  }
}`

const pageService = new SanityPageService(query)

export default function Calendar(initialData) {
  const { data: { calendar, contact } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Calendar" />

      <Header active={'calendar'} />

      <Hero heading="Calendar" />

      <Container>
        <div className="relative">
          <article className="mb-[10vw]">
            <div className="flex flex-wrap md:w-10/12 mx-auto">
              <div className="w-full flex flex-wrap mb-8 md:mb-12">
                <div className="w-9/12">
                  <p className="text-lg md:text-xl xl:text-2xl w-full max-w-[40vw] mb-8 md:mb-12">{calendar.introText}</p>
                </div>

                <div className="flex-1">
                  <a href="http://bttr.im/bm7b6" target="_blank" rel="noreferrer noopener" className="inline-block text-center font-display bg-pink hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none mb-8 md:mb-0">Become a Wivey Grower</a>
                </div>
              </div>

              <div className="bg-green h-[110vw] md:h-[60vw] p-6 rounded-2xl w-full">
                <iframe className="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%237CB342&ctz=Europe%2FLondon&title=Wivey%20Grows&showPrint=0&hl=en_GB&src=d2l2ZXlncm93c0BnbWFpbC5jb20" frameborder="0" scrolling="no"></iframe>
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