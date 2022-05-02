import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Hero from '@/components/hero'

export default function BlogIndex() {
  return (
    <Layout>
      <NextSeo title="Blog" />

      <Header active={'blog'} />

      <Hero heading="The Blog" />

      <Container>
        <div className="relative">
          <article className="mb-[10vw]">
            <div className="grid grid-cols-12 gap-8 md:gap-12 xl:gap-20">
            {[...Array(8)].map((e, i) => ( 
              <Link href="/blog/post">
                <a className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 px-6 text-center" key={i}>
                  <div className="relative mb-2 md:mb-6">
                    <div className={`absolute rounded-2xl inset-0 scale-[1.01] ${ (i % 2) == 0 ? 'bg-green-dark rotate-3' : 'bg-green-light -rotate-3' }`}></div>
                    <img src="https://placedog.net/720/520" alt="CHANGE ME" className={`w-full rounded-2xl relative z-10 mb-4 md:mb-6`} />
                  </div>

                  <span className="text-lg md:text-xl xl:text-2xl text-center block mb-1 md:mb-2">14.05.22</span>
                  <h3 className="text-3xl md:text-[3vw] 2xl:text-[44px] leading-none md:leading-none xl:leading-none 2xl:leading-none text-pink font-display text-center uppercase">Example Blog<br/>Post Title</h3>
                </a>
              </Link>
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
