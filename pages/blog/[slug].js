import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'

const query = `*[_type == "blog" && slug.current == $slug][0]{
  title,
  publishedDate,
  image {
    asset -> {
      ...
    }
  },
  content,
  author,
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function BlogPost(initialData) {
  const { data: { title, publishedDate, image, content, slug, author } } = pageService.getPreviewHook(initialData)()
  
  let d = new Date(publishedDate);
  let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  return (
    <Layout>
      <NextSeo title={title} />

      <Header active={'blog'} />

      <div className="w-full pt-[200px] pb-8 md:pb-8 xl:pb-12 bg-green relative mb-[17vw] md:mb-[15vw]">
        <div className="w-full text-center relative z-10">
          <h1 className="text-off-white text-[12vw] md:text-[10vw] xl:text-[8vw] 2xl:text-[130px] leading-none md:leading-none xl:leading-none 2xl:leading-none mb-4 uppercase font-display max-w-[1200px] mx-auto px-6 md:px-12">{title}</h1>

          <span className="text-lg md:text-xl xl:text-2xl text-center block mb-1 md:mb-2 text-off-white">{`${da} ${mo} ${ye}`}{author && (<> - by {author}</>)}</span>
        </div>

        <div className="w-full text-green absolute bottom-0 left-0 right-0 mb-[-15vw] z-0">
          <svg className="w-full bg-off-white" viewBox="0 0 1440 320">
            <path fill="currentColor" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,165.3C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
      </div>

      <Container>
        <div className="relative">
          <article className="mb-[10vw]">
            <div className="flex flex-wrap xl:items-center mb-[13vw]">
              <div className="w-11/12 md:w-9/12 mx-auto max-w-[1000px]">
                <div className="relative mb-[8vw] md:mb-[6vw]">
                  <div className={`absolute rounded-2xl inset-0 scale-[1.01] bg-green-light -rotate-3`}></div>

                  <Image
                    image={image}
                    widthOverride={1200}
                    className="w-full rounded-2xl relative z-10 mb-4 md:mb-6"
                  />

                  <div className="absolute top-0 left-0 z-[50] hidden md:block ml-[-5%] md:ml-[-10%] xl:ml-[-14%] mt-[0%] md:mt-[12%] xl:mt-[20%] rotate-3">
                    <div className="w-[18vw] md:w-[14vw]">
                      <ReactSVG
                        src="images/sunflower.svg"
                        beforeInjection={(svg) => {
                          svg.setAttribute('style', 'width: 100%')
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-11/12 md:w-10/12">
                  <div className="content content--fancy mb-10 md:mb-12 xl:mb-16">
                    <BlockContent serializers={{ container: ({ children }) => children }} blocks={content} />
                  </div>

                  <div className="md:flex md:space-x-6">
                    <Link href="/blog">
                      <a className="block md:inline-block font-display bg-pink hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none text-center mb-5 md:mb-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-pink ring-offset-off-white ring-offset-4">Back To All Posts</a>
                    </Link>

                    <Link href="/get-involved">
                      <a className="block md:inline-block font-display bg-green-light hover:bg-off-black text-off-white px-8 py-5 text-lg md:text-[2vw] 2xl:text-[30px] uppercase rounded-full leading-none md:leading-none xl:leading-none 2xl:leading-none text-center focus-visible:outline-none focus-visible:border-none focus-visible:ring-4 ring-green-light ring-offset-off-white ring-offset-4">Get Involved</a>
                    </Link>
                  </div>
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
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('blog')
  return {
    paths: paths,
    fallback: false,
  };
}