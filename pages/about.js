import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />

      <Header active={'about'} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Container>
            <m.div variants={fade} className="mb-12 md:mb-16 xl:mb-24">
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">About Page</h1>
              <div className="content max-w-3xl mb-8 md:mb-12">
                <p>Wivey Grows is a project set up to enable the community to grow together. All are welcome to come, dig, build, plant, eat, share & learn alongside a regular group of gardeners, facilitating the regeneration of this incredible local space.</p>

                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h2 className="font-bold text-xl md:text-2xl xl:text-3xl mb-4 mt-12">Our Growers</h2>
                
                <p className="w-8/12">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              <div className="grid grid-cols-12 gap-6 md:gap-8">
                {[...Array(8)].map((index) => ( 
                  <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 bg-gray-100 p-6">
                    <h3 className="font-bold text-lg md:text-xl mb-2">Rosie Riley</h3>
                    
                    <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                  </div>
                ))}
              </div>
            </m.div>
          </Container>

          <m.div variants={fade} className="w-full">
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
