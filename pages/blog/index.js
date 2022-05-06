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
  "blog": *[_type == "blog"] | order(date desc) {
    title,
    image {
      asset -> {
        ...
      }
    },
    author,
    publishedDate,
    content,
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function BlogIndex(initialData) {
  const { data: { blog }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Blog" />

      <Header active={'blog'} />

      <Hero heading="The Blog" />

      <Container>
        <div className="relative">
          <article className="mb-[10vw]">
            <div className="grid grid-cols-12 gap-8 md:gap-12 xl:gap-20">
            {blog.map((e, i) => {
              let d = new Date(e.publishedDate);
              let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
              let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
              let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

              return (
                <Link href={`/blog/${e.slug.current}`}>
                  <a className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 px-6 text-center group focus-visible:border-none focus-visible:outline-none block w-full" key={i}>
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
                    {e.author && (
                      <span className="text-lg md:text-xl xl:text-2xl text-center block mb-1 md:mb-2">by {e.author}</span>
                    )}
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