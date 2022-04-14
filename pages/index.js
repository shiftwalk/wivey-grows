import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <Header active={'home'} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Container>
            <m.article variants={fade} className="mb-12 md:mb-16 xl:mb-24">
              <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl mb-4">Welcome To Wivey Grows</h1>
              <div className="content max-w-3xl mb-4">
                <p>Wivey Grows is a project set up to enable the community to grow together. All are welcome to come, dig, build, plant, eat, share & learn alongside a regular group of gardeners, facilitating the regeneration of this incredible local space.</p>

                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              
              <FancyLink destination="/about" a11yText="Navigate to the about page" label="About Page" underline />
            </m.article>
          </Container>

          <m.div variants={fade} className="w-full">
            <Footer />
          </m.div>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
