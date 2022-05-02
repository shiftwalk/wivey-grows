import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { NextSeo } from 'next-seo'
import Hero from '@/components/hero'

export default function Calendar() {
  return (
    <Layout>
      <NextSeo title="Calendar" />

      <Header active={'calendar'} />

      <Hero heading="Calendar" />

      <Container>
        <div className="relative">
          <article className="mb-[10vw]">
            <div className="flex flex-wrap xl:items-center mb-[13vw]">
              <p className="text-lg md:text-xl xl:text-2xl">Embed stuff will go here...</p>
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
